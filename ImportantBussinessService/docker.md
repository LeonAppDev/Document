# Docker description
## Docker command

     * docker stop $(docker ps -a -q)
      > stop all container  

     * docker rm $(docker ps -a -q)
      >remove all container

      * docker events
      > start it first, and then when doing any operation, it will print the log for docker, the main usage
       for this command is to get container instance id and then we could use it in docker log command to get more detailed information

      * docker logs
       > docker logs instance-id and it will give you detailed information.
       eg. I meet a situation that sql database instance can not start, and when I check the log,it shows, this instance needs at least 3250 mega byte memory and I change my docker CE's memory allocation, it works at last

## Docker-compose
   Use docker compose to build windows development platform and deployment platform using visual studio 2017 and docker CE and you could also develop with linux platform under windows
   1. Definition
     Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a Compose file to configure your application's services, Then, using a single command, you create and start all the services from your configuration

## Docker tools
   Docker has series of tools, docker client use Dockerfile to install a single image, docker compose install multi-containers into in one application, docker machine, docker registry install in a docker host .

## Dockerising a Node.js and MongoDB App

## Docker issue when running on windows
1. No such file or directory/env: node
Ran into the same problem, and found a solution.
The issue is related to windows vs. UNIX line endings. According to this post it is best to change a git setting to not convert line endings (git config core.autocrlf false) before cloning onto a Windows environment. For me this trick didn't fix it though, but loading the kibana/entrypoint.sh file into an editor (notepad++) and converting to UNIX format worked.

The problem's cause was that Git on Windows converted the line endings of gradlew from Unix style (LF) to Windows style (CRLF).
You can turn off that automatic conversion using git config core.autocrlf false.
Setting the line endings of gradlew back to Unix style fixed the problem. In Vim this is done using set fileformat=unix.

2. Most of dockers do not have a text editor
apt-get update
apt-get install vim -y

3. Get access to local instance port of a docker(Connection refused while connecting to upstream when using nginx as reverse proxy
)
Change your proxy_pass from

proxy_pass         http://0.0.0.0:8000;
to

proxy_pass         http://web:8000;
Your nginx needs to forward to request the web container

Edit-1: Explanation

0.0.0.0 is a special IP address which is used to refer to any available interface on the machine. So if your machine has a loopback (lo), ethernet (eth0), Wifi (wlan0) with respective IP as 127.0.0.1, 192.168.0.100, 10.0.0.100.

So now while listening for incoming connection you can choose any of the above IP

gunicorn wsgi:application --workers 2 --bind 10.0.0.100:8000
This will only be reachable from your Wifi network. But other machines on Lan network can't visit it. So if you want your app to listen on any available network on the machine you use a special IP 0.0.0.0. This means bind on all network interfaces

gunicorn wsgi:application --workers 2 --bind 0.0.0.0:8000
Now when you access the app using http://0.0.0.0 it is equivalent to using 127.0.0.1. So your proxy_pass http://0.0.0.0:8000; is equivalent to proxy_pass http://127.0.0.1:8000;

So when you run that in nginx container, it passes on the request on port 8000 of the same container and there is nothing running on 8000 in your nginx container. So you need to send that request to the your gunicorn container. This is reachable using the service name web in docker-compose.

See the below article for more details https://docs.docker.com/compose/networking/

4. When setup a new nodebb forum, need to go inside the docker instance to modify url in config.json

5. Command to fo inside a docker
$ sudo docker exec -i -t 665b4a1e17b6 /bin/bash #by ID

## Dockerising a Nginx server with https support
1. First you need to make sure docker expose the same port with the port configured in nginx configuration files, I spend a long time trying to figure out why nginx could not show any https trace, then find out I mistakenly configure nginx's port to 433, the right one for https should be 443

2. I take below two articles as reference
https://www.humankode.com/ssl/how-to-set-up-free-ssl-certificates-from-lets-encrypt-using-docker-and-nginx
https://community.nodebb.org/topic/8375/how-to-let-s-encrypt-and-nodebb/2

The first one describe how to set https docker, but it use nginx as a real server, the second one talk about how to configure in NodeBB when considering nginx as a reverse-proxy.

Below is the command I use for creating my own cerbot certification for bbs.localbitcoin.co.nz

The difference between my step and the step in first link is I do not use a temporary nginx config and docker compose, I configure docker compose as production one and nginx first use http and then in production version add https content

