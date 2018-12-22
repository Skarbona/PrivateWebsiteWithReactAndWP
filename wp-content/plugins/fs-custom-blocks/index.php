<?php
/**
Plugin Name: Custom Blocks
Description: This is plugin for displaying custom blocks.
Author: Filip Sokołowski
Version: 1.0
Author URI: http://filip-sokolowski.pl
*/

if ( !function_exists( 'add_action' ) ) {
    echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
    exit;
}


function fs_custom_blocks() {
    wp_register_script(
        'fs_custom_blocks',
        plugins_url( 'blocks/dist/blocks.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' )
    );

    register_block_type( 'fs-blocks/hello-world', array(
        'editor_script' => 'fs_custom_blocks',
    ) );

    register_block_type( 'fs-blocks/hero', array(
        'editor_script' => 'fs_custom_blocks',
    ) );

    register_block_type( 'fs-blocks/row', array(
        'editor_script' => 'fs_custom_blocks',
    ) );

    register_block_type( 'fs-blocks/columns', array(
        'editor_script' => 'fs_custom_blocks',
    ) );



    //Bullitt Blocks

    register_block_type( 'bullitt-blocks/cta-button', array(
        'editor_script' => 'fs_custom_blocks',
    ) );

    register_block_type( 'bullitt-blocks/feefo-reviews', array(
        'editor_script' => 'fs_custom_blocks',
    ) );

    register_block_type( 'bullitt-blocks/category-post-grid', array(
        'editor_script' => 'fs_custom_blocks',
    ) );

    register_block_type( 'bullitt-blocks/mailchimp-form', array(
        'editor_script' => 'fs_custom_blocks',
    ) );


}
add_action( 'init', 'fs_custom_blocks' );


add_filter( 'block_categories', function( $categories, $post ) {
    return array_merge(
        $categories,
       [[
            'slug'  => 'fs-blocks',
            'title' => 'FS Blocks',
       ],
       [
           'slug'  => 'bullitt-blocks',
           'title' => 'Bullitt Blocks',
       ]]
    );
}, 10, 2 );

//TODO: REMOVE THIS LATER:
function gggb_init() {
    add_shortcode( 'github-gist', 'gggb_render_shortcode' );
    register_block_type( 'github-gist-gutenberg-block/github-gist', array(
        'render_callback' => 'gggb_render_shortcode',
    ) );
}
add_action( 'init', 'gggb_init' );

function gggb_render_shortcode( $atts ) {
    if ( empty( $atts['url'] )
        || 'gist.github.com' !== parse_url( $atts['url'], PHP_URL_HOST ) ) {
        return '';
    }
    return sprintf(
        '<script src="%s"></script>',
        esc_url( rtrim( $atts['url'], '/' ) . '.js' )
    );
}

