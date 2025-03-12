<?php
/**
 * City Club Theme Options
 *
 * @package City_Club
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Theme Options Class
 */
class City_Club_Theme_Options {

	/**
	 * Constructor
	 */
	public function __construct() {
		// Add theme options page to the admin menu.
		add_action( 'admin_menu', array( $this, 'add_theme_options_page' ) );
		
		// Register settings.
		add_action( 'admin_init', array( $this, 'register_settings' ) );
	}

	/**
	 * Add theme options page to the admin menu
	 */
	public function add_theme_options_page() {
		add_theme_page(
			__( 'City Club Options', 'city-club' ),
			__( 'City Club Options', 'city-club' ),
			'manage_options',
			'city-club-options',
			array( $this, 'render_theme_options_page' )
		);
	}

	/**
	 * Register settings for the theme options
	 */
	public function register_settings() {
		// Register a setting group.
		register_setting(
			'city_club_options',
			'city_club_theme_options',
			array( $this, 'sanitize_theme_options' )
		);

		// General Settings Section.
		add_settings_section(
			'city_club_general_section',
			__( 'General Settings', 'city-club' ),
			array( $this, 'render_general_section' ),
			'city-club-options'
		);

		// Contact Information Section.
		add_settings_section(
			'city_club_contact_section',
			__( 'Contact Information', 'city-club' ),
			array( $this, 'render_contact_section' ),
			'city-club-options'
		);

		// Social Media Section.
		add_settings_section(
			'city_club_social_section',
			__( 'Social Media', 'city-club' ),
			array( $this, 'render_social_section' ),
			'city-club-options'
		);

		// Map Settings Section.
		add_settings_section(
			'city_club_map_section',
			__( 'Map Settings', 'city-club' ),
			array( $this, 'render_map_section' ),
			'city-club-options'
		);

		// Add fields to General section.
		add_settings_field(
			'city_club_logo',
			__( 'Logo', 'city-club' ),
			array( $this, 'render_logo_field' ),
			'city-club-options',
			'city_club_general_section'
		);

		add_settings_field(
			'city_club_primary_color',
			__( 'Primary Color', 'city-club' ),
			array( $this, 'render_primary_color_field' ),
			'city-club-options',
			'city_club_general_section'
		);

		// Add fields to Contact section.
		add_settings_field(
			'city_club_phone',
			__( 'Phone Number', 'city-club' ),
			array( $this, 'render_phone_field' ),
			'city-club-options',
			'city_club_contact_section'
		);

		add_settings_field(
			'city_club_email',
			__( 'Email Address', 'city-club' ),
			array( $this, 'render_email_field' ),
			'city-club-options',
			'city_club_contact_section'
		);

		add_settings_field(
			'city_club_address',
			__( 'Address', 'city-club' ),
			array( $this, 'render_address_field' ),
			'city-club-options',
			'city_club_contact_section'
		);

		// Add fields to Social Media section.
		add_settings_field(
			'city_club_facebook',
			__( 'Facebook URL', 'city-club' ),
			array( $this, 'render_facebook_field' ),
			'city-club-options',
			'city_club_social_section'
		);

		add_settings_field(
			'city_club_instagram',
			__( 'Instagram URL', 'city-club' ),
			array( $this, 'render_instagram_field' ),
			'city-club-options',
			'city_club_social_section'
		);

		add_settings_field(
			'city_club_twitter',
			__( 'Twitter URL', 'city-club' ),
			array( $this, 'render_twitter_field' ),
			'city-club-options',
			'city_club_social_section'
		);

		add_settings_field(
			'city_club_youtube',
			__( 'YouTube URL', 'city-club' ),
			array( $this, 'render_youtube_field' ),
			'city-club-options',
			'city_club_social_section'
		);

		// Add fields to Map section.
		add_settings_field(
			'city_club_google_maps_api_key',
			__( 'Google Maps API Key', 'city-club' ),
			array( $this, 'render_google_maps_api_key_field' ),
			'city-club-options',
			'city_club_map_section'
		);
	}

	/**
	 * Render the theme options page
	 */
	public function render_theme_options_page() {
		?>
		<div class="wrap">
			<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
			<form method="post" action="options.php">
				<?php
				settings_fields( 'city_club_options' );
				do_settings_sections( 'city-club-options' );
				submit_button();
				?>
			</form>
		</div>
		<?php
	}

