<?php
/**
 * Template part for displaying the community section
 *
 * @package City_Club
 */

// Get section content from theme options or ACF
$section_title = '';
$section_subtitle = '';
$testimonial_image = '';
$testimonial_quote = '';
$testimonial_author = '';
$faq_title = '';
$faqs = array();
$cta_title = '';
$cta_subtitle = '';
$cta_button_text = '';
$cta_button_link = '';

if (function_exists('get_field')) {
    // If ACF is active, get content from ACF
    $section_title = get_field('community_title', 'option');
    $section_subtitle = get_field('community_subtitle', 'option');
    $testimonial_image = get_field('testimonial_image', 'option');
    $testimonial_quote = get_field('testimonial_quote', 'option');
    $testimonial_author = get_field('testimonial_author', 'option');
    $faq_title = get_field('faq_title', 'option');
    $faqs = get_field('faqs', 'option');
    $cta_title = get_field('cta_title', 'option');
    $cta_subtitle = get_field('cta_subtitle', 'option');
    $cta_button_text = get_field('cta_button_text', 'option');
    $cta_button_link = get_field('cta_button_link', 'option');
} else {
    // Fallback to default content
    $section_title = __('JOIN A COMMUNITY OF MORE THAN', 'city-club');
    $section_subtitle = __('200,000+ ACTIVE MEMBERS!', 'city-club');
    $testimonial_image = get_template_directory_uri() . '/assets/images/testimonial.jpg';
    $testimonial_quote = __('The programs I received correspond well to my body structure, I am very happy to be able to follow my progress', 'city-club');
    $testimonial_author = __('Zakaria', 'city-club');
    $faq_title = __('FREQUENTLY ASKED QUESTIONS!', 'city-club');
    
    // Default FAQs
    $faqs = array(
        array(
            'question' => __('Do You Have A 100% Women Space?', 'city-club'),
            'answer' => __('Yes, City Club offers a space entirely dedicated to women, providing a comfortable and private environment for training.', 'city-club'),
            'is_open' => true,
        ),
        array(
            'question' => __('What Are Your Opening Hours?', 'city-club'),
            'answer' => '',
            'is_open' => false,
        ),
        array(
            'question' => __('Do You Offer Personalized Training Programs?', 'city-club'),
            'answer' => '',
            'is_open' => false,
        ),
        array(
            'question' => __('What Types Of Equipment Do You Offer?', 'city-club'),
            'answer' => '',
            'is_open' => false,
        ),
        array(
            'question' => __('Do You Have Pools And Courts?', 'city-club'),
            'answer' => '',
            'is_open' => false,
        ),
    );
    
    $cta_title = __('I WANT TO START!', 'city-club');
    $cta_subtitle = __('Take The New Step Towards The New You, Start Your Training Today!', 'city-club');
    $cta_button_text = __('CONTACT A CITY CLUB REPRESENTATIVE', 'city-club');
    $cta_button_link = site_url('/contact');
}
?>

<section class="community-section section-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2 class="section-title">
                    <span class="community-title-prefix"><?php echo esc_html($section_title); ?></span>
                    <span class="community-title-highlight"><?php echo esc_html($section_subtitle); ?></span>
                </h2>

                <div class="testimonial-card">
                    <div class="testimonial-image-container">
                        <img src="<?php echo esc_url($testimonial_image); ?>" alt="<?php esc_attr_e('City Club Members', 'city-club'); ?>" class="testimonial-image">
                        
                        <div class="testimonial-indicators">
                            <?php for ($i = 0; $i < 8; $i++) : ?>
                                <span class="testimonial-indicator<?php echo ($i === 0) ? ' active' : ''; ?>"></span>
                            <?php endfor; ?>
                        </div>

                        <div class="testimonial-controls">
                            <button class="testimonial-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                            <button class="testimonial-next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                        </div>
                    </div>

                    <p class="testimonial-quote"><?php echo esc_html($testimonial_quote); ?></p>
                    <p class="testimonial-author"><?php echo esc_html($testimonial_author); ?></p>
                </div>
            </div>

            <div class="col-md-6">
                <h2 class="faq-title"><?php echo esc_html($faq_title); ?></h2>

                <div class="faq-section">
                    <?php foreach ($faqs as $index => $faq) : ?>
                        <div class="faq-item<?php echo ($faq['is_open']) ? ' active' : ''; ?>">
                            <div class="faq-header">
                                <h3 class="faq-title"><?php echo esc_html($faq['question']); ?></h3>
                                <button class="faq-toggle"><?php echo ($faq['is_open']) ? '-' : '+'; ?></button>
                            </div>
                            <?php if ($faq['is_open'] && !empty($faq['answer'])) : ?>
                                <div class="faq-content">
                                    <p><?php echo esc_html($faq['answer']); ?></p>
                                </div>
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>

        <div class="cta-section">
            <h2 class="cta-title"><?php echo esc_html($cta_title); ?></h2>
            <p class="cta-subtitle"><?php echo esc_html($cta_subtitle); ?></p>
            <a href="<?php echo esc_url($cta_button_link); ?>" class="btn btn-primary cta-button">
                <?php echo esc_html($cta_button_text); ?>
            </a>
        </div>
    </div>
</section>
