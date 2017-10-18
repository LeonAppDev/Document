## Set up multi sites to one server using Nginx virtual server block
Reference with this document [Setup server blocks](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04)

## issues
When I upload index.html and js files generated from React, the nginx server always report 403 forbidden, so I have to run the nginx server as root user which is quite dangerous, need to figure out a way to use www-data user