	/**
	 * Render the general section description
	 */
	public function render_general_section() {
		echo '<p>' . esc_html__( 'Configure general theme settings.', 'city-club' ) . '</p>';
	}

	/**
	 * Render the contact section description
	 */
	public function render_contact_section() {
		echo '<p>' . esc_html__( 'Enter your contact information.', 'city-club' ) . '</p>';
	}

	/**
	 * Render the social media section description
	 */
	public function render_social_section() {
		echo '<p>' . esc_html__( 'Enter your social media profile URLs.', 'city-club' ) . '</p>';
	}

	/**
	 * Render the map section description
	 */
	public function render_map_section() {
		echo '<p>' . esc_html__( 'Configure map settings for club locations.', 'city-club' ) . '</p>';
	}

	/**
	 * Render the logo field
	 */
	public function render_logo_field() {
		$options = get_option( 'city_club_theme_options' );
		$logo    = isset( $options['logo'] ) ? $options['logo'] : '';
		?>
		<div class="logo-upload">
			<input type="text" id="city_club_logo" name="city_club_theme_options[logo]" value="<?php echo esc_attr( $logo ); ?>" class="regular-text" />
			<input type="button" class="button button-secondary" value="<?php esc_attr_e( 'Upload Logo', 'city-club' ); ?>" id="upload-logo-button" />
			<?php if ( ! empty( $logo ) ) : ?>
				<div class="logo-preview">
					<img src="<?php echo esc_url( $logo ); ?>" alt="<?php esc_attr_e( 'Logo Preview', 'city-club' ); ?>" style="max-width: 200px; height: auto; margin-top: 10px;" />
				</div>
			<?php endif; ?>
		</div>
		<script>
		jQuery(document).ready(function($) {
			$('#upload-logo-button').click(function(e) {
				e.preventDefault();
				var image = wp.media({
					title: '<?php esc_html_e( 'Upload Logo', 'city-club' ); ?>',
					multiple: false
				}).open().on('select', function() {
					var uploaded_image = image.state().get('selection').first();
					var image_url = uploaded_image.toJSON().url;
					$('#city_club_logo').val(image_url);
					$('.logo-preview').html('<img src="' + image_url + '" alt="<?php esc_attr_e( 'Logo Preview', 'city-club' ); ?>" style="max-width: 200px; height: auto; margin-top: 10px;" />');
				});
			});
		});
		</script>
		<?php
	}

	/**
	 * Render the primary color field
	 */
	public function render_primary_color_field() {
		$options = get_option( 'city_club_theme_options' );
		$color   = isset( $options['primary_color'] ) ? $options['primary_color'] : '#f26e21';
		?>
		<input type="text" id="city_club_primary_color" name="city_club_theme_options[primary_color]" value="<?php echo esc_attr( $color ); ?>" class="color-picker" />
		<script>
		jQuery(document).ready(function($) {
			$('.color-picker').wpColorPicker();
		});
		</script>
		<?php
	}

	/**
	 * Render the phone field
	 */
	public function render_phone_field() {
		$options = get_option( 'city_club_theme_options' );
		$phone   = isset( $options['phone'] ) ? $options['phone'] : '';
		?>
		<input type="text" id="city_club_phone" name="city_club_theme_options[phone]" value="<?php echo esc_attr( $phone ); ?>" class="regular-text" />
		<?php
	}

	/**
	 * Render the email field
	 */
	public function render_email_field() {
		$options = get_option( 'city_club_theme_options' );
		$email   = isset( $options['email'] ) ? $options['email'] : '';
		?>
		<input type="email" id="city_club_email" name="city_club_theme_options[email]" value="<?php echo esc_attr( $email ); ?>" class="regular-text" />
		<?php
	}

	/**
	 * Render the address field
	 */
	public function render_address_field() {
		$options = get_option( 'city_club_theme_options' );
		$address = isset( $options['address'] ) ? $options['address'] : '';
		?>
		<textarea id="city_club_address" name="city_club_theme_options[address]" rows="3" class="large-text"><?php echo esc_textarea( $address ); ?></textarea>
		<?php
	}

