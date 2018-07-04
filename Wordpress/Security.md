# Hide your login page
There are several different ways to hide the login page
* Use a plugin
* Use a user name and password to protect it(.htaccess)
* Use IP address rule to protect it
Here is a guideline on how to do it
[Protect wordpress admin page](https://pagely.com/blog/hiding-wordpress-login-page/)

# Several security plugins
1. WPS Hide Login
2. Cloudflare
3. Limit Login Attempts
4. Sucuri security

# Setup an easy SSL connection on Godaddy
1. For newest version of Cpanel, we could setup SSL connetion through it
2. When Add an addon website on deluxe plan on godaddy, select to build the website on https://domain,
3. If you domain is in other domain provider, you should change the name server to godaddy's
4. Change the nameserver to Cloudflare
5. Setup Cloudflare pluggin and account and turn on Automatic HTTPS Rewrites

For website setup with both http and https, and install WPS Hide Login, will have problem go into admin area if you turn  Automatic HTTPS Rewrites on so need to fix it.
