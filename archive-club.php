<?php
/**
 * The template for displaying club archives
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package City_Club
 */

get_header();
?>

<main id="primary" class="site-main">

	<div class="clubs-archive">
		<div class="container">
			<header class="page-header">
				<h1 class="page-title"><?php esc_html_e( 'Our Clubs', 'city-club' ); ?></h1>
				<div class="page-description">
					<p><?php esc_html_e( 'Find a City Club location near you', 'city-club' ); ?></p>
				</div>
			</header><!-- .page-header -->

			<div class="clubs-filter">
				<form class="clubs-filter-form" method="get">
					<select name="city" id="city-filter">
						<option value=""><?php esc_html_e( 'All Cities', 'city-club' ); ?></option>
						<?php
						// Get all cities from club posts
						$cities = get_terms( array(
							'taxonomy' => 'club_city',
							'hide_empty' => true,
						) );

						foreach ( $cities as $city ) :
							$selected = isset( $_GET['city'] ) && $_GET['city'] === $city->slug ? 'selected' : '';
							echo '<option value="' . esc_attr( $city->slug ) . '" ' . $selected . '>' . esc_html( $city->name ) . '</option>';
						endforeach;
						?>
					</select>

					<select name="feature" id="feature-filter">
						<option value=""><?php esc_html_e( 'All Features', 'city-club' ); ?></option>
						<?php
						// Get all features from club posts
						$features = get_terms( array(
							'taxonomy' => 'club_feature',
							'hide_empty' => true,
						) );

						foreach ( $features as $feature ) :
							$selected = isset( $_GET['feature'] ) && $_GET['feature'] === $feature->slug ? 'selected' : '';
							echo '<option value="' . esc_attr( $feature->slug ) . '" ' . $selected . '>' . esc_html( $feature->name ) . '</option>';
						endforeach;
						?>
					</select>

					<input type="text" name="search" id="search-filter" placeholder="<?php esc_attr_e( 'Search clubs...', 'city-club' ); ?>" value="<?php echo isset( $_GET['search'] ) ? esc_attr( $_GET['search'] ) : ''; ?>">

					<button type="submit"><?php esc_html_e( 'Filter', 'city-club' ); ?></button>
				</form>
			</div>

			<?php if ( have_posts() ) : ?>

				<div class="clubs-grid">
					<?php
					/* Start the Loop */
					while ( have_posts() ) :
						the_post();

						/*
						 * Include the Post-Type-specific template for the content.
						 */
						get_template_part( 'template-parts/content', 'club' );

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
