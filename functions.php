<?php
/**
 * City Club Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package City_Club
 */

if (!defined('CITY_CLUB_VERSION')) {
    // Replace the version number of the theme on each release.
    define('CITY_CLUB_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function city_club_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');

    // Register navigation menus
    register_nav_menus(
        array(
            'primary' => esc_html__('Primary Menu', 'city-club'),
            'footer' => esc_html__('Footer Menu', 'city-club'),
        )
    );

    // Switch default core markup to output valid HTML5.
    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        )
    );

    // Add theme support for selective refresh for widgets.
    add_theme_support('customize-selective-refresh-widgets');

    // Add support for editor styles.
    add_theme_support('editor-styles');

    // Add support for responsive embeds.
    add_theme_support('responsive-embeds');

    // Add support for custom logo.
    add_theme_support(
        'custom-logo',
        array(
            'height' => 100,
            'width' => 250,
            'flex-width' => true,
            'flex-height' => true,
        )
    );
}
add_action('after_setup_theme', 'city_club_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 */
function city_club_content_width() {
    $GLOBALS['content_width'] = apply_filters('city_club_content_width', 1200);
}
add_action('after_setup_theme', 'city_club_content_width', 0);

/**
 * Register widget area.
 */
function city_club_widgets_init() {
    register_sidebar(
        array(
            'name' => esc_html__('Sidebar', 'city-club'),
            'id' => 'sidebar-1',
            'description' => esc_html__('Add widgets here.', 'city-club'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget' => '</section>',
            'before_title' => '<h2 class="widget-title">',
            'after_title' => '</h2>',
        )
    );

    register_sidebar(
        array(
            'name' => esc_html__('Footer 1', 'city-club'),
            'id' => 'footer-1',
            'description' => esc_html__('Add footer widgets here.', 'city-club'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        )
    );

    register_sidebar(
        array(
            'name' => esc_html__('Footer 2', 'city-club'),
            'id' => 'footer-2',
            'description' => esc_html__('Add footer widgets here.', 'city-club'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        )
    );

    register_sidebar(
        array(
            'name' => esc_html__('Footer 3', 'city-club'),
            'id' => 'footer-3',
            'description' => esc_html__('Add footer widgets here.', 'city-club'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        )
    );

    register_sidebar(
        array(
            'name' => esc_html__('Footer 4', 'city-club'),
            'id' => 'footer-4',
            'description' => esc_html__('Add footer widgets here.', 'city-club'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        )
    );
}
add_action('widgets_init', 'city_club_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function city_club_scripts() {
    // Enqueue Google Fonts
    wp_enqueue_style('city-club-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap', array(), null);

    // Main stylesheet
    wp_enqueue_style('city-club-style', get_stylesheet_uri(), array(), CITY_CLUB_VERSION);

    // Theme stylesheet
    wp_enqueue_style('city-club-main', get_template_directory_uri() . '/assets/css/main.css', array(), CITY_CLUB_VERSION);

    // GSAP for animations
    wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js', array(), '3.11.4', true);
    wp_enqueue_script('gsap-scroll-trigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js', array('gsap'), '3.11.4', true);

    // Theme scripts
    wp_enqueue_script('city-club-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array(), CITY_CLUB_VERSION, true);
    wp_enqueue_script('city-club-animations', get_template_directory_uri() . '/assets/js/animations.js', array('gsap', 'gsap-scroll-trigger'), CITY_CLUB_VERSION, true);
    wp_enqueue_script('city-club-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), CITY_CLUB_VERSION, true);

    // Conditional scripts
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }

    // Map scripts for club pages
    if (is_post_type_archive('club') || is_singular('club')) {
        wp_enqueue_script('google-maps', 'https://maps.googleapis.com/maps/api/js?key=' . get_theme_mod('city_club_google_maps_api_key') . '&libraries=places', array(), null, true);
        wp_enqueue_script('city-club-maps', get_template_directory_uri() . '/assets/js/maps.js', array('google-maps', 'jquery'), CITY_CLUB_VERSION, true);
    }
}
add_action('wp_enqueue_scripts', 'city_club_scripts');

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Custom post types.
 */
require get_template_directory() . '/inc/custom-post-types.php';

/**
 * Theme options.
 */
require get_template_directory() . '/inc/theme-options.php';

/**
 * Widgets.
 */
require get_template_directory() . '/inc/widgets.php';

/**
 * Helper functions.
 */
require get_template_directory() . '/inc/helpers.php';

/**
 * Block patterns.
 */
require get_template_directory() . '/inc/block-patterns.php';

/**
 * Load WooCommerce compatibility file.
 */
if (class_exists('WooCommerce')) {
    require get_template_directory() . '/inc/woocommerce.php';
}
