## Set up multi sites to one server using Nginx virtual server block
Reference with this document [Setup server blocks](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04)

## issues
When I upload index.html and js files generated from React, the nginx server always report 403 forbidden, so I have to run the nginx server as root user which is quite dangerous, need to figure out a way to use www-data user


## Redirect
1. location redirect rule
It's a little bit different than I expect, say
```
location /path {

	proxy_pass http://localhost:8080
}
```

this will rediect uri /path and /path/* to a reverse server, the important thing we should notice is it seems it direct to http://localhost:8080/path/* instead of http://localhost:8080/*, if you want to redirect it to http://localhost:8080/*, you could use below rewrite rule

```
location  /foo {
  rewrite /foo/(.*) /$1  break;
  proxy_pass         http://localhost:3200;
  proxy_redirect     off;
  proxy_set_header   Host $host;
}
```