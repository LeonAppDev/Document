## Run NodeJS on Ubuntu 16.04 Nginx server

1. Install NodeJS

Installation of an LTS version of Node.js is recommended to avoid unexpected breaking changes in the future as part of system updates. To start, add the nodesource
repository and install Node.js

```
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs

```

2. Create server block for this domain

Below is the server block I use for node.leon-ren.com, this domain name points to my app of nodejs  

```

server {

        listen 80;

        listen [::]:80; # for ipv6

        server_name node.leon-ren.com; # Domain name for this API

        location / {

        proxy_pass http://localhost:8080; # Transfer to localhost
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;

        }




}

```

Now that we have our server block files, we need to enable them. We can do this by creating symbolic links from these files to the sites-enabled directory, which Nginx reads from during startup.

```
sudo ln -s /etc/nginx/sites-available/nodejs /etc/nginx/sites-enabled/
```
Test the configuration of Nginx using below command

```
$ sudo nginx -t
```
Then reload Nginx if everything is OK

```
$ sudo service nginx reload
```

3. Create a NodeJs application using Express
Create a folder and install express

```
$ cd /var/www
$ sudo mkdir nodejs
$ cd nodejs
$ sudo npm install express
```
Create a simple express application
```
$ sudo vi app.js

```

and make it listen at port 8080 and private_ip_address. It should look something like this:-
```javascript
var express = require('express');
var app = express();
app.get('/', function(req, res){
   res.send("Hello World!");
});
app.listen(8080, 'private_ip_address');
```
>Replace private_ip_address with your private ip address.

Run your app by usinfg the command Below

```
$ node app.js

```

Now when visiting the domain it will show 'Hell World!'

4. Install PM2 Advanced
 Install PM2 advanced, production process manager for nodejs
 ```
 $ sudo npm install pm2 -g

 ```
 Run your application using pm2 to make sure your application runs automatically when the server restarts.
```
 $ pm2 start app.js
 ```
