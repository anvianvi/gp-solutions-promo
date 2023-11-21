<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package gp-solution
 */

?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description"
    content="Author: Pavel Viarbitski. This is a test task from GP company, received on 17.11 and completed on 18.11." />
  <link rel="shortcut icon" href="https://gpsolutions.com/wp-content/themes/gpsolutions/favicon/favicon-32x32.png"
    type="image/x-icon" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />

  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.css" />
  <title>Software Development Company | GP Solutions</title>

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
