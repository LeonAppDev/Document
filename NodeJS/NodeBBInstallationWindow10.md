# Windows 10

## Required Software
First install below Software
1. [GitHub for windows](https://desktop.github.com/)
2. [Nodejs](https://nodejs.org/en/download/)
3. [Python](https://www.python.org/ftp/python/2.7.8/python-2.7.8.msi)

If you use MongoDB to build NodeBB, then download MongoDB otherwise get Redis
4. [MongoDB Community Server](https://www.mongodb.com/download-center?jmp=nav#community)
or
4. [Redis](https://github.com/MicrosoftArchive/redis/releases)

You could google how to install those software.

## Running NodeBB

### Get NodeBB Source
Go to directory you want to store the source code of NodeBB

```
git clone -b v1.6.x(version number you want to download) https://github.com/NodeBB/NodeBB.git

```
Enter directory and install dependencies
```
cd NodeBB

npm install

./nodebb dev
```

If below strings output, then you are in the right route
>3/11 11:19:21 [6268] - verbose: * using configuration stored in: C:\PrivateAppDev\AtomProject\NodeBB\config.json
3/11 11:19:23 [6268] - info: Launching web installer on port 4567
3/11 11:19:23 [6268] - info: Web installer listening on http://0.0.0.0:4567

Then you could open a browser and tap http://localhost:4567/, You will see a webpage version of NodeBB installer

### Configure MongoDB
I take reference for [MongoDB configuration](https://docs.mongodb.com/v2.8/tutorial/install-mongodb-on-windows/#get-mongodb)  
Below is a configuration guide for MongoDB
1. Initialize database
First create a directory for MongoDB database and set database path to it

```
C:\PrivateAppDev\AtomProject\MongoDBFile\NodeBBDev

& 'C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe' --dbpath C:\PrivateAppDev\AtomProject\MongoDBFile\NodeBBDev
```

If correct, You will see below message

>
2017-11-02T15:32:12.896-0700 I CONTROL  [initandlisten] MongoDB starting : pid=26724 port=27017 dbpath=C:\\PrivateAppDev\
AtomProject\\MongoDBFile\\NodeBBDev 64-bit host=Leon-Ren-Dell
2017-11-02T15:32:12.897-0700 I CONTROL  [initandlisten] targetMinOS: Windows 7/Windows Server 2008 R2
2017-11-02T15:32:12.899-0700 I CONTROL  [initandlisten] db version v3.4.10
2017-11-02T15:32:12.902-0700 I CONTROL  [initandlisten] git version: 078f28920cb24de0dd479b5ea6c66c644f6326e9
2017-11-02T15:32:12.902-0700 I CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.0.1u-fips  22 Sep 2016
2017-11-02T15:32:12.903-0700 I CONTROL  [initandlisten] allocator: tcmalloc
2017-11-02T15:32:12.903-0700 I CONTROL  [initandlisten] modules: none
2017-11-02T15:32:12.904-0700 I CONTROL  [initandlisten] build environment:
2017-11-02T15:32:12.904-0700 I CONTROL  [initandlisten]     distmod: 2008plus-ssl
2017-11-02T15:32:12.905-0700 I CONTROL  [initandlisten]     distarch: x86_64
2017-11-02T15:32:12.905-0700 I CONTROL  [initandlisten]     target_arch: x86_64
2017-11-02T15:32:12.905-0700 I CONTROL  [initandlisten] options: { storage: { dbPath: "C:\\PrivateAppDev\\AtomProject\\Mong
oDBFile\\NodeBBDev" } }
2017-11-02T15:32:12.910-0700 I STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=3525M,session_max=2000
0,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,archive=true,path=journal
,compressor=snappy),file_manager=(close_idle_time=100000),checkpoint=(wait=60,log_size=2GB),statistics_log=(wait=0),
2017-11-02T15:32:13.046-0700 I CONTROL  [initandlisten]
2017-11-02T15:32:13.046-0700 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2017-11-02T15:32:13.050-0700 I CONTROL  [initandlisten] **          Read and write access to data and configuration is u
nrestricted.
2017-11-02T15:32:13.051-0700 I CONTROL  [initandlisten]
2017-11-03T11:32:14.158+1300 I FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory 'C
:/PrivateAppDev/AtomProject/MongoDBFile/NodeBBDev/diagnostic.data'
2017-11-03T11:32:14.336+1300 I INDEX    [initandlisten] build index on: admin.system.version properties: { v: 2, key: {
version: 1 }, name: "incompatible_with_version_32", ns: "admin.system.version" }
2017-11-03T11:32:14.336+1300 I INDEX    [initandlisten]          building index using bulk method; build may temporarily
 use up to 500 megabytes of RAM
2017-11-03T11:32:14.366+1300 I INDEX    [initandlisten] build index done.  scanned 0 total records. 0 secs
2017-11-03T11:32:14.374+1300 I COMMAND  [initandlisten] setting featureCompatibilityVersion to 3.4
2017-11-03T11:32:14.408+1300 I NETWORK  [thread1] waiting for connections on port 27017

From message above we could see for now there is no access control, so we need to add it, open a new console window and then connect with client

```
C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe
```
You should see below output

>
MongoDB shell version v3.4.10
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
        http://docs.mongodb.org/
Questions? Try the support group
        http://groups.google.com/group/mongodb-user
Server has startup warnings:
2017-11-02T15:32:13.046-0700 I CONTROL  [initandlisten]
2017-11-02T15:32:13.046-0700 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2017-11-02T15:32:13.050-0700 I CONTROL  [initandlisten] **          Read and write access to data and configuration is u
nrestricted.
2017-11-02T15:32:13.051-0700 I CONTROL  [initandlisten]

2. Create user
Print all dababase

```
>show dbs
```

Switch to database admin

```
>use admin
```

Then create a administrative user , remember to place <Enter a username> and <Enter a secure password> with your chosen user name and password, do not left '<' and '>' behind, here I select the same user name and password I use in online version

```
>db.createUser( { user: "<Enter a username>", pwd: "<Enter a secure password>", roles: [ { role: "readWriteAnyDatabase", db: "admin" }, { role: "userAdminAnyDatabase", db: "admin" } ] } )

```

Then create a new database nodebb

```
>use nodebb
```
The database will be created and context switch to nodebb. Next create the nodebb user and add the approriate privileges:

```
>db.createUser( { user: "nodebb", pwd: "<Enter a secure password>", roles: [ { role: "readWrite", db: "nodebb" }, { role: "clusterMonitor", db: "admin" } ] } )

```

The readWrite permission allow this user to write and retrieve data from nodebb and clusterMonitor permission provides NodeBB read-only access to query database server statistics which are the exposed in the NodeBB Administrative Control Panel

3. Create a configuration file
   Create a configuration file, the file must set systemLog.path and include [additional configuration](https://docs.mongodb.com/v2.8/reference/configuration-options/) options as appropriate

   Below is configuration file I creates
```
systemLog:
    destination: file
    path: C:\PrivateAppDev\AtomProject\MongoDBFile\Log
storage:
    dbPath: C:\PrivateAppDev\AtomProject\MongoDBFile\NodeBBDev
security:
      authorization: enabled
```

Then stop MongoDB server using ctrl+c in powershell

4. Install the MongoDB service

> Important
Run all of the following commands in Command Prompt with "Administrative Privileges"

Install the MongoDB service by starting mongod.exe with the --install option and the -config option to specify the previously created configuration file.

```
& 'C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe' --config C:\PrivateAppDev\AtomProject\MongoDBFile\Config\mongod.cfg --install

```

Then Start MongoDB service
```
net start MongoDB
```

You could stop MongoDB as well

```
net stop MongoDB
```

5. Connect with authorization

```
& 'C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe' -u yourUser -p yourPwd --authenticationDatabase admin
```
### Install Nodebb with MongoDB

Go to source folder of NodeBB,  run below command

```
./nodebb dev
```

Open address to localhost:4567

Create a Administrator account and input MongoDB connection parameter as requested then click Install NodeBB button, wait about 2 minutes your Nodebb database will be ready.


Then you could use above command to start nodebb development


6. Step to recover a NodeBB local setup when re-install Windows

First I think this means the same thing when you need to migrate your nodebb and recover it from another server.

So what you need is the backup of your lastest backup of your nodebb and mongodb files.

I use nodebb backup on my portable disk but get below message

```
NodeBB v1.6.1 Copyright (C) 2013-2014 NodeBB Inc.
This program comes with ABSOLUTELY NO WARRANTY.
This is free software, and you are welcome to redistribute it under certain conditions.
For the full license, please visit: http://www.gnu.org/copyleft/gpl.html

Clustering enabled: Spinning up 1 process(es).

19/4 16:52:27 [90516] - verbose: * using configuration stored in: D:\backup\personalfiles\Development\AtomProject\NodeBB\config.json
19/4 16:52:28 [90516] - info: Initializing NodeBB v1.6.1 http://localhost:4567
19/4 16:52:28 [90516] - verbose: * using mongo store at 127.0.0.1:27017
19/4 16:52:28 [90516] - verbose: * using themes stored in: D:\backup\personalfiles\Development\AtomProject\NodeBB\node_modules
19/4 16:52:31 [90516] - error: NodeBB could not connect to your Mongo database. Mongo returned the following error: failed to connect to server [127.0.0.1:27017] on first connect [MongoError: connect ECONNREFUSED 127.0.0.1:27017]
19/4 16:52:31 [90516] - error:  MongoError: failed to connect to server [127.0.0.1:27017] on first connect [MongoError: connect ECONNREFUSED 127.0.0.1:27017]
    at Pool.<anonymous> (D:\backup\personalfiles\Development\AtomProject\NodeBB\node_modules\mongodb-core\lib\topologies\server.js:336:35)
    at emitOne (events.js:96:13)
    at Pool.emit (events.js:188:7)
    at Connection.<anonymous> (D:\backup\personalfiles\Development\AtomProject\NodeBB\node_modules\mongodb-core\lib\connection\pool.js:280:12)
    at Connection.g (events.js:292:16)
    at emitTwo (events.js:106:13)
    at Connection.emit (events.js:191:7)
    at Socket.<anonymous> (D:\backup\personalfiles\Development\AtomProject\NodeBB\node_modules\mongodb-core\lib\connection\connection.js:187:49)
    at Socket.g (events.js:292:16)
    at emitOne (events.js:96:13)
[cluster] Child Process (90516) has exited (code: 0, signal: null)
```

I think it means I need to install mongodb and recover the database.

So I re-do mongodb and python installaion process.

After installation of MongoDB, I set the db path for it to backup database route using below command
```
& 'C:\Program Files\MongoDB\Server\3.6\bin\mon
god.exe' --dbpath D:\backup\personalfiles\Development\AtomProject\MongoDBFile\NodeBBDev\

```
And it prints below message

>2018-04-19T14:49:52.681-0800 I CONTROL  [initandlisten] MongoDB starting : pid=13416 port=27017 dbpath=D:\backup\personalfiles\Development\AtomProject\MongoDBFile\NodeBBDev\ 64-bit host=Leon-Ren-Dell
2018-04-19T14:49:52.682-0800 I CONTROL  [initandlisten] targetMinOS: Windows 7/Windows Server 2008 R2
2018-04-19T14:49:52.683-0800 I CONTROL  [initandlisten] db version v3.6.4
2018-04-19T14:49:52.687-0800 I CONTROL  [initandlisten] git version: d0181a711f7e7f39e60b5aeb1dc7097bf6ae5856
2018-04-19T14:49:52.687-0800 I CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.0.2o-fips  27 Mar 2018
2018-04-19T14:49:52.688-0800 I CONTROL  [initandlisten] allocator: tcmalloc
2018-04-19T14:49:52.688-0800 I CONTROL  [initandlisten] modules: none
2018-04-19T14:49:52.689-0800 I CONTROL  [initandlisten] build environment:
2018-04-19T14:49:52.690-0800 I CONTROL  [initandlisten]     distmod: 2008plus-ssl
2018-04-19T14:49:52.691-0800 I CONTROL  [initandlisten]     distarch: x86_64
2018-04-19T14:49:52.693-0800 I CONTROL  [initandlisten]     target_arch: x86_64
2018-04-19T14:49:52.693-0800 I CONTROL  [initandlisten] options: { storage: { dbPath: "D:\backup\personalfiles\Development\AtomProject\MongoDBFile\NodeBBDev\" } }
2018-04-19T14:49:53.015-0800 W -        [initandlisten] Detected unclean shutdown - D:\backup\personalfiles\Development\AtomProject\MongoDBFile\NodeBBDev\mongod.lock is not empty.
2018-04-19T14:49:53.036-0800 I -        [initandlisten] Detected data files in D:\backup\personalfiles\Development\AtomProject\MongoDBFile\NodeBBDev\ created by the 'wiredTiger' storage engine, so setting the active storage engine to 'wiredTiger'.
2018-04-19T14:49:53.038-0800 W STORAGE  [initandlisten] Recovering data from the last clean checkpoint.
2018-04-19T14:49:53.039-0800 I STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=3525M,session_max=20000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),cache_cursors=false,log=(enabled=true,archive=true,path=journal,compressor=snappy),file_manager=(close_idle_time=100000),statistics_log=(wait=0),verbose=(recovery_progress),
2018-04-19T14:49:53.496-0800 I STORAGE  [initandlisten] WiredTiger message [1524178193:496014][13416:140719501500752], txn-recover: Main recovery loop: starting at 46/3200
2018-04-19T14:49:53.503-0800 I STORAGE  [initandlisten] WiredTiger message [1524178193:503082][13416:140719501500752], txn-recover: Recovering log 46 through 47
2018-04-19T14:49:53.620-0800 I STORAGE  [initandlisten] WiredTiger message [1524178193:619069][13416:140719501500752], txn-recover: Recovering log 47 through 47
2018-04-19T14:49:53.863-0800 I STORAGE  [initandlisten] WiredTiger message [1524178193:863283][13416:140719501500752], txn-recover: Set global recovery timestamp: 0
2018-04-19T14:49:54.498-0800 I CONTROL  [initandlisten]
2018-04-19T14:49:54.498-0800 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-04-19T14:49:54.500-0800 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-04-19T14:49:54.504-0800 I CONTROL  [initandlisten]
2018-04-19T14:49:54.505-0800 I CONTROL  [initandlisten] ** WARNING: This server is bound to localhost.
2018-04-19T14:49:54.506-0800 I CONTROL  [initandlisten] **          Remote systems will be unable to connect to this server.
2018-04-19T14:49:54.507-0800 I CONTROL  [initandlisten] **          Start the server with --bind_ip <address> to specify which IP
2018-04-19T14:49:54.511-0800 I CONTROL  [initandlisten] **          addresses it should serve responses from, or with --bind_ip_all to
2018-04-19T14:49:54.512-0800 I CONTROL  [initandlisten] **          bind to all interfaces. If this behavior is desired, start the
2018-04-19T14:49:54.515-0800 I CONTROL  [initandlisten] **          server with --bind_ip 127.0.0.1 to disable this warning.
2018-04-19T14:49:54.516-0800 I CONTROL  [initandlisten]
2018-04-19T14:49:54.517-0800 I CONTROL  [initandlisten]
2018-04-19T14:49:54.518-0800 I CONTROL  [initandlisten] ** WARNING: The file system cache of this machine is configured to be greater than 40% of the total memory. This can lead to increased memory pressure and poor performance.
2018-04-19T14:49:54.522-0800 I CONTROL  [initandlisten] See http://dochub.mongodb.org/core/wt-windows-system-file-cache
2018-04-19T14:49:54.522-0800 I CONTROL  [initandlisten]
2018-04-20T10:49:55.289+1200 I FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory 'D:/backup/personalfiles/Development/AtomProject/MongoDBFile/NodeBBDev/diagnostic.data'
2018-04-20T10:49:55.294+1200 I NETWORK  [initandlisten] waiting for connections on port 27017
2018-04-20T10:49:56.367+1200 I FTDC     [ftdc] Unclean full-time diagnostic data capture shutdown detected, found interim file, some metrics may have been lost. OK


And then I connect with MongoDB

```
& 'C:\Program Files\MongoDB\Server\3.6\bin\mongo.e
xe'
```

Repeat the process from section 2 of Configure MongoDB, remember to change routes to your mongodb file and database, database config location.

And Remember a administrator account has been created when you install NodeBB, I set it the same with online NodeBB for simple


7. Upgrade NodeBB locally
Shut down your forum. Then backup your database
command I use to backup database, you need to keep the database running
>./mongodump /u leon /p Duan1984

After executed, backup file will be stored in the bin folder
