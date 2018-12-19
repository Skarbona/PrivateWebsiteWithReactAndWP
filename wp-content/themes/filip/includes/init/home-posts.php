<?php
function fs_custom_home_posts() {

    register_post_type( 'home_posts', [
        'labels' => [
            'name' => __('Home Elements', 'filip'),
            'singular_name' => __('Element', 'filip'),
            'all_items' => __('All Elements', 'filip'),
            'add_new' => __('Add New', 'filip'),
            'add_new_item' => __('Add New Element', 'filip'),
            'edit' => __( 'Edit', 'filip' ),
            'edit_item' => __('Edit', 'filip'),
            'new_item' => __('New Element', 'filip'),
            'view_item' => __('View', 'filip'),
            'search_items' => __('Search', 'filip'),
            'not_found' =>  __('Nothing found in the Database.', 'filip'),
            'not_found_in_trash' => __('Nothing found in Trash', 'filip'),
            'parent_item_colon' => ''
        ],
            'description' => __( 'This is the Home Elements custom post type', 'filip' ),
            'public' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'show_ui' => true,
            'query_var' => true,
            'menu_position' => 8,
            'menu_icon' => 'dashicons-admin-home',
            'rewrite' => [
                'slug' => 'elements',
            ],
            'capability_type' => 'post',
            'hierarchical' => true,
            'supports' => [ 'title', 'editor', 'custom-fields', 'revisions' ]
        ]
    );

}

?>