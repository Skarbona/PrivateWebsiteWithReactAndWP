<?php

function fs_add_custom_post_type_to_rest() {
    global $wp_post_types;

    $post_type_names = ['home_posts'];

    foreach($post_type_names as $post_type_name) {

        if( isset( $wp_post_types[ $post_type_name ] ) ) {
            $wp_post_types[$post_type_name]->show_in_rest = true;
            $wp_post_types[$post_type_name]->rest_base = $post_type_name;
            $wp_post_types[$post_type_name]->rest_controller_class = 'WP_REST_Posts_Controller';
        }
    }

}