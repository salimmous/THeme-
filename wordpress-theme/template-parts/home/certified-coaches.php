<?php
/**
 * Template part for displaying the certified coaches section
 *
 * @package City_Club
 */

// Get section content from theme options or ACF
$section_title = '';
$section_subtitle = '';
$section_content = '';
$section_image = '';
$coach_benefits = array();

if (function_exists('get_field')) {
    // If ACF is active, get content from ACF
    $section_title = get_field('coaches_title', 'option');
    $section_subtitle = get_field('coaches_subtitle', 'option');
    $section_content = get_field('coaches_content', 'option');
    $section_image = get_field('coaches_image', 'option');
    $coach_benefits = get_field('coach_benefits', 'option');
} else {
    // Fallback to default content
    $section_title = __('MORE THAN 600', 'city-club');
    $section_subtitle = __('CERTIFIED COACHES', 'city-club');
    $section_content = __('Our certified coaches have in-depth expertise in various areas of fitness and health. They are dedicated to providing personalized and effective training, tailored to your personal goals, whether it\'s losing weight, gaining strength, improving your physical condition, or simply leading a healthier life.', 'city-club');
    $section_image = get_template_directory_uri() . '/assets/images/coaches.jpg';
    
    // Default coach benefits
    $coach_benefits = array(
        array(
            'title' => __('CONTINUOUS TRAINING', 'city-club'),
            'description' => __('Our coaches undergo 8 trainings per year to support you', 'city-club'),
        ),
        array(
            'title' => __('SPECIALIZED COACHES', 'city-club'),
            'description' => __('Get coached by activity according to your goals', 'city-club'),
        ),
        array(
            'title' => __('DIETARY ADVICE', 'city-club'),
            'description' => __('Get advice from nutrition experts', 'city-club'),
        ),
        array(
            'title' => __('COACHES FOR 100% WOMEN', 'city-club'),
            'description' => __('Female coaches for City Lady 100% women centers', 'city-club'),
        ),
        array(
            'title' => __('PERSONALIZED FOLLOW-UP', 'city-club'),
            'description' => __('Our programs adapt to the needs of each member', 'city-club'),
        ),
        array(
            'title' => __('EVALUATIONS & PLANNING', 'city-club'),
            'description' => __('Our Coaches and nutritionists make sure to follow you very closely', 'city-club'),
        ),
    );
}
?>

<section class="certified-coaches section-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2 class="section-title">
                    <span class="coach-title-prefix"><?php echo esc_html($section_title); ?></span>
                    <span class="coach-title-highlight"><?php echo esc_html($section_subtitle); ?></span>
                </h2>
                <p class="section-description">
                    <?php echo esc_html($section_content); ?>
                </p>
                <img src="<?php echo esc_url($section_image); ?>" alt="<?php esc_attr_e('Coach training client', 'city-club'); ?>" class="coach-image">
            </div>

            <div class="col-md-6">
                <div class="coach-benefits">
                    <?php foreach ($coach_benefits as $benefit) : ?>
                        <div class="coach-benefit">
                            <div class="benefit-icon"></div>
                            <div class="benefit-content">
                                <h3><?php echo esc_html($benefit['title']); ?></h3>
                                <p><?php echo esc_html($benefit['description']); ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>
