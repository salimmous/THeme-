<?php
/**
 * Template part for displaying the City Club intro section
 *
 * @package City_Club
 */

// Get section content from theme options or ACF
$section_title = '';
$section_subtitle = '';
$section_content = '';
$section_image = '';
$section_cta_text = '';
$section_cta_link = '';

if (function_exists('get_field')) {
    // If ACF is active, get content from ACF
    $section_title = get_field('intro_title', 'option');
    $section_subtitle = get_field('intro_subtitle', 'option');
    $section_content = get_field('intro_content', 'option');
    $section_image = get_field('intro_image', 'option');
    $section_cta_text = get_field('intro_cta_text', 'option');
    $section_cta_link = get_field('intro_cta_link', 'option');
} else {
    // Fallback to default content
    $section_title = __('MORE THAN 42', 'city-club');
    $section_subtitle = __('CITY CLUB', 'city-club');
    $section_content = __('The most well-known fitness club in Morocco. Featuring High-Tech machines, certified coaches, and open in more than 10 cities in Morocco.', 'city-club');
    $section_image = get_template_directory_uri() . '/assets/images/city-club-intro.jpg';
    $section_cta_text = __('SCHEDULE A VISIT', 'city-club');
    $section_cta_link = site_url('/contact');
}
?>

<section class="city-club-intro section-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2 class="section-title">
                    <span class="title-prefix"><?php echo esc_html($section_title); ?></span>
                    <span class="title-highlight"><?php echo esc_html($section_subtitle); ?></span>
                </h2>
                <p class="section-description">
                    <?php echo esc_html($section_content); ?>
                </p>
                <a href="<?php echo esc_url($section_cta_link); ?>" class="btn btn-primary">
                    <?php echo esc_html($section_cta_text); ?>
                </a>
            </div>

            <div class="col-md-6">
                <img src="<?php echo esc_url($section_image); ?>" alt="<?php esc_attr_e('City Club Fitness Equipment', 'city-club'); ?>" class="intro-image rounded shadow">
            </div>
        </div>
    </div>
</section>
