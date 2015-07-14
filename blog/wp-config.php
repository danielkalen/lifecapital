<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '>SeF7K$%H|tgQy+}oKm/909hI-[1X$f|49Ep?{&tS|~Uqo_,@E2Ix!=BC[@H(&6W');
define('SECURE_AUTH_KEY',  '.H/^~4o.!fcg+w:9.hxL,|swF!gL:x^%Cu& .Igtsb=-B?w2KDpe*qqux=PL$S0M');
define('LOGGED_IN_KEY',    '=/_A)9Q4UyA!ne6IZ1IZi#D(56-yVbuj9//uuSJyI**lmBshT%DY`#%|{oNwxix~');
define('NONCE_KEY',        ',7pe+FrUY8`,5#$eo3Tqk,t-0CGTF8$b8]=#g3`H- 0Kw$);&N+b|#m#M8dd*z3U');
define('AUTH_SALT',        '}%eEu5) 5MGI)Gx,i0aW/*dW5wI,cbYm-1> Yv-PA6xFDKyQ65fq?MKi:PAo!JJq');
define('SECURE_AUTH_SALT', 'kF]#y24oE/-S_I>5Ec*SDthBA+p)|Pd:,2uA+@lZ.sXxNVZE09?vuQD~`$c w@ux');
define('LOGGED_IN_SALT',   ',]~d|{z19,k-%%)0)+s8l0}(>W%0`o* A;.XfLsz.-8Q!GcGP7W+25EY71?Bg5w.');
define('NONCE_SALT',       'I%d4Z;rdE{%/f1|D|)iw&?hr_-KVZ8,6+Pit]!0L<0n]ZG#u-*n-3efE3R6m<}^)');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'lc_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
