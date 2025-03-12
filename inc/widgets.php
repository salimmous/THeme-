<?php
/**
 * Custom widgets for City Club theme
 *
 * @package City_Club
 */

/**
 * Register custom widgets
 */
function city_club_register_widgets() {
    register_widget( 'City_Club_Contact_Info_Widget' );
    register_widget( 'City_Club_Recent_Activities_Widget' );
    register_widget( 'City_Club_Club_Hours_Widget' );
}
add_action( 'widgets_init', 'city_club_register_widgets' );

/**
 * Contact Info Widget
 */
class City_Club_Contact_Info_Widget extends WP_Widget {

    public function __construct() {
        parent::__construct(
            'city_club_contact_info',
            esc_html__( 'City Club: Contact Info', 'city-club' ),
            array( 'description' => esc_html__( 'Display contact information with icons', 'city-club' ) )
        );
    }

    public function widget( $args, $instance ) {
        echo $args['before_widget'];
        
        if ( ! empty( $instance['title'] ) ) {
            echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
        }
        
        echo '<div class="contact-info-widget">';
        
        if ( ! empty( $instance['address'] ) ) {
            echo '<div class="contact-item">';
            echo '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
            echo '<span>' . esc_html( $instance['address'] ) . '</span>';
            echo '</div>';
        }
        
        if ( ! empty( $instance['phone'] ) ) {
            echo '<div class="contact-item">';
            echo '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>';
            echo '<a href="tel:' . esc_attr( $instance['phone'] ) . '">' . esc_html( $instance['phone'] ) . '</a>';
            echo '</div>';
        }
        
        if ( ! empty( $instance['email'] ) ) {
            echo '<div class="contact-item">';
            echo '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>';
            echo '<a href="mailto:' . esc_attr( $instance['email'] ) . '">' . esc_html( $instance['email'] ) . '</a>';
            echo '</div>';
        }
        
        echo '</div>';
        
        echo $args['after_widget'];
    }

    public function form( $instance ) {
        $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( 'Contact Us', 'city-club' );
        $address = ! empty( $instance['address'] ) ? $instance['address'] : '';
        $phone = ! empty( $instance['phone'] ) ? $instance['phone'] : '';
        $email = ! empty( $instance['email'] ) ? $instance['email'] : '';
        
        ?>        
        <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title:', 'city-club' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
        </p>
        <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'address' ) ); ?>"><?php esc_html_e( 'Address:', 'city-club' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'address' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'address' ) ); ?>" type="text" value="<?php echo esc_attr( $address ); ?>">
        </p>
        <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'phone' ) ); ?>"><?php esc_html_e( 'Phone:', 'city-club' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'phone' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'phone' ) ); ?>" type="text" value="<?php echo esc_attr( $phone ); ?>">
        </p>
        <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'email' ) ); ?>"><?php esc_html_e( 'Email:', 'city-club' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'email' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'email' ) ); ?>" type="email" value="<?php echo esc_attr( $email ); ?>">
        </p>
        <?php
    }

    public function update( $new_instance, $old_instance ) {
        $instance = array();
        $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? sanitize_text_field( $new_instance['title'] ) : '';
        $instance['address'] = ( ! empty( $new_instance['address'] ) ) ? sanitize_text_field( $new_instance['address'] ) : '';
        $instance['phone'] = ( ! empty( $new_instance['phone'] ) ) ? sanitize_text_field( $new_instance['phone'] ) : '';
        $instance['email'] = ( ! empty( $new_instance['email'] ) ) ? sanitize_email( $new_instance['email'] ) : '';

        return $instance;
    }
}

/**
 * Recent Activities Widget
 */
class City_Club_Recent_Activities_Widget extends WP_Widget {

    public function __construct() {
        parent::__construct(
            'city_club_recent_activities',
            esc_html__( 'City Club: Recent Activities', 'city-club' ),
            array( 'description' => esc_html__( 'Display recent activities with thumbnails', 'city-club' ) )
        );
    }

