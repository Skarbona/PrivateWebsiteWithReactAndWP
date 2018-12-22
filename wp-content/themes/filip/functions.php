<?php
// INCLUDES
/// INIT
include( get_stylesheet_directory() . '/includes/init/theme_support.php' );
add_action( 'after_setup_theme', 'fs_setup' );

include( get_stylesheet_directory() . '/includes/init/disable_support.php' );

include( get_stylesheet_directory() . '/includes/init/home-posts.php' );
add_action( 'init', 'fs_custom_home_posts', 20);

include( get_stylesheet_directory() . '/includes/init/portfolio.php' );
add_action( 'init', 'fs_custom_portfolio', 20);
add_action( 'init', 'fs_create_portfolio_taxonomies',apply_filters('fs_create_portfolio_taxonomies', 1));

include( get_stylesheet_directory() . '/includes/init/galleries.php' );
add_action( 'init', 'fs_custom_gallery', 20);

include( get_stylesheet_directory() . '/includes/init/tools_and_tech.php' );
add_action( 'init', 'fs_tools_and_tech', 20);


///FRONT
include( get_stylesheet_directory() . '/includes/front/enqueue.php' );
add_action( 'wp_enqueue_scripts', 'materialize_add_icons' );


////RESTAPI
include( get_stylesheet_directory() . '/includes/front/restapi/add_menu.php');
add_action( 'rest_api_init', 'fs_register_nav_menu_in_restapi');

include( get_stylesheet_directory() . '/includes/front/restapi/add_home_page.php');
add_action( 'rest_api_init', 'fs_register_front_page_in_restapi');

include(get_stylesheet_directory() . '/includes/front/restapi/api-for-custom-post-type.php');
add_action( 'init', 'fs_add_custom_post_type_to_rest', 25);


///ADMIN
include(get_stylesheet_directory() . '/includes/admin/admin-columns_order.php');
add_filter('manage_edit-gallery_columns', 'fs_columns');
add_filter('manage_edit-portfolio_columns', 'fs_columns');
add_filter('manage_edit-tools_tech_columns', 'fs_columns');

add_action('manage_gallery_posts_custom_column',  'fs_show_columns');
add_action('manage_portfolio_posts_custom_column',  'fs_show_columns');
add_action('manage_tools_tech_posts_custom_column',  'fs_show_columns');

//SHORTCODES
//TODO: REMOVE LATER
function cta_shortcode($atts = [], $content = null, $tag = '') {
    $atts = array_change_key_case((array)$atts, CASE_LOWER);
    $wporg_atts = shortcode_atts([
        'classes' => '',
        'text' => ''
    ], $atts, $tag);

    ob_start(); ?>
    <a class="btn <?php echo $wporg_atts['classes'] ?>"><?php echo $wporg_atts['text'] ?></a>
    <?php $content = ob_get_clean();
    return $content;
}
add_shortcode('cta_button', 'cta_shortcode');




?>