<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Lifecapital
 */
?><!DOCTYPE html>
<html itemscope="" itemtype="http://schema.org/WebPage" dir="ltr" <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<meta property="og:title" content="Life Capital - Funding Solutions">
	<meta property="fb:admins" content="http://www.facebook.com/mylifecapital">
	<meta itemprop="name" content="Life Capital - Funding Solutions">
	<title>Life Capital - Funding Solutions</title>
	<!-- <link rel="stylesheet" href="/css/style.css" type="text/css"> -->
	<!-- <link rel="stylesheet" href="/css/home.css" type="text/css"> -->
	<script type="text/javascript" src="http://localhost:48626/takana.js"></script>
	<script type="text/javascript">takanaClient.run({host: 'localhost:48626'});</script>
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	
	<div id="page">
	  <div class="modal-overlay"></div>
	  <header id="masthead" role="banner" class="header">
	    <div class="hero"><a href="/" class="hero-logo"><img src="/img/logo.png" width="154" height="154" alt="Life Capital" title="Life Capital Logo" class="hero-logo-img"></a>
	      <nav class="hero-nav"><a href="/about" class="hero-nav-item">About</a><a href="/blog" class="hero-nav-item">Blog</a></nav>
	      <div class="hero-text">
	        <h1 class="hero-text-title">Life Capital Blog</h1>
	        <p class="hero-text-subtitle">Read the latest news, announcements, and updates for Life Capital.</p>
	      </div>
	    </div>
	  </header>
	  <main role="main" class="main">
