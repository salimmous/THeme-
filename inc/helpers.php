<?php
/**
 * City Club Helper Functions
 *
 * @package City_Club
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Get the post thumbnail URL with fallback
 *
 * @param int    $post_id Post ID.
 * @param string $size    Image size.
 * @return string Image URL.
 */
function city_club_get_post_thumbnail_url( $post_id = null, $size = 'large' ) {
	if ( ! $post_id ) {
		$post_id = get_the_ID();
	}

	if ( has_post_thumbnail( $post_id ) ) {
		return get_the_post_thumbnail_url( $post_id, $size );
	}

	// Return a default image if no thumbnail is set.
	return get_template_directory_uri() . '/assets/images/default-image.jpg';
}

/**
 * Get formatted address with line breaks
 *
 * @param string $address Address string.
 * @return string Formatted address.
 */
function city_club_format_address( $address ) {
	return nl2br( esc_html( $address ) );
}

/**
 * Format phone number for display
 *
 * @param string $phone Phone number.
 * @return string Formatted phone number.
 */
function city_club_format_phone( $phone ) {
	return esc_html( $phone );
}

/**
 * Get club locations for map
 *
 * @param int $limit Number of clubs to return.
 * @return array Club locations.
 */
function city_club_get_club_locations( $limit = -1 ) {
	$args = array(
		'post_type'      => 'club',
		'posts_per_page' => $limit,
		'meta_query'     => array(
			array(
				'key'     => '_club_latitude',
				'compare' => 'EXISTS',
			),
			array(
				'key'     => '_club_longitude',
				'compare' => 'EXISTS',
			),
		),
	);

	$clubs    = get_posts( $args );
	$locations = array();

	foreach ( $clubs as $club ) {
		$latitude  = get_post_meta( $club->ID, '_club_latitude', true );
		$longitude = get_post_meta( $club->ID, '_club_longitude', true );

		if ( $latitude && $longitude ) {
			$locations[] = array(
				'id'        => $club->ID,
				'title'     => get_the_title( $club->ID ),
				'latitude'  => (float) $latitude,
				'longitude' => (float) $longitude,
				'permalink' => get_permalink( $club->ID ),
				'thumbnail' => city_club_get_post_thumbnail_url( $club->ID, 'thumbnail' ),
				'address'   => get_post_meta( $club->ID, '_club_address', true ),
				'phone'     => get_post_meta( $club->ID, '_club_phone', true ),
			);
		}
	}

	return $locations;
}

/**
 * Get activities by category
 *
 * @param string $category Activity category slug.
 * @param int    $limit    Number of activities to return.
 * @return array Activities.
 */
function city_club_get_activities_by_category( $category = '', $limit = 4 ) {
	$args = array(
		'post_type'      => 'activity',
		'posts_per_page' => $limit,
	);

	if ( $category ) {
		$args['tax_query'] = array(
			array(
				'taxonomy' => 'activity_category',
				'field'    => 'slug',
				'terms'    => $category,
			),
		);
	}

	$activities = get_posts( $args );
	$result     = array();

	foreach ( $activities as $activity ) {
		$result[] = array(
			'id'          => $activity->ID,
			'title'       => get_the_title( $activity->ID ),
			'excerpt'     => get_the_excerpt( $activity->ID ),
			'permalink'   => get_permalink( $activity->ID ),
			'thumbnail'   => city_club_get_post_thumbnail_url( $activity->ID, 'medium' ),
			'difficulty'  => get_post_meta( $activity->ID, '_activity_difficulty', true ),
			'duration'    => get_post_meta( $activity->ID, '_activity_duration', true ),
			'categories'  => wp_get_post_terms( $activity->ID, 'activity_category', array( 'fields' => 'names' ) ),
		);
	}

	return $result;
}

/**
 * Get featured coaches
 *
 * @param int $limit Number of coaches to return.
 * @return array Coaches.
 */
function city_club_get_featured_coaches( $limit = 4 ) {
	$args = array(
		'post_type'      => 'coach',
		'posts_per_page' => $limit,
		'meta_query'     => array(
			array(
				'key'     => '_coach_featured',
				'value'   => '1',
				'compare' => '=',
			),
		),
	);

	$coaches = get_posts( $args );
	$result  = array();

	foreach ( $coaches as $coach ) {
		$result[] = array(
			'id'             => $coach->ID,
			'name'           => get_the_title( $coach->ID ),
			'bio'            => get_the_excerpt( $coach->ID ),
			'permalink'      => get_permalink( $coach->ID ),
			'photo'          => city_club_get_post_thumbnail_url( $coach->ID, 'medium' ),
			'specialties'    => get_post_meta( $coach->ID, '_coach_specialties', true ),
			'certifications' => get_post_meta( $coach->ID, '_coach_certifications', true ),
			'experience'     => get_post_meta( $coach->ID, '_coach_experience', true ),
			'location'       => get_post_meta( $coach->ID, '_coach_location', true ),
		);
	}

	return $result;
}

/**
 * Get featured testimonials
 *
 * @param int $limit Number of testimonials to return.
 * @return array Testimonials.
 */
function city_club_get_featured_testimonials( $limit = 3 ) {
	$args = array(
		'post_type'      => 'testimonial',
		'posts_per_page' => $limit,
		'meta_query'     => array(
			array(
				'key'     => '_testimonial_featured',
				'value'   => '1',
				'compare' => '=',
			),
		),
	);

	$testimonials = get_posts( $args );
	$result       = array();

	foreach ( $testimonials as $testimonial ) {
		$result[] = array(
			'id'         => $testimonial->ID,
			'name'       => get_the_title( $testimonial->ID ),
			'content'    => get_the_content( null, false, $testimonial->ID ),
			'photo'      => city_club_get_post_thumbnail_url( $testimonial->ID, 'thumbnail' ),
			'rating'     => get_post_meta( $testimonial->ID, '_testimonial_rating', true ),
			'club'       => get_post_meta( $testimonial->ID, '_testimonial_club', true ),
			'member_since' => get_post_meta( $testimonial->ID, '_testimonial_member_since', true ),
		);
	}

	return $result;
}

