<?php
/**
 * City Club Theme Customizer
 *
 * @package City_Club
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function city_club_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-title a',
				'render_callback' => 'city_club_customize_partial_blogname',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector'        => '.site-description',
				'render_callback' => 'city_club_customize_partial_blogdescription',
			)
		);
	}

	// Add City Club Theme Options section
	$wp_customize->add_section(
		'city_club_theme_options',
		array(
			'title'    => __( 'City Club Options', 'city-club' ),
			'priority' => 130,
		)
	);

	// Add Google Maps API Key setting
	$wp_customize->add_setting(
		'city_club_google_maps_api_key',
		array(
			'default'           => '',
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	$wp_customize->add_control(
		'city_club_google_maps_api_key',
		array(
			'label'       => __( 'Google Maps API Key', 'city-club' ),
			'description' => __( 'Enter your Google Maps API key for the club map functionality.', 'city-club' ),
			'section'     => 'city_club_theme_options',
			'type'        => 'text',
		)
	);

	// Add Contact Information settings
	$wp_customize->add_setting(
		'city_club_address',
		array(
			'default'           => __( '123 Avenue Mohammed V, Casablanca, Morocco', 'city-club' ),
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	$wp_customize->add_control(
		'city_club_address',
		array(
			'label'   => __( 'Address', 'city-club' ),
			'section' => 'city_club_theme_options',
			'type'    => 'text',
		)
	);

	$wp_customize->add_setting(
		'city_club_phone',
		array(
			'default'           => '+212 522 123 456',
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	$wp_customize->add_control(
		'city_club_phone',
		array(
			'label'   => __( 'Phone Number', 'city-club' ),
			'section' => 'city_club_theme_options',
			'type'    => 'text',
		)
	);

	$wp_customize->add_setting(
		'city_club_email',
		array(
			'default'           => 'contact@cityclub.ma',
			'sanitize_callback' => 'sanitize_email',
		)
	);

	$wp_customize->add_control(
		'city_club_email',
		array(
			'label'   => __( 'Email Address', 'city-club' ),
			'section' => 'city_club_theme_options',
			'type'    => 'email',
		)
	);

	// Add Social Media settings
	$wp_customize->add_setting(
		'city_club_facebook',
		array(
			'default'           => 'https://facebook.com/cityclub',
			'sanitize_callback' => 'esc_url_raw',
		)
	);

	$wp_customize->add_control(
		'city_club_facebook',
		array(
			'label'   => __( 'Facebook URL', 'city-club' ),
			'section' => 'city_club_theme_options',
			'type'    => 'url',
		)
	);

	$wp_customize->add_setting(
		'city_club_instagram',
		array(
			'default'           => 'https://instagram.com/cityclub',
			'sanitize_callback' => 'esc_url_raw',
		)
	);

	$wp_customize->add_control(
		'city_club_instagram',
		array(
			'label'   => __( 'Instagram URL', 'city-club' ),
			'section' => 'city_club_theme_options',
			'type'    => 'url',
		)
	);

	$wp_customize->add_setting(
		'city_club_twitter',
		array(
			'default'           => 'https://twitter.com/cityclub',
			'sanitize_callback' => 'esc_url_raw',
		)
	);

	$wp_customize->add_control(
		'city_club_twitter',
		array(
			'label'   => __( 'Twitter URL', 'city-club' ),
			'section' => 'city_club_theme_options',
			'type'    => 'url',
		)
	);

	$wp_customize->add_setting(
		'city_club_youtube',
		array(
			'default'           => 'https://youtube.com/cityclub',
			'sanitize_callback' => 'esc_url_raw',
		)
	);

	$wp_customize->add_control(
		'city_club_youtube',
		array(
			'label'   => __( 'YouTube URL', 'city-club' ),
			'section' => 'city_club_theme_options',
			'type'    => 'url',
		)
	);

	$wp_customize->add_setting(
		'city_club_linkedin',
		array(
			'default'           => 'https://linkedin.com/company/cityclub',
			'sanitize_callback' => 'esc_url_raw',
		)
	);

	$wp_customize->add_control(
		'city_club_linkedin',
		array(
			'label'   => __( 'LinkedIn URL', 'city-club' ),
			'section' => 'city_club_theme_options',
			'type'    => 'url',
		)
	);

	// Add Header & Footer settings
	$wp_customize->add_setting(
		'city_club_footer_logo',
		array(
			'default'           => '',
			'sanitize_callback' => 'esc_url_raw',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Image_Control(
			$wp_customize,
			'city_club_footer_logo',
			array(
				'label'       => __( 'Footer Logo', 'city-club' ),
				'description' => __( 'Upload a logo for the footer. If none is provided, the site title will be used.', 'city-club' ),
				'section'     => 'city_club_theme_options',
			)
		)
	);

	$wp_customize->add_setting(
		'city_club_footer_description',
		array(
			'default'           => __( 'Morocco\'s premier fitness network with over 50 clubs across the Kingdom and more than 230,000 satisfied members.', 'city-club' ),
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	$wp_customize->add_control(
		'city_club_footer_description',
		array(
			'label'   => __( 'Footer Description', 'city-club' ),
			'section' => 'city_club_theme_options',
			'type'    => 'textarea',
		)
	);
}
add_action( 'customize_register', 'city_club_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function city_club_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function city_club_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function city_club_customize_preview_js() {
	wp_enqueue_script( 'city-club-customizer', get_template_directory_uri() . '/assets/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'city_club_customize_preview_js' );
