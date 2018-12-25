<?php
function get_menu() {
    return wp_get_nav_menu_items('MainMenu');
}

function fs_register_nav_menu_in_restapi() {
    register_rest_route( 'primary', '/menu', array(
        'methods' => 'GET',
        'callback' => 'get_menu',
    ) );
}