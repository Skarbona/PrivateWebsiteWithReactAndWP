<?php
function fs_tools_and_tech() {

    register_post_type( 'tools_tech', [
            'labels' => [
                'name' => __('Tools&Tech', 'filip'),
                'singular_name' => __('Tool&Tech', 'filip'),
                'all_items' => __('All', 'filip'),
                'add_new' => __('Add New', 'filip'),
                'add_new_item' => __('Add New', 'filip'),
                'edit' => __( 'Edit', 'filip' ),
                'edit_item' => __('Edit', 'filip'),
                'new_item' => __('New', 'filip'),
                'view_item' => __('View', 'filip'),
                'search_items' => __('Search', 'filip'),
                'not_found' =>  __('Nothing found in the Database.', 'filip'),
                'not_found_in_trash' => __('Nothing found in Trash', 'filip'),
                'parent_item_colon' => ''
            ],
            'description' => __( 'This is the Tools and Technology custom post type', 'filip' ),
            'public' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'show_ui' => true,
            'query_var' => true,
            'menu_position' => 8,
            'menu_icon' => 'dashicons-editor-kitchensink',
            'rewrite' => [
                'slug' => 'tools_tech',
            ],
            'capability_type' => 'post',
            'hierarchical' => true,
            'supports' => [ 'title', 'editor', 'custom-fields', 'revisions', 'thumbnail', 'page-attributes' ]
        ]
    );

}

?>