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
        array( 'wp-blocks', 'wp-element' )
    );

    register_block_type( 'fs-blocks/hello-world', array(
        'editor_script' => 'fs_custom_blocks',
    ) );
}
add_action( 'init', 'fs_custom_blocks' );


add_filter( 'block_categories', function( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug'  => 'fs-blocks',
                'title' => 'FS Blocks',
            ),
        )
    );
}, 10, 2 );

