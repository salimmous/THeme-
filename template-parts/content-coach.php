<?php
/**
 * Template part for displaying coach posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package City_Club
 */

// Get coach meta data
$experience = get_post_meta( get_the_ID(), 'coach_experience', true );
$rating = get_post_meta( get_the_ID(), 'coach_rating', true );
$location = get_post_meta( get_the_ID(), 'coach_location', true );

// Get coach specializations
$specializations = get_the_terms( get_the_ID(), 'coach_specialization' );

// Get coach certifications
$certifications = get_post_meta( get_the_ID(), 'coach_certifications', true );
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'coach-card' ); ?>>
	<div class="coach-card-image">
		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( 'medium', array( 'class' => 'coach-card-img' ) ); ?>
		<?php else : ?>
			<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/placeholder.jpg' ); ?>" alt="<?php the_title_attribute(); ?>" class="coach-card-img">
		<?php endif; ?>
		
		<?php if ( $rating ) : ?>
			<div class="coach-card-rating">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="coach-card-rating-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
				<?php echo esc_html( $rating ); ?>/5
			</div>
		<?php endif; ?>
	</div>

	<div class="coach-card-content">
		<div class="coach-card-header">
			<h3 class="coach-card-title">
				<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
			</h3>

			<?php if ( $experience ) : ?>
				<div class="coach-card-experience">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="coach-card-experience-icon"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
					<?php printf( esc_html__( '%s years experience', 'city-club' ), esc_html( $experience ) ); ?>
				</div>
			<?php endif; ?>

			<?php if ( $location ) : ?>
				<div class="coach-card-location">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="coach-card-location-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
					<?php echo esc_html( $location ); ?>
				</div>
			<?php endif; ?>
		</div>

		<?php if ( $specializations && ! is_wp_error( $specializations ) ) : ?>
			<div class="coach-card-specializations">
				<?php foreach ( $specializations as $specialization ) : ?>
					<span class="coach-card-specialization"><?php echo esc_html( $specialization->name ); ?></span>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>

		<div class="coach-card-description">
			<?php the_excerpt(); ?>
		</div>

		<div class="coach-card-footer">
			<a href="<?php the_permalink(); ?>" class="coach-card-button">
				<?php esc_html_e( 'View Profile', 'city-club' ); ?>
			</a>
		</div>
	</div>
</article><!-- #post-<?php the_ID(); ?> -->
