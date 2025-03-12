<?php
/**
 * Custom Post Types for City Club Theme
 *
 * @package City_Club
 */

/**
 * Register custom post types for the theme.
 */
function city_club_register_post_types() {
	// Register Club post type
	register_post_type(
		'club',
		array(
			'labels'              => array(
				'name'               => _x( 'Clubs', 'post type general name', 'city-club' ),
				'singular_name'      => _x( 'Club', 'post type singular name', 'city-club' ),
				'menu_name'          => _x( 'Clubs', 'admin menu', 'city-club' ),
				'name_admin_bar'     => _x( 'Club', 'add new on admin bar', 'city-club' ),
				'add_new'            => _x( 'Add New', 'club', 'city-club' ),
				'add_new_item'       => __( 'Add New Club', 'city-club' ),
				'new_item'           => __( 'New Club', 'city-club' ),
				'edit_item'          => __( 'Edit Club', 'city-club' ),
				'view_item'          => __( 'View Club', 'city-club' ),
				'all_items'          => __( 'All Clubs', 'city-club' ),
				'search_items'       => __( 'Search Clubs', 'city-club' ),
				'parent_item_colon'  => __( 'Parent Clubs:', 'city-club' ),
				'not_found'          => __( 'No clubs found.', 'city-club' ),
				'not_found_in_trash' => __( 'No clubs found in Trash.', 'city-club' ),
			),
			'description'         => __( 'City Club fitness centers', 'city-club' ),
			'public'              => true,
			'publicly_queryable'  => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'query_var'           => true,
			'rewrite'             => array( 'slug' => 'clubs' ),
			'capability_type'     => 'post',
			'has_archive'         => true,
			'hierarchical'        => false,
			'menu_position'       => 5,
			'menu_icon'           => 'dashicons-location',
			'supports'            => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
			'show_in_rest'        => true,
		)
	);

	// Register Activity post type
	register_post_type(
		'activity',
		array(
			'labels'              => array(
				'name'               => _x( 'Activities', 'post type general name', 'city-club' ),
				'singular_name'      => _x( 'Activity', 'post type singular name', 'city-club' ),
				'menu_name'          => _x( 'Activities', 'admin menu', 'city-club' ),
				'name_admin_bar'     => _x( 'Activity', 'add new on admin bar', 'city-club' ),
				'add_new'            => _x( 'Add New', 'activity', 'city-club' ),
				'add_new_item'       => __( 'Add New Activity', 'city-club' ),
				'new_item'           => __( 'New Activity', 'city-club' ),
				'edit_item'          => __( 'Edit Activity', 'city-club' ),
				'view_item'          => __( 'View Activity', 'city-club' ),
				'all_items'          => __( 'All Activities', 'city-club' ),
				'search_items'       => __( 'Search Activities', 'city-club' ),
				'parent_item_colon'  => __( 'Parent Activities:', 'city-club' ),
				'not_found'          => __( 'No activities found.', 'city-club' ),
				'not_found_in_trash' => __( 'No activities found in Trash.', 'city-club' ),
			),
			'description'         => __( 'City Club fitness activities', 'city-club' ),
			'public'              => true,
			'publicly_queryable'  => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'query_var'           => true,
			'rewrite'             => array( 'slug' => 'activities' ),
			'capability_type'     => 'post',
			'has_archive'         => true,
			'hierarchical'        => false,
			'menu_position'       => 6,
			'menu_icon'           => 'dashicons-universal-access',
			'supports'            => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
			'show_in_rest'        => true,
		)
	);

	// Register Coach post type
	register_post_type(
		'coach',
		array(
			'labels'              => array(
				'name'               => _x( 'Coaches', 'post type general name', 'city-club' ),
				'singular_name'      => _x( 'Coach', 'post type singular name', 'city-club' ),
				'menu_name'          => _x( 'Coaches', 'admin menu', 'city-club' ),
				'name_admin_bar'     => _x( 'Coach', 'add new on admin bar', 'city-club' ),
				'add_new'            => _x( 'Add New', 'coach', 'city-club' ),
				'add_new_item'       => __( 'Add New Coach', 'city-club' ),
				'new_item'           => __( 'New Coach', 'city-club' ),
				'edit_item'          => __( 'Edit Coach', 'city-club' ),
				'view_item'          => __( 'View Coach', 'city-club' ),
				'all_items'          => __( 'All Coaches', 'city-club' ),
				'search_items'       => __( 'Search Coaches', 'city-club' ),
				'parent_item_colon'  => __( 'Parent Coaches:', 'city-club' ),
				'not_found'          => __( 'No coaches found.', 'city-club' ),
				'not_found_in_trash' => __( 'No coaches found in Trash.', 'city-club' ),
			),
			'description'         => __( 'City Club fitness coaches', 'city-club' ),
			'public'              => true,
			'publicly_queryable'  => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'query_var'           => true,
			'rewrite'             => array( 'slug' => 'coaches' ),
			'capability_type'     => 'post',
			'has_archive'         => true,
			'hierarchical'        => false,
			'menu_position'       => 7,
			'menu_icon'           => 'dashicons-groups',
			'supports'            => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
			'show_in_rest'        => true,
		)
	);

	// Register Testimonial post type
	register_post_type(
		'testimonial',
		array(
			'labels'              => array(
				'name'               => _x( 'Testimonials', 'post type general name', 'city-club' ),
				'singular_name'      => _x( 'Testimonial', 'post type singular name', 'city-club' ),
				'menu_name'          => _x( 'Testimonials', 'admin menu', 'city-club' ),
				'name_admin_bar'     => _x( 'Testimonial', 'add new on admin bar', 'city-club' ),
				'add_new'            => _x( 'Add New', 'testimonial', 'city-club' ),
				'add_new_item'       => __( 'Add New Testimonial', 'city-club' ),
				'new_item'           => __( 'New Testimonial', 'city-club' ),
				'edit_item'          => __( 'Edit Testimonial', 'city-club' ),
				'view_item'          => __( 'View Testimonial', 'city-club' ),
				'all_items'          => __( 'All Testimonials', 'city-club' ),
				'search_items'       => __( 'Search Testimonials', 'city-club' ),
				'parent_item_colon'  => __( 'Parent Testimonials:', 'city-club' ),
				'not_found'          => __( 'No testimonials found.', 'city-club' ),
				'not_found_in_trash' => __( 'No testimonials found in Trash.', 'city-club' ),
			),
			'description'         => __( 'City Club member testimonials', 'city-club' ),
			'public'              => true,
			'publicly_queryable'  => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'query_var'           => true,
			'rewrite'             => array( 'slug' => 'testimonials' ),
			'capability_type'     => 'post',
			'has_archive'         => true,
			'hierarchical'        => false,
			'menu_position'       => 8,
			'menu_icon'           => 'dashicons-format-quote',
			'supports'            => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
			'show_in_rest'        => true,
		)
	);
}
add_action( 'init', 'city_club_register_post_types' );

