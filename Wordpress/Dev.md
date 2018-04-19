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

8. When reinstall windows, Apach server failed to launch, and when searching in google all of the posts only mentioned change a port or disabled a service which take the prot 80, howerver, in my situation it is not the case, I think it is because of some dependencies lost. So I have to reinstall xampp. Another thing is when setting up the development platform, it always tells me about database connection error. Finally I figure out it is the database's user problem, the user I created does not have right privileges. So it is recommeded to use default user when creating the wordpress instance. Just change the password is OK.

9. Remember to set max_execution_time = 360  and max_input_time = 120 in php.ini otherwise some pages may load overtime.    

## Install XDebug
XDebug is quite important since it will show stack information.
[Guideline for installing Xdebug for xampp](https://gist.github.com/odan/1abe76d373a9cbb15bed)


## Install Atom debug platform
1. Install XDebug as shown above and config it following the guide
2. Install XDebuger helper, and config IDE key to xdebug-atom
3. Install php-debug plugin in atom
4. Set xdebug.remote_autostart=false in php.ini otherwise whenerver refresh the page, it will go directly to atom, we could not control it manually.
5. For wordpress, some plugin may has runtime error and XDebug will stop everytime meeting an error, so need to disable it and make page loading easily.

Another thing is if we do not use XAMPP and Apache as server but use php-fpm as a server, we may need to change the listening prot for atom php-debugm, could reference below article
[Using XAMPP and XDebug](https://segmentfault.com/a/1190000009500015)
