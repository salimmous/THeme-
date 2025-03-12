<?php
/**
 * Template part for displaying the call to action section
 *
 * @package City_Club
 */

// Get section content from theme options or ACF
$section_title = '';
$section_subtitle = '';
$section_content = '';
$section_image = '';
$cta_primary_text = '';
$cta_primary_link = '';
$cta_secondary_text = '';
$cta_secondary_link = '';
$form_title = '';

if (function_exists('get_field')) {
    // If ACF is active, get content from ACF
    $section_title = get_field('cta_title', 'option');
    $section_subtitle = get_field('cta_subtitle', 'option');
    $section_content = get_field('cta_content', 'option');
    $section_image = get_field('cta_image', 'option');
    $cta_primary_text = get_field('cta_primary_text', 'option');
    $cta_primary_link = get_field('cta_primary_link', 'option');
    $cta_secondary_text = get_field('cta_secondary_text', 'option');
    $cta_secondary_link = get_field('cta_secondary_link', 'option');
    $form_title = get_field('form_title', 'option');
} else {
    // Fallback to default content
    $section_title = __('READY TO START', 'city-club');
    $section_subtitle = __('YOUR TRANSFORMATION?', 'city-club');
    $section_content = __('Join City Club today and benefit from a free trial, access to more than 50 clubs, and personalized programs to achieve your goals.', 'city-club');
    $section_image = get_template_directory_uri() . '/assets/images/cta-background.jpg';
    $cta_primary_text = __('FREE TRIAL', 'city-club');
    $cta_primary_link = site_url('/free-trial');
    $cta_secondary_text = __('CONTACT US', 'city-club');
    $cta_secondary_link = site_url('/contact');
    $form_title = __('REQUEST YOUR FREE TRIAL', 'city-club');
}
?>

<section class="cta-section-full bg-dark text-white py-20">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 mb-8 lg:mb-0">
                <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    <?php echo esc_html($section_title); ?> <br>
                    <?php echo esc_html($section_subtitle); ?>
                </h2>
                <p class="text-xl mb-8 max-w-lg text-gray-300">
                    <?php echo esc_html($section_content); ?>
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="<?php echo esc_url($cta_primary_link); ?>" class="btn btn-light text-primary font-bold px-8 py-3 rounded-md text-lg">
                        <?php echo esc_html($cta_primary_text); ?>
                    </a>
                    <a href="<?php echo esc_url($cta_secondary_link); ?>" class="btn btn-outline-light font-bold px-8 py-3 rounded-md text-lg">
                        <?php echo esc_html($cta_secondary_text); ?>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="bg-white p-8 rounded-lg shadow-lg text-dark">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">
                        <?php echo esc_html($form_title); ?>
                    </h3>
                    
                    <?php if (function_exists('gravity_form')) :
                        // If Gravity Forms is active, display the form
                        gravity_form(1, false, false, false, '', true);
                    else : ?>
                        <form class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    <?php esc_html_e('Full Name', 'city-club'); ?>
                                </label>
                                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="<?php esc_attr_e('Your name', 'city-club'); ?>">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    <?php esc_html_e('Phone', 'city-club'); ?>
                                </label>
                                <input type="tel" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="<?php esc_attr_e('Your phone number', 'city-club'); ?>">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    <?php esc_html_e('Email', 'city-club'); ?>
                                </label>
                                <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="<?php esc_attr_e('Your email', 'city-club'); ?>">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    <?php esc_html_e('Nearest Club', 'city-club'); ?>
                                </label>
                                <select class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option value=""><?php esc_html_e('Select a club', 'city-club'); ?></option>
                                    <option value="casablanca"><?php esc_html_e('Casablanca', 'city-club'); ?></option>
                                    <option value="rabat"><?php esc_html_e('Rabat', 'city-club'); ?></option>
                                    <option value="marrakech"><?php esc_html_e('Marrakech', 'city-club'); ?></option>
                                    <option value="tanger"><?php esc_html_e('Tanger', 'city-club'); ?></option>
                                    <option value="agadir"><?php esc_html_e('Agadir', 'city-club'); ?></option>
                                </select>
                            </div>
                            <button type="submit" class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-md">
                                <?php esc_html_e('BOOK MY TRIAL', 'city-club'); ?>
                            </button>
                        </form>
                    <?php endif; ?>
                    
                    <p class="text-xs text-gray-500 mt-4 text-center">
                        <?php esc_html_e('By submitting this form, you agree to our terms of use and privacy policy.', 'city-club'); ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