/**
 * Register custom taxonomies for the theme.
 */
function city_club_register_taxonomies() {
	// Register Activity Category taxonomy
	register_taxonomy(
		'activity_category',
		'activity',
		array(
			'labels'            => array(
				'name'              => _x( 'Activity Categories', 'taxonomy general name', 'city-club' ),
				'singular_name'     => _x( 'Activity Category', 'taxonomy singular name', 'city-club' ),
				'search_items'      => __( 'Search Activity Categories', 'city-club' ),
				'all_items'         => __( 'All Activity Categories', 'city-club' ),
				'parent_item'       => __( 'Parent Activity Category', 'city-club' ),
				'parent_item_colon' => __( 'Parent Activity Category:', 'city-club' ),
				'edit_item'         => __( 'Edit Activity Category', 'city-club' ),
				'update_item'       => __( 'Update Activity Category', 'city-club' ),
				'add_new_item'      => __( 'Add New Activity Category', 'city-club' ),
				'new_item_name'     => __( 'New Activity Category Name', 'city-club' ),
				'menu_name'         => __( 'Categories', 'city-club' ),
			),
			'hierarchical'      => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'activity-category' ),
			'show_in_rest'      => true,
		)
	);

	// Register Activity Difficulty taxonomy
	register_taxonomy(
		'activity_difficulty',
		'activity',
		array(
			'labels'            => array(
				'name'              => _x( 'Difficulty Levels', 'taxonomy general name', 'city-club' ),
				'singular_name'     => _x( 'Difficulty Level', 'taxonomy singular name', 'city-club' ),
				'search_items'      => __( 'Search Difficulty Levels', 'city-club' ),
				'all_items'         => __( 'All Difficulty Levels', 'city-club' ),
				'parent_item'       => __( 'Parent Difficulty Level', 'city-club' ),
				'parent_item_colon' => __( 'Parent Difficulty Level:', 'city-club' ),
				'edit_item'         => __( 'Edit Difficulty Level', 'city-club' ),
				'update_item'       => __( 'Update Difficulty Level', 'city-club' ),
				'add_new_item'      => __( 'Add New Difficulty Level', 'city-club' ),
				'new_item_name'     => __( 'New Difficulty Level Name', 'city-club' ),
				'menu_name'         => __( 'Difficulty', 'city-club' ),
			),
			'hierarchical'      => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'difficulty' ),
			'show_in_rest'      => true,
		)
	);

	// Register Coach Specialization taxonomy
	register_taxonomy(
		'coach_specialization',
		'coach',
		array(
			'labels'            => array(
				'name'              => _x( 'Specializations', 'taxonomy general name', 'city-club' ),
				'singular_name'     => _x( 'Specialization', 'taxonomy singular name', 'city-club' ),
				'search_items'      => __( 'Search Specializations', 'city-club' ),
				'all_items'         => __( 'All Specializations', 'city-club' ),
				'parent_item'       => __( 'Parent Specialization', 'city-club' ),
				'parent_item_colon' => __( 'Parent Specialization:', 'city-club' ),
				'edit_item'         => __( 'Edit Specialization', 'city-club' ),
				'update_item'       => __( 'Update Specialization', 'city-club' ),
				'add_new_item'      => __( 'Add New Specialization', 'city-club' ),
				'new_item_name'     => __( 'New Specialization Name', 'city-club' ),
				'menu_name'         => __( 'Specializations', 'city-club' ),
			),
			'hierarchical'      => false,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'specialization' ),
			'show_in_rest'      => true,
		)
	);

	// Register Club Location taxonomy
	register_taxonomy(
		'club_location',
		'club',
		array(
			'labels'            => array(
				'name'              => _x( 'Locations', 'taxonomy general name', 'city-club' ),
				'singular_name'     => _x( 'Location', 'taxonomy singular name', 'city-club' ),
				'search_items'      => __( 'Search Locations', 'city-club' ),
				'all_items'         => __( 'All Locations', 'city-club' ),
				'parent_item'       => __( 'Parent Location', 'city-club' ),
				'parent_item_colon' => __( 'Parent Location:', 'city-club' ),
				'edit_item'         => __( 'Edit Location', 'city-club' ),
				'update_item'       => __( 'Update Location', 'city-club' ),
				'add_new_item'      => __( 'Add New Location', 'city-club' ),
				'new_item_name'     => __( 'New Location Name', 'city-club' ),
				'menu_name'         => __( 'Locations', 'city-club' ),
			),
			'hierarchical'      => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'location' ),
			'show_in_rest'      => true,
		)
	);

	// Register Club Amenities taxonomy
	register_taxonomy(
		'club_amenity',
		'club',
		array(
			'labels'            => array(
				'name'              => _x( 'Amenities', 'taxonomy general name', 'city-club' ),
				'singular_name'     => _x( 'Amenity', 'taxonomy singular name', 'city-club' ),
				'search_items'      => __( 'Search Amenities', 'city-club' ),
				'all_items'         => __( 'All Amenities', 'city-club' ),
				'parent_item'       => __( 'Parent Amenity', 'city-club' ),
				'parent_item_colon' => __( 'Parent Amenity:', 'city-club' ),
				'edit_item'         => __( 'Edit Amenity', 'city-club' ),
				'update_item'       => __( 'Update Amenity', 'city-club' ),
				'add_new_item'      => __( 'Add New Amenity', 'city-club' ),
				'new_item_name'     => __( 'New Amenity Name', 'city-club' ),
				'menu_name'         => __( 'Amenities', 'city-club' ),
			),
			'hierarchical'      => false,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'amenity' ),
			'show_in_rest'      => true,
		)
	);
}
add_action( 'init', 'city_club_register_taxonomies' );

