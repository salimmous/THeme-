<?php
/**
 * Template part for displaying the medical assessment section
 *
 * @package City_Club
 */

// Get section content from theme options or ACF
$section_title = '';
$section_subtitle = '';
$section_image = '';
$assessment_steps = array();
$assessment_badge = '';

if (function_exists('get_field')) {
    // If ACF is active, get content from ACF
    $section_title = get_field('assessment_title', 'option');
    $section_subtitle = get_field('assessment_subtitle', 'option');
    $section_image = get_field('assessment_image', 'option');
    $assessment_steps = get_field('assessment_steps', 'option');
    $assessment_badge = get_field('assessment_badge', 'option');
} else {
    // Fallback to default content
    $section_title = __('TAKE CONTROL OF YOUR HEALTH', 'city-club');
    $section_subtitle = __('WITH THE MEDICAL-SPORTS ASSESSMENT', 'city-club');
    $section_image = get_template_directory_uri() . '/assets/images/assessment.jpg';
    
    // Default assessment steps
    $assessment_steps = array(
        array(
            'number' => 1,
            'title' => __('REQUEST YOUR ASSESSMENT', 'city-club'),
            'description' => __('Approach your coach in the space dedicated to the Medical-Sports Assessment and ask to fill in your digitized reservation schedule.', 'city-club'),
        ),
        array(
            'number' => 2,
            'title' => __('TAKE YOUR TESTS', 'city-club'),
            'description' => __('With the assistance and evaluation of the coach, take all the timed physical tests of the program.', 'city-club'),
        ),
        array(
            'number' => 3,
            'title' => __('RECEIVE YOUR PROGRAM', 'city-club'),
            'description' => __('Based on the results of your medical-sports test, receive your personalized programs on site and by email.', 'city-club'),
        ),
    );
    
    $assessment_badge = __('FROM YOUR ARRIVAL', 'city-club');
}
?>

<section class="medical-assessment">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <img src="<?php echo esc_url($section_image); ?>" alt="<?php esc_attr_e('City Club Coaches', 'city-club'); ?>" class="assessment-image">
            </div>

            <div class="col-md-7">
                <div class="assessment-header">
                    <h2 class="assessment-title"><?php echo esc_html($section_title); ?></h2>
                    <h1 class="assessment-subtitle">
                        <?php echo esc_html($section_subtitle); ?>
                    </h1>
                </div>

                <div class="assessment-steps">
                    <?php foreach ($assessment_steps as $step) : ?>
                        <div class="assessment-step">
                            <div class="step-number">
                                #<?php echo esc_html($step['number']); ?>
                            </div>
                            <div class="step-content">
                                <h3><?php echo esc_html($step['title']); ?></h3>
                                <p><?php echo esc_html($step['description']); ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>

                <div class="assessment-badge">
                    <?php echo esc_html($assessment_badge); ?>
                </div>
            </div>
        </div>
    </div>
</section>
