<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'filipreact');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

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
define('AUTH_KEY',         '[`MAhGPP([kb?t/>f8[hQbnq1yr(b@mRAQ#q =XEV9(/Q=$ ca@1k{4@{]PbNW^_');
define('SECURE_AUTH_KEY',  '$_2n7BLo*m%E8SkXw2^R,Q7Koj1-~U;=KvZ0+l*b9*bisP*mNtEgOHL-<F!paYIA');
define('LOGGED_IN_KEY',    '{@<[1Di+D >([]@#+puQXZD,C/#y*m{ieNZe@8b8zzqYpS]7?_EoplTU<u.6q6^@');
define('NONCE_KEY',        'j~l+24wQ2>ZG{S1LcS1q@U0D$lCL.>(>= ~Vx-_@:Ss4xhX)>_!}1eEpJL$1%<#%');
define('AUTH_SALT',        'M|5wy-q8JskCSh5G1n!dn<HVIk]QG}::$HdCziD_ex6Lm,ON}#LVdyu,v7<T/(|1');
define('SECURE_AUTH_SALT', 'Rg$Dzda(+ ql@.0?917K+*9KMsaeI-X<a^AQ!EJ/<24<e@qVi;&b;R^sr3[v$lK!');
define('LOGGED_IN_SALT',   'd[d:E@8eLbvES.td:fu=q?4lJ1$iI/DTnMUpnnN`VG%/d&#DrPA-rHX2c~$gwnIY');
define('NONCE_SALT',       'Hc9>^4/PP@.DUN0-7x8`:qT0ow)`{ud1HIfnCFjAj+Z%9l!SSxllHz:GO.q<D0HA');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