/**
 * Add meta boxes for custom post types.
 */
function city_club_add_meta_boxes() {
	// Club meta box
	add_meta_box(
		'club_details',
		__( 'Club Details', 'city-club' ),
		'city_club_club_details_callback',
		'club',
		'normal',
		'high'
	);

	// Activity meta box
	add_meta_box(
		'activity_details',
		__( 'Activity Details', 'city-club' ),
		'city_club_activity_details_callback',
		'activity',
		'normal',
		'high'
	);

	// Coach meta box
	add_meta_box(
		'coach_details',
		__( 'Coach Details', 'city-club' ),
		'city_club_coach_details_callback',
		'coach',
		'normal',
		'high'
	);

	// Testimonial meta box
	add_meta_box(
		'testimonial_details',
		__( 'Testimonial Details', 'city-club' ),
		'city_club_testimonial_details_callback',
		'testimonial',
		'normal',
		'high'
	);
}
add_action( 'add_meta_boxes', 'city_club_add_meta_boxes' );

/**
 * Club details meta box callback.
 *
 * @param WP_Post $post Current post object.
 */
function city_club_club_details_callback( $post ) {
	// Add nonce for security
	wp_nonce_field( 'city_club_club_details', 'city_club_club_details_nonce' );

	// Get current values
	$address = get_post_meta( $post->ID, '_club_address', true );
	$lat     = get_post_meta( $post->ID, '_club_lat', true );
	$lng     = get_post_meta( $post->ID, '_club_lng', true );
	$phone   = get_post_meta( $post->ID, '_club_phone', true );
	$email   = get_post_meta( $post->ID, '_club_email', true );
	$hours   = get_post_meta( $post->ID, '_club_hours', true );
	$rating  = get_post_meta( $post->ID, '_club_rating', true );
	$is_new  = get_post_meta( $post->ID, '_club_is_new', true );

	// Output fields
	?>
	<p>
		<label for="club_address"><?php esc_html_e( 'Address', 'city-club' ); ?>:</label><br>
		<input type="text" id="club_address" name="club_address" value="<?php echo esc_attr( $address ); ?>" class="widefat">
	</p>
	<p>
		<label for="club_lat"><?php esc_html_e( 'Latitude', 'city-club' ); ?>:</label><br>
		<input type="text" id="club_lat" name="club_lat" value="<?php echo esc_attr( $lat ); ?>" class="regular-text">
	</p>
	<p>
		<label for="club_lng"><?php esc_html_e( 'Longitude', 'city-club' ); ?>:</label><br>
		<input type="text" id="club_lng" name="club_lng" value="<?php echo esc_attr( $lng ); ?>" class="regular-text">
	</p>
	<p>
		<label for="club_phone"><?php esc_html_e( 'Phone', 'city-club' ); ?>:</label><br>
		<input type="text" id="club_phone" name="club_phone" value="<?php echo esc_attr( $phone ); ?>" class="regular-text">
	</p>
	<p>
		<label for="club_email"><?php esc_html_e( 'Email', 'city-club' ); ?>:</label><br>
		<input type="email" id="club_email" name="club_email" value="<?php echo esc_attr( $email ); ?>" class="regular-text">
	</p>
	<p>
		<label for="club_hours"><?php esc_html_e( 'Opening Hours', 'city-club' ); ?>:</label><br>
		<input type="text" id="club_hours" name="club_hours" value="<?php echo esc_attr( $hours ); ?>" class="regular-text" placeholder="e.g. 6:00 AM - 11:00 PM">
	</p>
	<p>
		<label for="club_rating"><?php esc_html_e( 'Rating (1-5)', 'city-club' ); ?>:</label><br>
		<input type="number" id="club_rating" name="club_rating" value="<?php echo esc_attr( $rating ); ?>" min="1" max="5" step="0.1" class="small-text">
	</p>
	<p>
		<label for="club_is_new">
			<input type="checkbox" id="club_is_new" name="club_is_new" value="1" <?php checked( $is_new, '1' ); ?>>
			<?php esc_html_e( 'Mark as New Club', 'city-club' ); ?>
		</label>
	</p>
	<?php
}

