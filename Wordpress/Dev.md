# Install wordpress on local Machine
## Process
1. Download bitnami installation file tp local machine
2. Setup and install wordpress blog with below comman
3. Copy all the files from your server's folder(including wp-admin, wp-content etc.) to destination folder
```
bitnami-wordpress-VERSION-module-windows-installer.exe --wordpress_instance_name newblogname
```
>>>
    Notice don't use _ in the blog name

3. Backup database(export) from the wordpress website you want to develop
4. Import backup database to the database from your newly installation on local Machine
5. Modify siteurl and home to the url you use for the test platform in the table wp_option
6. Modify below part in your wo-config.php file
``` php
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'nzpureto_wpen');

/** MySQL database username */
define('DB_USER', 'nzpureto_wpen');

/** MySQL database password */
define('DB_PASSWORD', ')v1p9S[1Kv');

/** MySQL hostname */
define('DB_HOST', 'localhost');
```

7. It seems if installing different version of bitnami, will install the whole stack incluing MySql and Apach, so if you do not want to install those service ,just another wordpress instance, use the same bitnami installation.


## Install XDebug
XDebug is quite important since it will show stack information.
