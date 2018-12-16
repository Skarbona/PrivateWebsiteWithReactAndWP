<?php

function get_front_page() {
    $rest_url = trailingslashit( get_rest_url() . 'frontpage' . '/page/' );

    $page_id = get_option('page_on_front');

    if ( $page_id > 0 ) {

        $endpoint = get_site_url() . '/index.php/wp-json/wp/v2/pages/' . $page_id;

        $response = file_get_contents($endpoint);

        $output = json_decode($response);

    } else {
        $output = null;
    }


    if( empty($output) ) {
        return new WP_Error( 'wpse-error',
            esc_html__( 'No Static Frontpage set', 'wpse' ),
            [ 'status' => 404 ] );
    }

    return new WP_REST_Response( $output, 200 );
}

function fs_register_front_page_in_restapi() {
    register_rest_route( 'frontpage', '/page', array(
        'methods' => 'GET',
        'callback' => 'get_front_page',
    ) );
}