/**
 * Activity details meta box callback.
 *
 * @param WP_Post $post Current post object.
 */
function city_club_activity_details_callback( $post ) {
	// Add nonce for security
	wp_nonce_field( 'city_club_activity_details', 'city_club_activity_details_nonce' );

	// Get current values
	$duration = get_post_meta( $post->ID, '_activity_duration', true );
	$color    = get_post_meta( $post->ID, '_activity_color', true );

	// Output fields
	?>
	<p>
		<label for="activity_duration"><?php esc_html_e( 'Duration', 'city-club' ); ?>:</label><br>
		<input type="text" id="activity_duration" name="activity_duration" value="<?php echo esc_attr( $duration ); ?>" class="regular-text" placeholder="e.g. 45 min">
	</p>
	<p>
		<label for="activity_color"><?php esc_html_e( 'Theme Color', 'city-club' ); ?>:</label><br>
		<input type="color" id="activity_color" name="activity_color" value="<?php echo esc_attr( $color ); ?>" class="regular-text">
		<span class="description"><?php esc_html_e( 'Choose a color for this activity', 'city-club' ); ?></span>
	</p>
	<?php
}

/**
 * Coach details meta box callback.
 *
 * @param WP_Post $post Current post object.
 */
function city_club_coach_details_callback( $post ) {
	// Add nonce for security
	wp_nonce_field( 'city_club_coach_details', 'city_club_coach_details_nonce' );

	// Get current values
	$experience    = get_post_meta( $post->ID, '_coach_experience', true );
	$certifications = get_post_meta( $post->ID, '_coach_certifications', true );
	$rating        = get_post_meta( $post->ID, '_coach_rating', true );
	$location      = get_post_meta( $post->ID, '_coach_location', true );

	// Output fields
	?>
	<p>
		<label for="coach_experience"><?php esc_html_e( 'Years of Experience', 'city-club' ); ?>:</label><br>
		<input type="number" id="coach_experience" name="coach_experience" value="<?php echo esc_attr( $experience ); ?>" class="small-text" min="0">
	</p>
	<p>
		<label for="coach_certifications"><?php esc_html_e( 'Certifications', 'city-club' ); ?>:</label><br>
		<textarea id="coach_certifications" name="coach_certifications" rows="4" class="widefat"><?php echo esc_textarea( $certifications ); ?></textarea>
		<span class="description"><?php esc_html_e( 'Enter one certification per line', 'city-club' ); ?></span>
	</p>
	<p>
		<label for="coach_rating"><?php esc_html_e( 'Rating (1-5)', 'city-club' ); ?>:</label><br>
		<input type="number" id="coach_rating" name="coach_rating" value="<?php echo esc_attr( $rating ); ?>" min="1" max="5" step="0.1" class="small-text">
	</p>
	<p>
		<label for="coach_location"><?php esc_html_e( 'Primary Location', 'city-club' ); ?>:</label><br>
		<input type="text" id="coach_location" name="coach_location" value="<?php echo esc_attr( $location ); ?>" class="regular-text">
	</p>
	<?php
}

