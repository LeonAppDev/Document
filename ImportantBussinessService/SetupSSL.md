# Theory
## Important component
   There are three steps on using a SSL connection, first is obtaining a SSL certificate, second is using and third is renewing it.
   SSL vault is installed in a server and you must point your domain to this server.

   Here we use Let's encrypt to create an free ssl
## Steps
    There is a guide on
    https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04

    1. Install certbot on the servcer, the process is a little bit different with the article above, should get reference with certbot site.
    2. Add the server name in your nginx default files or other server so certbot could find out its name
    3. Use a certbot command to add domain name to your server.
    4. Need to set up firewall to protect your server(I have not done that)
    5. Could also use a website security lab to test your SSL connection
    6. Usually you need to set up diffie-hellman parameter for a higher grade key exchange
    7. Finally need to setup a auto renewal.(Use a service named cron to check the status and update certbot everyday)

## Issues
1. Http request always failed
   After Set up SSL connection, I find out if I want to connect leon-ren.com using normal http connect, it always failed, after searching all the configuration that used in Nginx to forwards http to https, I find out finally is my UFW does not open 80 port. So the first thing you need to take into consideration is firewall when internet server failed.
