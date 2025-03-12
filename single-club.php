<?php
/**
 * The template for displaying single club posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package City_Club
 */

get_header();

// Get club meta data
$location = get_post_meta( get_the_ID(), 'club_location', true );
$rating = get_post_meta( get_the_ID(), 'club_rating', true );
$opening_hours = get_post_meta( get_the_ID(), 'club_opening_hours', true );
$phone = get_post_meta( get_