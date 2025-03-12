<?php
/**
 * Template part for displaying testimonial posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package City_Club
 */

// Get testimonial meta data
$author_role = get_post_meta( get_the_ID(), 'testimonial_author_role', true );
$rating = get_post_meta( get_the_ID(), 'testimonial_rating', true );
$club = get_post_meta( get_the_ID(), 'testimonial_club', true );
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'testimonial-card' ); ?>>
	<div class="testimonial-card-header">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="testimonial-quote-icon"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>

		<?php if ( $rating ) : ?>
			<div class="testimonial-rating">
				<?php for ( $i = 1; $i <= 5; $i++ ) : ?>
					<?php if ( $i <= $rating ) : ?>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="testimonial-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
					<?php else : ?>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="testimonial-star-empty"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
					<?php endif; ?>
				<?php endfor; ?>
			</div>
		<?php endif; ?>
	</div>

	<div class="testimonial-quote">
		<?php the_content(); ?>
	</div>

	<div class="testimonial-footer">
		<div class="testimonial-avatar">
			<?php if ( has_post_thumbnail() ) : ?>
				<?php the_post_thumbnail( 'thumbnail' ); ?>
			<?php else : ?>
				<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/avatar-placeholder.jpg' ); ?>" alt="<?php the_title_attribute(); ?>">
			<?php endif; ?>
		</div>

		<div>
			<h4 class="testimonial-author"><?php the_title(); ?></h4>
			
			<?php if ( $author_role ) : ?>
				<div class="testimonial-role"><?php echo esc_html( $author_role ); ?></div>
			<?php endif; ?>
			
			<?php if ( $club ) : ?>
				<div class="testimonial-club"><?php echo esc_html( $club ); ?></div>
			<?php endif; ?>
		</div>
	</div>
</article><!-- #post-<?php the_ID(); ?> -->
