<?php
function fs_custom_gallery() {

    register_post_type( 'gallery', [
        'labels' => [
            'name' => __('Gallery', 'filip'),
            'singular_name' => __('Gallery', 'filip'),
            'all_items' => __('All Galleries', 'filip'),
            'add_new' => __('Add New', 'filip'),
            'add_new_item' => __('Add New Gallery', 'filip'),
            'edit' => __( 'Edit', 'filip' ),
            'edit_item' => __('Edit', 'filip'),
            'new_item' => __('New Element', 'filip'),
            'view_item' => __('View', 'filip'),
            'search_items' => __('Search', 'filip'),
            'not_found' =>  __('Nothing found in the Database.', 'filip'),
            'not_found_in_trash' => __('Nothing found in Trash', 'filip'),
            'parent_item_colon' => ''
        ],
            'description' => __( 'This is the Gallery custom post type', 'filip' ),
            'public' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'show_ui' => true,
            'query_var' => true,
            'menu_position' => 8,
            'menu_icon' => 'dashicons-images-alt2',
            'rewrite' => [
                'slug' => 'gallery',
            ],
            'capability_type' => 'post',
            'hierarchical' => true,
            'supports' => [ 'title', 'editor', 'custom-fields', 'revisions', 'thumbnail', 'page-attributes' ]
        ]
    );

}

?>