<?php
/**
 * The template for displaying testimonial archives
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package City_Club
 */

get_header();
?>

<main id="primary" class="site-main">

	<div class="testimonials-archive">
		<div class="container">
			<header class="page-header">
				<h1 class="page-title"><?php esc_html_e( 'Testimonials', 'city-club' ); ?></h1>
				<div class="page-description">
					<p><?php esc_html_e( 'What our members say about us', 'city-club' ); ?></p>
				</div>
			</header><!-- .page-header -->

			<?php if ( have_posts() ) : ?>

				<div class="testimonials-grid">
					<?php
					/* Start the Loop */
					while ( have_posts() ) :
						the_post();

						/*
						 * Include the Post-Type-specific template for the content.
						 */
						get_template_part( 'template-parts/content', 'testimonial' );

					endwhile;
					?>
				</div>

				<?php
				the_posts_navigation();

			else :

				get_template_part( 'template-parts/content', 'none' );

			endif;
			?>
		</div>
	</div>

</main><!-- #main -->

<?php
get_footer();
