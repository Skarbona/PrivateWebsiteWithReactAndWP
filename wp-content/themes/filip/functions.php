<?php
// INCLUDES
/// INIT
include( get_stylesheet_directory() . '/includes/init/theme_support.php' );
add_action( 'after_setup_theme', 'fs_setup' );

include( get_stylesheet_directory() . '/includes/init/disable_support.php' );

///FRONT
include( get_stylesheet_directory() . '/includes/front/enqueue.php' );
add_action( 'wp_enqueue_scripts', 'materialize_add_icons' );


///ADMIN

?>