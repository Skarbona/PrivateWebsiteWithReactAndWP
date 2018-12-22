<?php

function fs_columns($columns) {
    $columns['order'] = 'Order';
    return $columns;
}

function fs_show_columns($name) {
    global $post;

    switch ($name) {
        case 'order':
            $views = $post->menu_order;
            echo $views;
            break;
    }
}

