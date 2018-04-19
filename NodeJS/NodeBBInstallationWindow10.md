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


6. step
