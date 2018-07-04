# Immigrate a wordpress webiste to local or to another website
## Normal process
1. better to deactivate all your plugins
2. Install a new Wordpress on destination website
3. Keep a backup of wp-config.php of new installed website
4. Delete other files in new installed wordpress. Cpoy all the files from source wordpress website.
5. Delete All the database of new created wordpres, and import source database.
6. Somethimes there is a upload max limitation, if the server belongs to you, you could change it, if not, try to zip the sql and upload again.
7. replace wp-config.php files with backup one.
8. Change siteurl and home in wp_options table in database
9. Nearly there, then you may need to activate plugin or change the themes.
10. Sometimes source website use SSL but destination does not, so you need to remove ssl in destination. eg. delete really-simple-ssl plugin.

## Change name of Database
There are three steps for you to change a name for wordpress website
1. Use operation in PhpAdmin to change the database DB_NAME
2. Create a new user and grant privileges of this renamed database to the users
3. Change database name,user and password in wp-config.php