/**
 * Testimonial details meta box callback.
 *
 * @param WP_Post $post Current post object.
 */
function city_club_testimonial_details_callback( $post ) {
	// Add nonce for security
	wp_nonce_field( 'city_club_testimonial_details', 'city_club_testimonial_details_nonce' );

	// Get current values
	$member_name   = get_post_meta( $post->ID, '_testimonial_member_name', true );
	$member_since  = get_post_meta( $post->ID, '_testimonial_member_since', true );
	$rating        = get_post_meta( $post->ID, '_testimonial_rating', true );
	$club          = get_post_meta( $post->ID, '_testimonial_club', true );

	// Output fields
	?>
	<p>
		<label for="testimonial_member_name"><?php esc_html_e( 'Member Name', 'city-club' ); ?>:</label><br>
		<input type="text" id="testimonial_member_name" name="testimonial_member_name" value="<?php echo esc_attr( $member_name ); ?>" class="regular-text">
	</p>
	<p>
		<label for="testimonial_member_since"><?php esc_html_e( 'Member Since', 'city-club' ); ?>:</label><br>
		<input type="text" id="testimonial_member_since" name="testimonial_member_since" value="<?php echo esc_attr( $member_since ); ?>" class="regular-text" placeholder="e.g. 2020">
	</p>
	<p>
		<label for="testimonial_rating"><?php esc_html_e( 'Rating (1-5)', 'city-club' ); ?>:</label><br>
		<input type="number" id="testimonial_rating" name="testimonial_rating" value="<?php echo esc_attr( $rating ); ?>" min="1" max="5" step="0.1" class="small-text">
	</p>
	<p>
		<label for="testimonial_club"><?php esc_html_e( 'Associated Club', 'city-club' ); ?>:</label><br>
		<input type="text" id="testimonial_club" name="testimonial_club" value="<?php echo esc_attr( $club ); ?>" class="regular-text">
	</p>
	<?php
}

