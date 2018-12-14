<?php
function materialize_add_icons() {

    wp_register_style( 'materialize-icon', 'https://fonts.googleapis.com/icon?family=Material+Icons', false );

    wp_enqueue_style('materialize-icon');
}

