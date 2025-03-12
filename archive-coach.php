<?php
/**
 * The template for displaying coach archives
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package City_Club
 */

get_header();
?>

<main id="primary" class="site-main">

	<div class="coaches-archive">
		<div class="container">
			<header class="page-header">
				<h1 class="page-title"><?php esc_html_e( 'Our Coaches', 'city-club' ); ?></h1>
				<div class="page-description">
					<p><?php esc_html_e( 'Meet our certified fitness professionals', 'city-club' ); ?></p>
				</div>
			</header><!-- .page-header -->

			<div class="coaches-filter">
				<form class="coaches-filter-form" method="get">
					<select name="specialization" id="specialization-filter">
						<option value=""><?php esc_html_e( 'All Specializations', 'city-club' ); ?></option>
						<?php
						// Get all specializations from coach posts
						$specializations = get_terms( array(
							'taxonomy' => 'coach_specialization',
							'hide_empty' => true,
						) );

						foreach ( $specializations as $specialization ) :
							$selected = isset( $_GET['specialization'] ) && $_GET['specialization'] === $specialization->slug ? 'selected' : '';
							echo '<option value="' . esc_attr( $specialization->slug ) . '" ' . $selected . '>' . esc_html( $specialization->name ) . '</option>';
						endforeach;
						?>
					</select>

					<select name="club" id="club-filter">
						<option value=""><?php esc_html_e( 'All Clubs', 'city-club' ); ?></option>
						<?php
						// Get all clubs
						$clubs = get_posts( array(
							'post_type' => 'club',
							'posts_per_page' => -1,
							'orderby' => 'title',
							'order' => 'ASC',
						) );

						foreach ( $clubs as $club ) :
							$selected = isset( $_GET['club'] ) && $_GET['club'] === $club->ID ? 'selected' : '';
							echo '<option value="' . esc_attr( $club->ID ) . '" ' . $selected . '>' . esc_html( $club->post_title ) . '</option>';
						endforeach;
						?>
					</select>

					<input type="text" name="search" id="search-filter" placeholder="<?php esc_attr_e( 'Search coaches...', 'city-club' ); ?>" value="<?php echo isset( $_GET['search'] ) ? esc_attr( $_GET['search'] ) : ''; ?>">

					<button type="submit"><?php esc_html_e( 'Filter', 'city-club' ); ?></button>
				</form>
			</div>

			<?php if ( have_posts() ) : ?>

				<div class="coaches-grid">
					<?php
					/* Start the Loop */
					while ( have_posts() ) :
						the_post();

						/*
						 * Include the Post-Type-specific template for the content.
						 */
						get_template_part( 'template-parts/content', 'coach' );

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
