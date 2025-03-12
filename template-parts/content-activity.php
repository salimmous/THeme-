<?php
/**
 * Template part for displaying activity posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package City_Club
 */

// Get activity meta data
$difficulty = get_post_meta( get_the_ID(), 'activity_difficulty', true );
$duration = get_post_meta( get_the_ID(), 'activity_duration', true );

// Get activity category
$categories = get_the_terms( get_the_ID(), 'activity_category' );
$category = $categories && ! is_wp_error( $categories ) ? $categories[0]->name : '';

// Set difficulty badge class
$difficulty_class = '';
if ( $difficulty === 'beginner' ) {
	$difficulty_class = 'beginner';
} elseif ( $difficulty === 'intermediate' ) {
	$difficulty_class = 'intermediate';
} elseif ( $difficulty === 'advanced' ) {
	$difficulty_class = 'advanced';
}
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'activity-card' ); ?>>
	<div class="activity-card-image">
		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( 'medium', array( 'class' => 'activity-card-img' ) ); ?>
		<?php else : ?>
			<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/placeholder.jpg' ); ?>" alt="<?php the_title_attribute(); ?>" class="activity-card-img">
		<?php endif; ?>
		
		<?php if ( $difficulty ) : ?>
			<div class="activity-card-badge <?php echo esc_attr( $difficulty_class ); ?>">
				<?php echo esc_html( ucfirst( $difficulty ) ); ?>
			</div>
		<?php endif; ?>
	</div>

	<div class="activity-card-content">
		<div class="activity-card-header">
			<div class="activity-card-header-top">
				<h3 class="activity-card-title">
					<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
				</h3>

				<?php if ( $duration ) : ?>
					<div class="activity-card-duration"><?php echo esc_html( $duration ); ?></div>
				<?php endif; ?>
			</div>

			<?php if ( $category ) : ?>
				<div class="activity-card-category"><?php echo esc_html( $category ); ?></div>
			<?php endif; ?>
		</div>

		<div class="activity-card-description">
			<?php the_excerpt(); ?>
		</div>

		<div class="activity-card-footer">
			<a href="<?php the_permalink(); ?>" class="activity-card-button">
				<?php esc_html_e( 'Learn More', 'city-club' ); ?>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="activity-card-button-icon"><polyline points="9 18 15 12 9 6"></polyline></svg>
			</a>
		</div>
	</div>
</article><!-- #post-<?php the_ID(); ?> -->