/**
 * Save club meta box data.
 *
 * @param int $post_id Post ID.
 */
function city_club_save_club_meta( $post_id ) {
	// Check if nonce is set
	if ( ! isset( $_POST['city_club_club_details_nonce'] ) ) {
		return;
	}

	// Verify nonce
	if ( ! wp_verify_nonce( $_POST['city_club_club_details_nonce'], 'city_club_club_details' ) ) {
		return;
	}

	// If this is an autosave, don't do anything
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	// Check user permissions
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	// Save address
	if ( isset( $_POST['club_address'] ) ) {
		update_post_meta( $post_id, '_club_address', sanitize_text_field( $_POST['club_address'] ) );
	}

	// Save latitude
	if ( isset( $_POST['club_lat'] ) ) {
		update_post_meta( $post_id, '_club_lat', sanitize_text_field( $_POST['club_lat'] ) );
	}

	// Save longitude
	if ( isset( $_POST['club_lng'] ) ) {
		update_post_meta( $post_id, '_club_lng', sanitize_text_field( $_POST['club_lng'] ) );
	}

	// Save phone
	if ( isset( $_POST['club_phone'] ) ) {
		update_post_meta( $post_id, '_club_phone', sanitize_text_field( $_POST['club_phone'] ) );
	}

	// Save email
	if ( isset( $_POST['club_email'] ) ) {
		update_post_meta( $post_id, '_club_email', sanitize_email( $_POST['club_email'] ) );
	}

	// Save hours
	if ( isset( $_POST['club_hours'] ) ) {
		update_post_meta( $post_id, '_club_hours', sanitize_text_field( $_POST['club_hours'] ) );
	}

	// Save rating
	if ( isset( $_POST['club_rating'] ) ) {
		update_post_meta( $post_id, '_club_rating', sanitize_text_field( $_POST['club_rating'] ) );
	}

	// Save is_new
	$is_new = isset( $_POST['club_is_new'] ) ? '1' : '0';
	update_post_meta( $post_id, '_club_is_new', $is_new );
}
add_action( 'save_post_club', 'city_club_save_club_meta' );

