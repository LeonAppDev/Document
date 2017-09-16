# Theory
## Important component
   There are three steps on using a SSL connection, first is obtaining a SSL certificate, second is using and third is renewing it.
   SSL vault is installed in a server and you must point your domain to this server.

   Here we use Let's encrypt to create an free ssl
## Steps
    There is a guid on
    https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04

    1. Install certbot on the servcer, the process is a little bit different with the article above, should get reference with certbot site.
    2. Add the server name in your nginx or other server so certbot could find out its name
