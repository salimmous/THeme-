<?php
/**
 * Custom Post Types for City Club Theme
 *
 * @package City_Club
 */

/**
 * Register custom post types and taxonomies
 */
function city_club_register_post_types() {
    // Club Post Type
    register_post_type('club', array(
        'labels' => array(
            'name'               => _x('Clubs', 'post type general name', 'city-club'),
            'singular_name'      => _x('Club', 'post type singular name', 'city-club'),
            'menu_name'          => _x('Clubs', 'admin menu', 'city-club'),
            'name_admin_bar'     => _x('Club', 'add new on admin bar', 'city-club'),
            'add_new'            => _x('Add New', 'club', 'city-club'),
            'add_new_item'       => __('Add New Club', 'city-club'),
            'new_item'           => __('New Club', 'city-club'),
            'edit_item'          => __('Edit Club', 'city-club'),
            'view_item'          => __('View Club', 'city-club'),
            'all_items'          => __('All Clubs', 'city-club'),
            'search_items'       => __('Search Clubs', 'city-club'),
            'parent_item_colon'  => __('Parent Clubs:', 'city-club'),
            'not_found'          => __('No clubs found.', 'city-club'),
            'not_found_in_trash' => __('No clubs found in Trash.', 'city-club')
        ),
        'public'              => true,
        'has_archive'         => true,
        'menu_icon'           => 'dashicons-building',
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite'             => array('slug' => 'clubs'),
        'show_in_rest'        => true,
    ));
    
    // Activity Post Type
    register_post_type('activity', array(
        'labels' => array(
            'name'               => _x('Activities', 'post type general name', 'city-club'),
            'singular_name'      => _x('Activity', 'post type singular name', 'city-club'),
            'menu_name'          => _x('Activities', 'admin menu', 'city-club'),
            'name_admin_bar'     => _x('Activity', 'add new on admin bar', 'city-club'),
            'add_new'            => _x('Add New', 'activity', 'city-club'),
            'add_new_item'       => __('Add New Activity', 'city-club'),
            'new_item'           => __('New Activity', 'city-club'),
            'edit_item'          => __('Edit Activity', 'city-club'),
            'view_item'          => __('View Activity', 'city-club'),
            'all_items'          => __('All Activities', 'city-club'),
            'search_items'       => __('Search Activities', 'city-club'),
            'parent_item_colon'  => __('Parent Activities:', 'city-club'),
            'not_found'          => __('No activities found.', 'city-club'),
            'not_found_in_trash' => __('No activities found in Trash.', 'city-club')
        ),
        'public'              => true,
        'has_archive'         => true,
        'menu_icon'           => 'dashicons-universal-access',
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite'             => array('slug' => 'activities'),
        'show_in_rest'        => true,
    ));
    
    // Coach Post Type
    register_post_type('coach', array(
        'labels' => array(
            'name'               => _x('Coaches', 'post type general name', 'city-club'),
            'singular_name'      => _x('Coach', 'post type singular name', 'city-club'),
            'menu_name'          => _x('Coaches', 'admin menu', 'city-club'),
            'name_admin_bar'     => _x('Coach', 'add new on admin bar', 'city-club'),
            'add_new'            => _x('Add New', 'coach', 'city-club'),
            'add_new_item'       => __('Add New Coach', 'city-club'),
            'new_item'           => __('New Coach', 'city-club'),
            'edit_item'          => __('Edit Coach', 'city-club'),
            'view_item'          => __('View Coach', 'city-club'),
            'all_items'          => __('All Coaches', 'city-club'),
            'search_items'       => __('Search Coaches', 'city-club'),
            'parent_item_colon'  => __('Parent Coaches:', 'city-club'),
            'not_found'          => __('No coaches found.', 'city-club'),
            'not_found_in_trash' => __('No coaches found in Trash.', 'city-club')
        ),
        'public'              => true,
        'has_archive'         => true,
        'menu_icon'           => 'dashicons-groups',
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite'             => array('slug' => 'coaches'),
        'show_in_rest'        => true,
    ));
    
    // Testimonial Post Type
    register_post_type('testimonial', array(
        'labels' => array(
            'name'               => _x('Testimonials', 'post type general name', 'city-club'),
            'singular_name'      => _x('Testimonial', 'post type singular name', 'city-club'),
            'menu_name'          => _x('Testimonials', 'admin menu', 'city-club'),
            'name_admin_bar'     => _x('Testimonial', 'add new on admin bar', 'city-club'),
            'add_new'            => _x('Add New', 'testimonial', 'city-club'),
            'add_new_item'       => __('Add New Testimonial', 'city-club'),
            'new_item'           => __('New Testimonial', 'city-club'),
            'edit_item'          => __('Edit Testimonial', 'city-club'),
            'view_item'          => __('View Testimonial', 'city-club'),
            'all_items'          => __('All Testimonials', 'city-club'),
            'search_items'       => __('Search Testimonials', 'city-club'),
            'parent_item_colon'  => __('Parent Testimonials:', 'city-club'),
            'not_found'          => __('No testimonials found.', 'city-club'),
            'not_found_in_trash' => __('No testimonials found in Trash.', 'city-club')
        ),
        'public'              => true,
        'has_archive'         => false,
        'menu_icon'           => 'dashicons-format-quote',
        'supports'            => array('title', 'editor', 'thumbnail'),
        'rewrite'             => array('slug' => 'testimonials'),
        'show_in_rest'        => true,
    ));
    
    // Activity Category Taxonomy
    register_taxonomy('activity_category', 'activity', array(
        'labels' => array(
            'name'              => _x('Activity Categories', 'taxonomy general name', 'city-club'),
            'singular_name'     => _x('Activity Category', 'taxonomy singular name', 'city-club'),
            'search_items'      => __('Search Activity Categories', 'city-club'),
            'all_items'         => __('All Activity Categories', 'city-club'),
            'parent_item'       => __('Parent Activity Category', 'city-club'),
            'parent_item_colon' => __('Parent Activity Category:', 'city-club'),
            'edit_item'         => __('Edit Activity Category', 'city-club'),
            'update_item'       => __('Update Activity Category', 'city-club'),
            'add_new_item'      => __('Add New Activity Category', 'city-club'),
            'new_item_name'     => __('New Activity Category Name', 'city-club'),
            'menu_name'         => __('Categories', 'city-club'),
        ),
        'hierarchical'      => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'activity-category'),
        'show_in_rest'      => true,
    ));
    
    // Activity Difficulty Taxonomy
    register_taxonomy('activity_difficulty', 'activity', array(
        'labels' => array(
            'name'              => _x('Difficulty Levels', 'taxonomy general name', 'city-club'),
            'singular_name'     => _x('Difficulty Level', 'taxonomy singular name', 'city-club'),
            'search_items'      => __('Search Difficulty Levels', 'city-club'),
            'all_items'         => __('All Difficulty Levels', 'city-club'),
            'parent_item'       => __('Parent Difficulty Level', 'city-club'),
            'parent_item_colon' => __('Parent Difficulty Level:', 'city-club'),
            'edit_item'         => __('Edit Difficulty Level', 'city-club'),
            'update_item'       => __('Update Difficulty Level', 'city-club'),
            'add_new_item'      => __('Add New Difficulty Level', 'city-club'),
            'new_item_name'     => __('New Difficulty Level Name', 'city-club'),
            'menu_name'         => __('Difficulty', 'city-club'),
        ),
        'hierarchical'      => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'difficulty'),
        'show_in_rest'      => true,
    ));
    
    // Club Amenities Taxonomy
    register_taxonomy('club_amenity', 'club', array(
        'labels' => array(
            'name'              => _x('Amenities', 'taxonomy general name', 'city-club'),
            'singular_name'     => _x('Amenity', 'taxonomy singular name', 'city-club'),
            'search_items'      => __('Search Amenities', 'city-club'),
            'all_items'         => __('All Amenities', 'city-club'),
            'parent_item'       => __('Parent Amenity', 'city-club'),
            'parent_item_colon' => __('Parent Amenity:', 'city-club'),
            'edit_item'         => __('Edit Amenity', 'city-club'),
            'update_item'       => __('Update Amenity', 'city-club'),
            'add_new_item'      => __('Add New Amenity', 'city-club'),
            'new_item_name'     => __('New Amenity Name', 'city-club'),
            'menu_name'         => __('Amenities', 'city-club'),
        ),
        'hierarchical'      => false,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'amenity'),
        'show_in_rest'      => true,
    ));
    
    // Coach Specialization Taxonomy
    register_taxonomy('coach_specialization', 'coach', array(
        'labels' => array(
            'name'              => _x('Specializations', 'taxonomy general name', 'city-club'),
            'singular_name'     => _x('Specialization', 'taxonomy singular name', '