	/**
	 * Render the Facebook field
	 */
	public function render_facebook_field() {
		$options  = get_option( 'city_club_theme_options' );
		$facebook = isset( $options['facebook'] ) ? $options['facebook'] : '';
		?>
		<input type="url" id="city_club_facebook" name="city_club_theme_options[facebook]" value="<?php echo esc_url( $facebook ); ?>" class="regular-text" />
		<?php
	}

	/**
	 * Render the Instagram field
	 */
	public function render_instagram_field() {
		$options   = get_option( 'city_club_theme_options' );
		$instagram = isset( $options['instagram'] ) ? $options['instagram'] : '';
		?>
		<input type="url" id="city_club_instagram" name="city_club_theme_options[instagram]" value="<?php echo esc_url( $instagram ); ?>" class="regular-text" />
		<?php
	}

	/**
	 * Render the Twitter field
	 */
	public function render_twitter_field() {
		$options = get_option( 'city_club_theme_options' );
		$twitter = isset( $options['twitter'] ) ? $options['twitter'] : '';
		?>
		<input type="url" id="city_club_twitter" name="city_club_theme_options[twitter]" value="<?php echo esc_url( $twitter ); ?>" class="regular-text" />
		<?php
	}

	/**
	 * Render the YouTube field
	 */
	public function render_youtube_field() {
		$options = get_option( 'city_club_theme_options' );
		$youtube = isset( $options['youtube'] ) ? $options['youtube'] : '';
		?>
		<input type="url" id="city_club_youtube" name="city_club_theme_options[youtube]" value="<?php echo esc_url( $youtube ); ?>" class="regular-text" />
		<?php
	}

	/**
	 * Render the Google Maps API Key field
	 */
	public function render_google_maps_api_key_field() {
		$options = get_option( 'city_club_theme_options' );
		$api_key = isset( $options['google_maps_api_key'] ) ? $options['google_maps_api_key'] : '';
		?>
		<input type="text" id="city_club_google_maps_api_key" name="city_club_theme_options[google_maps_api_key]" value="<?php echo esc_attr( $api_key ); ?>" class="regular-text" />
		<p class="description"><?php esc_html_e( 'Enter your Google Maps API key to enable the interactive club map.', 'city-club' ); ?></p>
		<?php
	}

	/**
	 * Sanitize theme options
	 *
	 * @param array $input The input options.
	 * @return array The sanitized options.
	 */
	public function sanitize_theme_options( $input ) {
		$output = array();

		// Sanitize logo.
		if ( isset( $input['logo'] ) ) {
			$output['logo'] = esc_url_raw( $input['logo'] );
		}

		// Sanitize primary color.
		if ( isset( $input['primary_color'] ) ) {
			$output['primary_color'] = sanitize_hex_color( $input['primary_color'] );
		}

		// Sanitize phone.
		if ( isset( $input['phone'] ) ) {
			$output['phone'] = sanitize_text_field( $input['phone'] );
		}

		// Sanitize email.
		if ( isset( $input['email'] ) ) {
			$output['email'] = sanitize_email( $input['email'] );
		}

		// Sanitize address.
		if ( isset( $input['address'] ) ) {
			$output['address'] = sanitize_textarea_field( $input['address'] );
		}

		// Sanitize social media URLs.
		if ( isset( $input['facebook'] ) ) {
			$output['facebook'] = esc_url_raw( $input['facebook'] );
		}

		if ( isset( $input['instagram'] ) ) {
			$output['instagram'] = esc_url_raw( $input['instagram'] );
		}

		if ( isset( $input['twitter'] ) ) {
			$output['twitter'] = esc_url_raw( $input['twitter'] );
		}

		if ( isset( $input['youtube'] ) ) {
			$output['youtube'] = esc_url_raw( $input['youtube'] );
		}

		// Sanitize Google Maps API key.
		if ( isset( $input['google_maps_api_key'] ) ) {
			$output['google_maps_api_key'] = sanitize_text_field( $input['google_maps_api_key'] );
		}

		return $output;
	}
}

// Initialize the theme options.
$city_club_theme_options = new City_Club_Theme_Options();

/**
 * Get theme option value
 *
 * @param string $option_name The option name.
 * @param mixed  $default     The default value.
 * @return mixed The option value.
 */
function city_club_get_option( $option_name, $default = '' ) {
	$options = get_option( 'city_club_theme_options' );
	return isset( $options[ $option_name ] ) ? $options[ $option_name ] : $default;
}
