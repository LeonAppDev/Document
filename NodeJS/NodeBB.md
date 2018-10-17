# Install and config nodeBB

## Install NodeBB on Ubuntu 16.4
1. Create a instance of Ubuntu 16.4 on Google Cloud platform
   For any new users, you will get $300 credit in your account and for 1 cpu and 1GB memory and 10 GB disk, it is estimated to charge $20-30 per month so it could last for about 9-10 month.

   Need to create a new username and password

   Here is bb@Hamilton

   This is the easiest part just follow the step is OK
2. Install all dependency
   Install Node.js and MongoDB

3. Configure MongoDB
   Create a admin user leon/Duan1984, create a database nodebb and a use nodebb/test111111
   Below is a solution for mongodb started failed in ubuntu 16.04
   ```
   MongoDB — Ubuntu 16.04 (code=exited, status=14) AWS lightsail problem
Hi, here is a quick tip about a really annoying problem when you install MongoDB over Ubuntu 16.04 distro at AWS LightSail.
When you start your MongoDB through:
sudo service mongod start
And the result is something like this:
● mongod.service — High-performance, schema-free document-oriented database Loaded: loaded (/lib/systemd/system/mongod.service; disabled; vendor preset: enabled) Active: failed (Result: exit-code) since Wed 2016–12–07 03:43:00 UTC; 3min 9s ago Docs: https://docs.mongodb.org/manual Process: 24453 ExecStart=/usr/bin/mongod — quiet — config /etc/mongod.conf (code=exited, status=14) Main PID: 24453 (code=exited, status=14)
And you don't know why.
The problem is, the Mongodb SOCK do not belong to the mongodb group and user.
So here is a quick fix
1 — Go to the TMP directory: cd /tmp
2 — Check if you have the mongodb sock file: ls *.sock
3 — Change the user:group permission: chown mongodb:mongodb <YOUR_SOCK>
4 — Start MongoDB: sudo service mongod start
5 — Check the MongoDB status: sudo service mongod status
As the result, you should see something like this:
● mongod.service — High-performance, schema-free document-oriented database Loaded: loaded (/lib/systemd/system/mongod.service; disabled; vendor preset: enabled) Active: active (running) since Wed 2016–12–07 03:48:30 UTC; 6s ago Docs: https://docs.mongodb.org/manual Main PID: 24720 (mongod) Tasks: 13 Memory: 40.1M CPU: 66ms CGroup: /system.slice/mongod.service └─24720 /usr/bin/mongod — quiet — config /etc/mongod.conf
If the problem persist, feel free to contact me: Twitter @gabrielpires or by e-mail eu at gabrielpires.com.br
```

Below is normal operation for mongodb
```
sudo mongodump -u username -p password
```


4. First install nodebb
   Install git and get source from github, I put the code at folder /liangren64

5. Need some configuration during first installation
    URL used to access this NodeBB (http://localhost:4567)
    Please enter a NodeBB secret (615411f3-83bb-495b-b589-fbacc9625d70) leon
    Which database to use (mongo)
     15/10 21:55:43 [9650] - info: Now configuring mongo database:
     Host IP or address of your MongoDB instance (127.0.0.1)  
     Host port of your MongoDB instance (27017)

     Administrator username: nodebb
     Administrator Email: liangren64@gmail.com
     Administrator passport: bb@Hamilton
6. Set up automatically start
    I am following the instruction [nodebb ubuntu](https://nodebb.readthedocs.io/en/latest/installing/os/ubuntu.html)
7. Install nginx and config it as a proxy
    Follow below instruction to install nginx
    [Nginx install]https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04

    Remember google default prevent http and https connection so you need to allow it through instance configuration

    After installation, you need to confg your nginx server, below is the method to do it
    [configure 1](https://www.blogsynthesis.com/nginx-as-nodebb-proxy/)
    [configure 2](https://nodebb.readthedocs.io/en/latest/configuring/proxies/nginx.html)

    I make it simple so just modifying default configuration.
8. Install firewall and config it.

9. Setup email service
    Install plugin emailer-sendgrid and get an API from sendgrid to send your emails from sendgrid.

10. NodeBB upgrade
    My installation of NodeBB is 1.5.3, and note that NodeBB is actively developed and new version could provide new features and fix, so it is
    always recommended to get upgrade.
    Follow the instructions (Nodebb upgrade)[https://docs.nodebb.org/configuring/upgrade/]
    * Shut down nodebb
    * Back up data
    * Get version from github
    * upgrade
    There are several important things need to be taken into consideration. First data must be back up, second upgrade may need certain node.js version support and third upgrade may cause old plugin work improperly and fourth is upgrade may break customized function, so we need to think about how to do it before we do any update.

11. Build a NodeBB local development platform
<<<<<<< HEAD
    
=======

>>>>>>> 4cb29e0282071f82581658d588c229d575f21b13
100. Useful link
  [Install NodeBB on ubuntu](https://docs.nodebb.org/installing/os/ubuntu/)
  [Insatll NodeBB on centos](https://github.com/NodeBB-China/NodeBB-China/blob/master/%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B/CentOS%2BNodeBB%2BMongoDB.mdnode)
  [Discourse](https://www.discourse.org/)
  [Wecenter](http://www.wecenter.com/)

101. Issues
   * Looks like your connection to NodeBB was Lost, this means your URL part in config.json should be changed
102. Useful quotes
     from [qingyunzhi](https://xuanwo.org/2016/07/08/nodebb-upgrade/)
     **应用部署的灵活性
上线任何应用之前都应该考虑其架构的扩展性和迁移能力。 很多时候，部署一套应用的目的根本就不是为了去使用他，只是单纯的部署一个玩一玩而已。在这样的心态下，总会干出这样的事情：在一个20G的主机上跑ownCloud；在一个主机上同时跑wordpress，nginx和mysql等应用。当然，这样做并没有什么问题，毕竟是自己的Server，哪怕天天 rm -rf /都是OK的。 但是如果是一套需要给别人用的应用，部署时的扩展性和迁移能力就必须考虑在内。这其实是两个很实在的问题：服务器空间耗尽，性能跟不上怎么办？服务器挂了，如何保全自己的数据？自己设计这样一套系统很麻烦，但是如果是在青云上就不一样了。我最喜欢青云的一点就是，青云几乎所有的资源都是可以动态伸缩和扩展的。带宽受限制了，直接扩大；服务器性能不够了，加核心加内存；单个服务器支撑不住了，批量生成十个并使用负载均衡器进行负载均衡操作；想要测试某个最新的特性，直接从线上创建一个Snapshot并生成资源进行测试。 在本次迁移的过程中，我们就可以看出来，我们可以直接使用 Redis 进行升级，而不是手动导出数据库备份再执行导入操作。同样地，我们也不需要再重新配置一遍 Nginx ，只需要再创建一个负载均衡器即可。**