    public function widget( $args, $instance ) {
        $title = apply_filters( 'widget_title', $instance['title'] );
        $number = ( ! empty( $instance['number'] ) ) ? absint( $instance['number'] ) : 3;

        echo $args['before_widget'];
        
        if ( ! empty( $title ) ) {
            echo $args['before_title'] . $title . $args['after_title'];
        }

        $activities_args = array(
            'post_type' => 'activity',
            'posts_per_page' => $number,
            'post_status' => 'publish',
        );

        $activities_query = new WP_Query( $activities_args );

        if ( $activities_query->have_posts() ) :
            echo '<ul class="recent-activities-widget">';
            
            while ( $activities_query->have_posts() ) : $activities_query->the_post();
                echo '<li class="recent-activity-item">';
                if ( has_post_thumbnail() ) {
                    echo '<div class="activity-thumbnail">';
                    echo '<a href="' . esc_url( get_permalink() ) . '">';
                    the_post_thumbnail( 'thumbnail' );
                    echo '</a>';
                    echo '</div>';
                }
                echo '<div class="activity-content">';
                echo '<h4><a href="' . esc_url( get_permalink() ) . '">' . get_the_title() . '</a></h4>';
                echo '<span class="activity-date">' . get_the_date() . '</span>';
                echo '</div>';
                echo '</li>';
            endwhile;
            
            echo '</ul>';
            
            wp_reset_postdata();
        else :
            echo '<p>' . esc_html__( 'No activities found.', 'city-club' ) . '</p>';
        endif;

        echo $args['after_widget'];
    }

    public function form( $instance ) {
        $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( 'Recent Activities', 'city-club' );
        $number = ! empty( $instance['number'] ) ? absint( $instance['number'] ) : 3;
        ?>
        <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title:', 'city-club' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
        </p>
        <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'number' ) ); ?>"><?php esc_html_e( 'Number of activities to show:', 'city-club' ); ?></label>
            <input class="tiny-text" id="<?php echo esc_attr( $this->get_field_id( 'number' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'number' ) ); ?>" type="number" step="1" min="1" value="<?php echo esc_attr( $number ); ?>" size="3">
        </p>
        <?php
    }

    public function update( $new_instance, $old_instance ) {
        $instance = array();
        $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? sanitize_text_field( $new_instance['title'] ) : '';
        $instance['number'] = ( ! empty( $new_instance['number'] ) ) ? absint( $new_instance['number'] ) : 3;

        return $instance;
    }
}

/**
 * Club Hours Widget
 */
class City_Club_Club_Hours_Widget extends WP_Widget {

    public function __construct() {
        parent::__construct(
            'city_club_club_hours',
            esc_html__( 'City Club: Club Hours', 'city-club' ),
            array( 'description' => esc_html__( 'Display club opening hours', 'city-club' ) )
        );
    }

    public function widget( $args, $instance ) {
        echo $args['before_widget'];
        
        if ( ! empty( $instance['title'] ) ) {
            echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
        }
        
        echo '<ul class="club-hours">';
        
        $days = array(
            'monday' => esc_html__( 'Monday', 'city-club' ),
            'tuesday' => esc_html__( 'Tuesday', 'city-club' ),
            'wednesday' => esc_html__( 'Wednesday', 'city-club' ),
            'thursday' => esc_html__( 'Thursday', 'city-club' ),
            'friday' => esc_html__( 'Friday', 'city-club' ),
            'saturday' => esc_html__( 'Saturday', 'city-club' ),
            'sunday' => esc_html__( 'Sunday', 'city-club' ),
        );
        
        foreach ( $days as $day_id => $day_name ) {
            echo '<li class="club-hours-item">';
            echo '<span class="club-hours-day">' . $day_name . '</span>';
            echo '<span class="club-hours-time">' . esc_html( $instance[$day_id] ) . '</span>';
            echo '</li>';
        }
        
        echo '</ul>';
        
        echo $args['after_widget'];
    }

    public function form( $instance ) {
        $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( 'Club Hours', 'city-club' );
        
        $days = array(
            'monday' => esc_html__( 'Monday', 'city-club' ),
            'tuesday' => esc_html__( 'Tuesday', 'city-club' ),
            'wednesday' => esc_html__( 'Wednesday', 'city-club' ),
            'thursday' => esc_html__( 'Thursday', 'city-club' ),
            'friday' => esc_html__( 'Friday', 'city-club' ),
            'saturday' => esc_html__( 'Saturday', 'city-club' ),
            'sunday' => esc_html__( 'Sunday', 'city-club' ),
        );
        
        ?>        
        <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title:', 'city-club' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
        </p>
        
        <?php foreach ( $days as $day_id => $day_name ) : ?>
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id( $day_id ) ); ?>"><?php echo $day_name; ?>:</label>
                <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( $day_id ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( $day_id ) ); ?>" type="text" value="<?php echo esc_attr( isset( $instance[$day_id] ) ? $instance[$day_id] : '6:00 AM - 11:00 PM' ); ?>">
            </p>
        <?php endforeach; ?>
        <?php
    }

    public function update( $new_instance, $old_instance ) {
        $instance = array();
        $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? sanitize_text_field( $new_instance['title'] ) : '';
        
        $days = array('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday');
        
        foreach ( $days as $day ) {
            $instance[$day] = ( ! empty( $new_instance[$day] ) ) ? sanitize_text_field( $new_instance[$day] ) : '';
        }

        return $instance;
    }
}
