<?php
/**
 * @package Lifecapital
 */
?>

<article id="post-<?php the_ID(); ?>" class="blog_list-article">
	<header class="blog_list-article-header">
		<?php the_title( sprintf( '<h1 class="blog_list-article-header-title"><a class="blog_list-article-header-title-link" href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h1>' ); ?>

		<?php if ( 'post' == get_post_type() ) : ?>
		<div class="blog_list-article-header-meta">
			<?php lifecapital_posted_on(); ?>
		</div>
		<?php endif; ?>
	</header>

	<div class="blog_list-article-content">
		<?php
			/* translators: %s: Name of current post */
			the_content( sprintf(
				__( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'lifecapital' ),
				the_title( '<span class="screen-reader-text">"', '"</span>', false )
			) );
		?>


	</div><!-- .entry-content -->

	<footer class="blog_list-article-footer">
		<?php lifecapital_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->