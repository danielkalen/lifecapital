<?php
/**
 * @package Lifecapital
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="blog_list-article-header">
		<?php the_title( '<h1 class="blog_list-article-header-title">', '</h1>' ); ?>

		<div class="entry-meta">
			<?php lifecapital_posted_on(); ?>
		</div><!-- .entry-meta -->
	</header><!-- .entry-header -->

	<div class="article-content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'lifecapital' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php lifecapital_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