/**
 * Save activity meta box data.
 *
 * @param int $post_id Post ID.
 */
function city_club_save_activity_meta( $post_id ) {
	// Check if nonce is set
	if ( ! isset( $_POST['city_club_activity_details_nonce'] ) ) {
		return;
	}

	// Verify nonce
	if ( ! wp_verify_nonce( $_POST['city_club_activity_details_nonce'], 'city_club_activity_details' ) ) {
		return;
	}

	// If this is an autosave, don't do anything
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	// Check user permissions
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	// Save duration
	if ( isset( $_POST['activity_duration'] ) ) {
		update_post_meta( $post_id, '_activity_duration', sanitize_text_field( $_POST['activity_duration'] ) );
	}

	// Save color
	if ( isset( $_POST['activity_color'] ) ) {
		update_post_meta( $post_id, '_activity_color', sanitize_hex_color( $_POST['activity_color'] ) );
	}
}
add_action( 'save_post_activity', 'city_club_save_activity_meta' );

/**
 * Save coach meta box data.
 *
 * @param int $post_id Post ID.
 */
function city_club_save_coach_meta( $post_id ) {
	// Check if nonce is set
	if ( ! isset( $_POST['city_club_coach_details_nonce'] ) ) {
		return;
	}

	// Verify nonce
	if ( ! wp_verify_nonce( $_POST['city_club_coach_details_nonce'], 'city_club_coach_details' ) ) {
		return;
	}

	// If this is an autosave, don't do anything
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	// Check user permissions
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	// Save experience
	if ( isset( $_POST['coach_experience'] ) ) {
		update_post_meta( $post_id, '_coach_experience', sanitize_text_field( $_POST['coach_experience'] ) );
	}

	// Save certifications
	if ( isset( $_POST['coach_certifications'] ) ) {
		update_post_meta( $post_id, '_coach_certifications', sanitize_textarea_field( $_POST['coach_certifications'] ) );
	}

	// Save rating
	if ( isset( $_POST['coach_rating'] ) ) {
		update_post_meta( $post_id, '_coach_rating', sanitize_text_field( $_POST['coach_rating'] ) );
	}

	// Save location
	if ( isset( $_POST['coach_location'] ) ) {
		update_post_meta( $post_id, '_coach_location', sanitize_text_field( $_POST['coach_location'] ) );
	}
}
add_action( 'save_post_coach', 'city_club_save_coach_meta' );

/**
 * Save testimonial meta box data.
 *
 * @param int $post_id Post ID.
 */
function city_club_save_testimonial_meta( $post_id ) {
	// Check if nonce is set
	if ( ! isset( $_POST['city_club_testimonial_details_nonce'] ) ) {
		return;
	}

	// Verify nonce
	if ( ! wp_verify_nonce( $_POST['city_club_testimonial_details_nonce'], 'city_club_testimonial_details' ) ) {
		return;
	}

	// If this is an autosave, don't do anything
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	// Check user permissions
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	// Save member name
	if ( isset( $_POST['testimonial_member_name'] ) ) {
		update_post_meta( $post_id, '_testimonial_member_name', sanitize_text_field( $_POST['testimonial_member_name'] ) );
	}

	// Save member since
	if ( isset( $_POST['testimonial_member_since'] ) ) {
		update_post_meta( $post_id, '_testimonial_member_since', sanitize_text_field( $_POST['testimonial_member_since'] ) );
	}

	// Save rating
	if ( isset( $_POST['testimonial_rating'] ) ) {
		update_post_meta( $post_id, '_testimonial_rating', sanitize_text_field( $_POST['testimonial_rating'] ) );
	}

	// Save club
	if ( isset( $_POST['testimonial_club'] ) ) {
		update_post_meta( $post_id, '_testimonial_club', sanitize_text_field( $_POST['testimonial_club'] ) );
	}
}
add_action( 'save_post_testimonial', 'city_club_save_testimonial_meta' );
