<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'P!g!zqf)&s[Xo*3I_%=78B1-C%qTaW<g1TjE|cIG!^oh)Z(Q}N`FO&?O!C.}-<ks' );
define( 'SECURE_AUTH_KEY',   '20?k9b0k!hO&N:8~e)6bP!A+b3+zsZ,?R^zwlCUnu,iF2}=gj z~KIP*J*_1k8m%' );
define( 'LOGGED_IN_KEY',     'CxA{jPA@OL%rR~9uM{_%4A0#IRP7mP:p?.?9.{:1tC<r61Or$ij[xX(x{m9U=^CH' );
define( 'NONCE_KEY',         'o3f2gR(9!|@X0*4:;v.l3}kv-4.-vHct.Bv-H-th<5$0r&VuD0>B&c$#9wn8qrg@' );
define( 'AUTH_SALT',         'B`_jVw_h?g!wSTS{^ycs%v,7lx>)/`{Sjq.M{HXONPOi8-41SsF,vkaa`GI,HwMZ' );
define( 'SECURE_AUTH_SALT',  '#w5h{6xPzv6tMmaA;msn9!vd[@iYBZ^?{T:`4WtcO0tH=Z!3[8bks#HcV^ZSBn7B' );
define( 'LOGGED_IN_SALT',    '}[3u`)_(D#k9Q`X7Z)Js]]AD)$>ra]Wqm}n}>$_Ew=j;q<l3(i/w{/p~OLbg`0aR' );
define( 'NONCE_SALT',        '.^1Va&#:ab~{UTtRHI}SGA0&8_/_^&Aa8!>t.-PZ+[&|UOpL@~bHTfB*b:[W03Bs' );
define( 'WP_CACHE_KEY_SALT', 'Hcw?JoqZ ]3p!H:o-E}/RQW~AL30{ub7X//Im}$VK`+W`.&N^:=jE(IS,DF~WKT}' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
