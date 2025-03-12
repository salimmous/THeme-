<?php
/**
 * Template part for displaying club posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package City_Club
 */

// Get club meta data
$location = get_post_meta( get_the_ID(), 'club_location', true );
$rating = get_post_meta( get_the_ID(), 'club_rating', true );
$opening_hours = get_post_meta( get_the_ID(), 'club_opening_hours', true );
$is_new = get_post_meta( get_the_ID(), 'club_is_new', true );

// Get club features
$features = get_the_terms( get_the_ID(), 'club_feature' );
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'club-card' ); ?>>
	<div class="club-card-image">
		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( 'medium', array( 'class' => 'club-card-img' ) ); ?>
		<?php else : ?>
			<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/placeholder.jpg' ); ?>" alt="<?php the_title_attribute(); ?>" class="club-card-img">
		<?php endif; ?>
		
		<?php if ( $is_new ) : ?>
			<div class="club-card-badge"><?php esc_html_e( 'New', 'city-club' ); ?></div>
		<?php endif; ?>
	</div>

	<div class="club-card-content">
		<h3 class="club-card-title">
			<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
		</h3>

		<?php if ( $location ) : ?>
			<div class="club-card-location">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="club-card-location-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
				<?php echo esc_html( $location ); ?>
			</div>
		<?php endif; ?>

		<?php if ( $features && ! is_wp_error( $features ) ) : ?>
			<div class="club-card-features">
				<?php foreach ( $features as $feature ) : ?>
					<span class="club-card-feature"><?php echo esc_html( $feature->name ); ?></span>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>

		<div class="club-card-footer">
			<?php if ( $rating ) : ?>
				<div class="club-card-rating">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="club-card-rating-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
					<?php echo esc_html( $rating ); ?>/5
				</div>
			<?php endif; ?>

			<a href="<?php the_permalink(); ?>" class="club-card-link">
				<?php esc_html_e( 'View Details', 'city-club' ); ?>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="club-card-link-icon"><polyline points="9 18 15 12 9 6"></polyline></svg>
			</a>
		</div>
	</div>
</article><!-- #post-<?php the_ID(); ?> -->
