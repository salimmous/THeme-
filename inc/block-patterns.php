<?php
/**
 * Block Patterns for City Club Theme
 *
 * @package City_Club
 */

/**
 * Register Block Pattern Category.
 */
function city_club_register_block_pattern_category() {
    register_block_pattern_category(
        'city-club',
        array( 'label' => __( 'City Club', 'city-club' ) )
    );
}
add_action( 'init', 'city_club_register_block_pattern_category' );

/**
 * Register Block Patterns.
 */
function city_club_register_block_patterns() {
    // Hero Section Pattern
    register_block_pattern(
        'city-club/hero-section',
        array(
            'title'       => __( 'Hero Section', 'city-club' ),
            'description'  => _x( 'A hero section with a background image, heading, text, and a button.', 'Block pattern description', 'city-club' ),
            'content'      => '<!-- wp:cover {"url":"' . esc_url( get_template_directory_uri() ) . '/assets/images/hero-background.jpg","id":123,"dimRatio":60,"overlayColor":"black","minHeight":600,"align":"full"} -->
<div class="wp-block-cover alignfull has-black-background-color has-background-dim-60 has-background-dim" style="min-height:600px"><img class="wp-block-cover__image-background wp-image-123" alt="" src="' . esc_url( get_template_directory_uri() ) . '/assets/images/hero-background.jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":1,"style":{"typography":{"fontSize":"48px","fontWeight":"700"}}} -->
<h1 class="has-text-align-center" style="font-size:48px;font-weight:700">TRANSFORMEZ VOTRE CORPS<br>TRANSFORMEZ VOTRE VIE</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"18px"}}} -->
<p class="has-text-align-center" style="font-size:18px">Rejoignez le leader du fitness au Maroc avec des équipements de pointe et des coachs certifiés pour atteindre vos objectifs.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"#F26E21","textColor":"white","style":{"typography":{"fontWeight":"700"},"spacing":{"padding":{"top":"12px","right":"24px","bottom":"12px","left":"24px"}}}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-white-color has-#-f-26-e-21-background-color has-text-color has-background wp-element-button" style="font-weight:700;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px">ESSAI GRATUIT</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->',
            'categories'   => array( 'city-club' ),
        )
    );
}
add_action( 'init', 'city_club_register_block_patterns' );