/**
 * Get activity difficulty levels
 *
 * @return array Difficulty levels.
 */
function city_club_get_difficulty_levels() {
	return array(
		'beginner'     => esc_html__( 'Beginner', 'city-club' ),
		'intermediate' => esc_html__( 'Intermediate', 'city-club' ),
		'advanced'     => esc_html__( 'Advanced', 'city-club' ),
	);
}

/**
 * Get activity duration options
 *
 * @return array Duration options.
 */
function city_club_get_duration_options() {
	return array(
		'30min' => esc_html__( '30 minutes', 'city-club' ),
		'45min' => esc_html__( '45 minutes', 'city-club' ),
		'60min' => esc_html__( '60 minutes', 'city-club' ),
		'90min' => esc_html__( '90 minutes', 'city-club' ),
	);
}

/**
 * Get rating options for testimonials
 *
 * @return array Rating options.
 */
function city_club_get_rating_options() {
	return array(
		'1' => esc_html__( '1 Star', 'city-club' ),
		'2' => esc_html__( '2 Stars', 'city-club' ),
		'3' => esc_html__( '3 Stars', 'city-club' ),
		'4' => esc_html__( '4 Stars', 'city-club' ),
		'5' => esc_html__( '5 Stars', 'city-club' ),
	);
}

/**
 * Get language switcher HTML
 *
 * @return string Language switcher HTML.
 */
function city_club_get_language_switcher() {
	// Check if Polylang is active.
	if ( function_exists( 'pll_the_languages' ) ) {
		$output = '<div class="language-switcher">';
		$output .= pll_the_languages( array( 'show_flags' => 1, 'show_names' => 1, 'echo' => 0 ) );
		$output .= '</div>';
		return $output;
	}

	// Check if WPML is active.
	if ( function_exists( 'icl_get_languages' ) ) {
		$languages = icl_get_languages( 'skip_missing=0' );
		if ( ! empty( $languages ) ) {
			$output = '<div class="language-switcher">';
			$output .= '<ul>';
			foreach ( $languages as $language ) {
				$output .= '<li class="' . ( $language['active'] ? 'active' : '' ) . '">';
				$output .= '<a href="' . esc_url( $language['url'] ) . '">';
				if ( $language['country_flag_url'] ) {
					$output .= '<img src="' . esc_url( $language['country_flag_url'] ) . '" alt="' . esc_attr( $language['language_code'] ) . '" />';
				}
				$output .= esc_html( $language['native_name'] );
				$output .= '</a>';
				$output .= '</li>';
			}
			$output .= '</ul>';
			$output .= '</div>';
			return $output;
		}
	}

	// Return empty if no multilingual plugin is active.
	return '';
}

/**
 * Get breadcrumbs HTML
 *
 * @return string Breadcrumbs HTML.
 */
function city_club_get_breadcrumbs() {
	if ( is_front_page() ) {
		return '';
	}

	$output = '<div class="breadcrumbs">';
	$output .= '<a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Home', 'city-club' ) . '</a>';

	if ( is_category() || is_single() ) {
		$output .= '<span class="separator">/</span>';
		if ( is_single() ) {
			$post_type = get_post_type();
			if ( 'post' !== $post_type ) {
				$post_type_obj = get_post_type_object( $post_type );
				if ( $post_type_obj ) {
					$output .= '<a href="' . esc_url( get_post_type_archive_link( $post_type ) ) . '">' . esc_html( $post_type_obj->labels->name ) . '</a>';
					$output .= '<span class="separator">/</span>';
				}
			} else {
				$categories = get_the_category();
				if ( ! empty( $categories ) ) {
					$output .= '<a href="' . esc_url( get_category_link( $categories[0]->term_id ) ) . '">' . esc_html( $categories[0]->name ) . '</a>';
					$output .= '<span class="separator">/</span>';
				}
			}
			$output .= '<span class="current">' . get_the_title() . '</span>';
		} else {
			$output .= '<span class="current">' . single_cat_title( '', false ) . '</span>';
		}
	} elseif ( is_page() ) {
		$output .= '<span class="separator">/</span>';
		$output .= '<span class="current">' . get_the_title() . '</span>';
	} elseif ( is_search() ) {
		$output .= '<span class="separator">/</span>';
		$output .= '<span class="current">' . esc_html__( 'Search Results', 'city-club' ) . '</span>';
	} elseif ( is_404() ) {
		$output .= '<span class="separator">/</span>';
		$output .= '<span class="current">' . esc_html__( 'Page Not Found', 'city-club' ) . '</span>';
	} elseif ( is_post_type_archive() ) {
		$output .= '<span class="separator">/</span>';
		$output .= '<span class="current">' . post_type_archive_title( '', false ) . '</span>';
	} elseif ( is_tax() ) {
		$output .= '<span class="separator">/</span>';
		$tax = get_taxonomy( get_queried_object()->taxonomy );
		if ( $tax ) {
			$post_type = $tax->object_type[0];
			$post_type_obj = get_post_type_object( $post_type );
			if ( $post_type_obj ) {
				$output .= '<a href="' . esc_url( get_post_type_archive_link( $post_type ) ) . '">' . esc_html( $post_type_obj->labels->name ) . '</a>';
				$output .= '<span class="separator">/</span>';
			}
		}
		$output .= '<span class="current">' . single_term_title( '', false ) . '</span>';
	}

	$output .= '</div>';

	return $output;
}
