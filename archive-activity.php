<?php
/**
 * The template for displaying activity archives
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package City_Club
 */

get_header();
?>

<main id="primary" class="site-main">

	<div class="activities-archive">
		<div class="container">
			<header class="page-header">
				<h1 class="page-title"><?php esc_html_e( 'Our Activities', 'city-club' ); ?></h1>
				<div class="page-description">
					<p><?php esc_html_e( 'Discover our wide range of fitness activities', 'city-club' ); ?></p>
				</div>
			</header><!-- .page-header -->

			<div class="activities-filter">
				<form class="activities-filter-form" method="get">
					<select name="category" id="category-filter">
						<option value=""><?php esc_html_e( 'All Categories', 'city-club' ); ?></option>
						<?php
						// Get all categories from activity posts
						$categories = get_terms( array(
							'taxonomy' => 'activity_category',
							'hide_empty' => true,
						) );

						foreach ( $categories as $category ) :
							$selected = isset( $_GET['category'] ) && $_GET['category'] === $category->slug ? 'selected' : '';
							echo '<option value="' . esc_attr( $category->slug ) . '" ' . $selected . '>' . esc_html( $category->name ) . '</option>';
						endforeach;
						?>
					</select>

					<select name="difficulty" id="difficulty-filter">
						<option value=""><?php esc_html_e( 'All Difficulty Levels', 'city-club' ); ?></option>
						<?php
						// Get all difficulty levels
						$difficulties = array(
							'beginner' => esc_html__( 'Beginner', 'city-club' ),
							'intermediate' => esc_html__( 'Intermediate', 'city-club' ),
							'advanced' => esc_html__( 'Advanced', 'city-club' ),
						);

						foreach ( $difficulties as $key => $label ) :
							$selected = isset( $_GET['difficulty'] ) && $_GET['difficulty'] === $key ? 'selected' : '';
							echo '<option value="' . esc_attr( $key ) . '" ' . $selected . '>' . esc_html( $label ) . '</option>';
						endforeach;
						?>
					</select>

					<input type="text" name="search" id="search-filter" placeholder="<?php esc_attr_e( 'Search activities...', 'city-club' ); ?>" value="<?php echo isset( $_GET['search'] ) ? esc_attr( $_GET['search'] ) : ''; ?>">

					<button type="submit"><?php esc_html_e( 'Filter', 'city-club' ); ?></button>
				</form>
			</div>

			<div class="activities-tabs">
				<a href="<?php echo esc_url( get_post_type_archive_link( 'activity' ) ); ?>" class="activities-tab <?php echo !isset( $_GET['category'] ) ? 'active' : ''; ?>"><?php esc_html_e( 'All', 'city-club' ); ?></a>
				
				<?php
				// Display category tabs
				foreach ( $categories as $category ) :
					$active = isset( $_GET['category'] ) && $_GET['category'] === $category->slug ? 'active' : '';
					echo '<a href="' . esc_url( add_query_arg( 'category', $category->slug, get_post_type_archive_link( 'activity' ) ) ) . '" class="activities-tab ' . $active . '">' . esc_html( $category->name ) . '</a>';
				endforeach;
				?>
			</div>

			<?php if ( have_posts() ) : ?>

				<div class="activities-grid">
					<?php
					/* Start the Loop */
					while ( have_posts() ) :
						the_post();

						/*
						 * Include the Post-Type-specific template for the content.
						 */
						get_template_part( 'template-parts/content', 'activity' );

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
