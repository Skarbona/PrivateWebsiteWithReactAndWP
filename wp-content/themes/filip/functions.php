<?php
// INCLUDES
/// INIT
include( get_stylesheet_directory() . '/includes/init/theme_support.php' );
add_action( 'after_setup_theme', 'fs_setup' );

include( get_stylesheet_directory() . '/includes/init/disable_support.php' );

///FRONT
include( get_stylesheet_directory() . '/includes/front/enqueue.php' );
add_action( 'wp_enqueue_scripts', 'materialize_add_icons' );

////RESTAPI
include( get_stylesheet_directory() . '/includes/front/restapi/add_menu.php');
add_action( 'rest_api_init', 'fs_register_nav_menu_in_restapi');

include( get_stylesheet_directory() . '/includes/front/restapi/add_home_page.php');
add_action( 'rest_api_init', 'fs_register_front_page_in_restapi');


///ADMIN


?>