<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package City_Club
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function city_club_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	// Add a class if it's the front page.
	if ( is_front_page() ) {
		$classes[] = 'front-page';
	}

	return $classes;
}
add_filter( 'body_class', 'city_club_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function city_club_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'city_club_pingback_header' );

/**
 * Add custom classes to navigation menu items
 */
function city_club_nav_menu_css_class( $classes, $item, $args, $depth ) {
    // Add current-menu-item class to active menu items
    if ( in_array( 'current-menu-item', $classes ) ) {
        $classes[] = 'active';
    }
    
    return $classes;
}
add_filter( 'nav_menu_css_class', 'city_club_nav_menu_css_class', 10, 4 );

/**
 * Modify excerpt length
 */
function city_club_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'city_club_excerpt_length', 999 );

/**
 * Modify excerpt more string
 */
function city_club_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'city_club_excerpt_more' );

/**
 * Add custom image sizes
 */
function city_club_add_image_sizes() {
    add_image_size( 'city-club-featured', 1200, 600, true ); // Featured image size
    add_image_size( 'city-club-card', 400, 300, true ); // Card image size
    add_image_size( 'city-club-square', 400, 400, true ); // Square image for coaches
}
add_action( 'after_setup_theme', 'city_club_add_image_sizes' );

/**
 * Add custom image sizes to media library dropdown
 */
function city_club_custom_image_sizes( $sizes ) {
    return array_merge( $sizes, array(
        'city-club-featured' => __( 'Featured Image', 'city-club' ),
        'city-club-card' => __( 'Card Image', 'city-club' ),
        'city-club-square' => __( 'Square Image', 'city-club' ),
    ) );
}
add_filter( 'image_size_names_choose', 'city_club_custom_image_sizes' );

/**
 * Add SVG to allowed mime types
 */
function city_club_mime_types( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter( 'upload_mimes', 'city_club_mime_types' );

/**
 * Add custom query vars
 */
function city_club_query_vars( $vars ) {
    $vars[] = 'club_location';
    $vars[] = 'activity_type';
    $vars[] = 'coach_specialization';
    return $vars;
}
add_filter( 'query_vars', 'city_club_query_vars' );

/**
 * Modify archive queries for custom post types
 */
function city_club_pre_get_posts( $query ) {
    if ( !is_admin() && $query->is_main_query() ) {
        // Club archive filtering
        if ( $query->is_post_type_archive( 'club' ) ) {
            if ( get_query_var( 'club_location' ) ) {
                $query->set( 'meta_key', 'club_location' );
                $query->set( 'meta_value', get_query_var( 'club_location' ) );
            }
        }
        
        // Activity archive filtering
        if ( $query->is_post_type_archive( 'activity' ) ) {
            if ( get_query_var( 'activity_type' ) ) {
                $query->set( 'tax_query', array(
                    array(
                        'taxonomy' => 'activity_category',
                        'field'    => 'slug',
                        'terms'    => get_query_var( 'activity_type' ),
                    ),
                ) );
            }
        }
        
        // Coach archive filtering
        if ( $query->is_post_type_archive( 'coach' ) ) {
            if ( get_query_var( 'coach_specialization' ) ) {
                $query->set( 'tax_query', array(
                    array(
                        'taxonomy' => 'coach_specialization',
                        'field'    => 'slug',
                        'terms'    => get_query_var( 'coach_specialization' ),
                    ),
                ) );
            }
        }
    }
}
add_action( 'pre_get_posts', 'city_club_pre_get_posts' );