```
sudo docker run -it --rm \
-v /docker-volumes/etc/letsencrypt:/etc/letsencrypt \
-v /docker-volumes/var/lib/letsencrypt:/var/lib/letsencrypt \
-v /home/nodebbCustomized/letsencrypt-site:/var/www/bbs.localbitcoin.co.nz/html \
-v "/docker-volumes/var/log/letsencrypt:/var/log/letsencrypt" \
certbot/certbot \
certonly --webroot \
--register-unsafely-without-email --agree-tos \
--webroot-path=/var/www/bbs.localbitcoin.co.nz/html \
--staging \
-d bbs.localbitcoin.co.nz


sudo docker run --rm -it --name certbot \
-v /docker-volumes/etc/letsencrypt:/etc/letsencrypt \
-v /docker-volumes/var/lib/letsencrypt:/var/lib/letsencrypt \
-v /home/nodebbCustomized/letsencrypt-site:/var/www/bbs.localbitcoin.co.nz/html \
certbot/certbot \
--staging \
certificates

sudo rm -rf /docker-volumes/

sudo docker run -it --rm \
-v /docker-volumes/etc/letsencrypt:/etc/letsencrypt \
-v /docker-volumes/var/lib/letsencrypt:/var/lib/letsencrypt \
-v //home/nodebbCustomized/letsencrypt-site:/var/www/bbs.localbitcoin.co.nz/html \
-v "/docker-volumes/var/log/letsencrypt:/var/log/letsencrypt" \
certbot/certbot \
certonly --webroot \
--email liangren64@gmail.com --agree-tos --no-eff-email \
--webroot-path=/var/www/bbs.localbitcoin.co.nz/html \
-d bbs.localbitcoin.co.nz

```

After setup https, then we need to modify the nginx configuration and docker compose and create daily job on cron

And the last thing is modify your nginx configuration to get highest rate on ssllabs and securityheaders

The websocket does not work properly with reverse proxy nginx, below is the solution for me
```
I googled because I got the same problem and I also use nginx. The solution is to add this part

proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
proxy_set_header Host $host;

into the nginx configuration file like tylercb mentioned.
```
http://nginx.org/en/docs/http/websocket.html

I am not sure whether this modification could cause TIME_WAIT issue but here is a analysis and solution for this issue in case I need it in future

[TIME_WAIT issue on nginx server](http://hushi55.github.io/2015/08/13/TIME_WAIT_analyze)

Then I enable ufw on my server so remember next time when you add any new service like ftp, you should add the port in the ufw rule, now I only opne 443, 80 and 22 for https, http and ssh

## Nodebb docker update

Below is a method comparing with build from source code, it package up all files in an image to create a production level image

```
Just saw this issue. What I'm doing is creating my own docker image and I have an entrypoint.sh for it.

entrypoint.sh

#!/bin/bash

set -Eeuo pipefail

if [ -f /data/config.json ]; then
    /data/nodebb upgrade -sb
fi

exec "$@"
And my Dockerfile at the moment:

FROM node:8

ENV NODE_ENV=production \
    daemon=false \
    silent=false

WORKDIR /data
COPY entrypoint.sh /data

RUN wget https://github.com/NodeBB/NodeBB/archive/v1.9.3.tar.gz \
    && tar xzf v1.9.3.tar.gz --strip-components 1 \
    && rm v1.9.3.tar.gz \
    && cp /data/install/package.json /data/package.json \
    && npm install \
    && npm install nodebb-plugin-cppnet-markdown \
                   nodebb-plugin-cppnet-solr \
                   nodebb-plugin-ban-privileges \
                   nodebb-plugin-math-captcha \
                   nodebb-plugin-emoji-one \
                   nodebb-plugin-gdpr \
    && npm cache clean --force \
    && chmod +x /data/entrypoint.sh

ENTRYPOINT [ "/data/entrypoint.sh" ]
CMD [ "node", "loader.js" ]

# the default port for NodeBB is exposed outside the container
EXPOSE 4567
It is still not perfect, but it works. And I can just generate a new Docker image and replace it on the server. The entrypoint.sh will make sure to upgrade the database and build the templates. It also won't try to look for updated plugins and thus wait for input during startup, because NodeBB ask the administrator during startup if the plugin upgrade should be done.
```


## Build a docker CI environment
Now I try to build a development, staging and production environment for my project using docker. It should act as below
1 Codebase is stroed in one place such as gitlab or github
2 What I need to do is just download the code base from repository and build it as development, staging or production
3 There are will be different database and cofiguration file 
4 CI could work with this project, triggered automatically and send report to project manager
5 Once Certain stage come, we could estimate whether we are confident enought from CI's report


## Dockering a node.js platform
1. Could write different scripts for development, staging and production in package.json and run different command in Dockerfile

2. Remember to add a .dockignore file to exclude node_modules and npm-debug.log when copy files into image

3. Use "docker build -t node-web-app ." command in the Dockerfile folder to create the docker image 

4. When creating the container, use below command
   
   docker run -p 8080:3000(8080 is the port in localhost, we could access docker from this port and 3000 is the port in docker) -d node-web-app
   
   in windows, we could set host name as 'host.docker.internal' in container so the app in container could access host service
  
   In linux, we have to use docker run --net=host -d node-web-app

5. Process when images failed to start

use below command to open docker's events log
```
docker events&

```

then docket run .. your image and then you should see something like the following in the screening

```
2015-12-22T15:13:05.503402713+02:00 xxxxxxxacd8ca86df9eac5fd5466884c0b42a06293ccff0b5101b5987f5da07d: (from xxx/xxx:latest) die

```
Then you can get the starup hex id from previous message then we could use it wiht the logs command

```
docker logs <copy the instance id from docker events messages on screen>
```
You should now see some output from the failed image startup.

As @alexkb suggested in a comment: docker events& can be troublesome if your container is being constantly restarted from something like AWS ECS service. In this scenario it may be easier to get the container hex id out of the logs in /var/log/ecs/ecs-agent.log.<DATE>. Then use docker logs <hex id>.