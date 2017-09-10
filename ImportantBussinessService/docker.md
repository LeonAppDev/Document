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
