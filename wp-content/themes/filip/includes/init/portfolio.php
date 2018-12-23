<?php

function fs_create_portfolio_taxonomies()
{

    $labels = array(
        'name'               => __('Portfolio Category', 'filip'),
        'singular_name'      => __('Portfolio Cat',  'filip'),
        'search_items'       => __('Search Portfolio Cat', 'filip'),
        'all_items'          => __('All Portfolio Cat', 'filip'),
        'parent_item'        => __('Parent Portfolio Cat', 'filip'),
        'parent_item_colon'  => __('Parent Portfolio Cat:', 'filip'),
        'edit_item'          => __('Edit Portfolio Cat', 'filip'),
        'update_item'        => __('Update Portfolio Cat', 'filip'),
        'add_new_item'       => __('Add New Portfolio Cat', 'filip'),
        'new_item_name'      => __('New Portfolio Cat', 'filip'),
        'menu_name'          => __('Portfolio Categories', 'filip')
    );
    $args = [
        'hierarchical'      => true,
        'labels'            => $labels,
        'query_var'         => true,
        'public'            => true,
        'show_in_rest'      => true,
        'rewrite'           => [
            'slug' => 'portfolio',
        ]
    ];
    register_taxonomy( 'portfolio_category', 'portfolio', $args );

}

function fs_create_portfolio_tags()
{

    $labels = array(
        'name'               => __('Portfolio Tags', 'filip'),
        'singular_name'      => __('Portfolio Tag',  'filip'),
        'search_items'       => __('Search Portfolio Tag', 'filip'),
        'all_items'          => __('All Portfolio Tag', 'filip'),
        'parent_item'        => __('Parent Portfolio Tag', 'filip'),
        'parent_item_colon'  => __('Parent Portfolio Tag:', 'filip'),
        'edit_item'          => __('Edit Portfolio Tag', 'filip'),
        'update_item'        => __('Update Portfolio Tag', 'filip'),
        'add_new_item'       => __('Add New Portfolio Tag', 'filip'),
        'new_item_name'      => __('New Portfolio Tag', 'filip'),
        'menu_name'          => __('Portfolio Tags', 'filip')
    );
    $args = [
        'hierarchical'      => true,
        'labels'            => $labels,
        'query_var'         => true,
        'public'            => true,
        'show_in_rest'      => true,
        'rewrite'           => [
            'slug' => 'portfolio_tags',
        ]
    ];
    register_taxonomy( 'portfolio_tags', 'portfolio', $args );

}


function fs_custom_portfolio() {

    register_post_type( 'portfolio', [
        'labels' => [
            'name' => __('Portfolio', 'filip'),
            'singular_name' => __('Portfolio', 'filip'),
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
            'description' => __( 'This is the Home Elements custom post type', 'filip' ),
            'public' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'show_ui' => true,
            'query_var' => true,
            'menu_position' => 8,
            'menu_icon' => 'dashicons-media-spreadsheet',
            'rewrite' => [
                'slug' => 'portfolio',
            ],
            'capability_type' => 'post',
            'hierarchical' => true,
            'supports' => [ 'title', 'editor', 'custom-fields', 'revisions', 'thumbnail', 'page-attributes' ],
            'taxonomies' => ['portfolio_tags', 'portfolio_category'],
        ]
    );

}

?>