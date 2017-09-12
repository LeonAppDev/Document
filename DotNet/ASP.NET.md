# ASP.NET
## Name conventions
  .net platform, all class, namespace and function use Pascal writing.
## ASP.NET MVC
  1. ASP.NET MVC is a open source framework used by asp.net to implement MVC model
  2. It begins from MVC2 to MVC6 and the move to core mvc1.x and 2.x
  3. The main namespace is System.Web.Mvc
  4. Major data model
     In the controller, there are ActionResult, Task, ViewResult, View, async, await most of the objects are in the namespace of System.Web.Mvc, ActionResult is the base class of all return type for a controller, so usually if you are not clear about what kinds of return value you will meet, use this. For example, when you are developing a login module, usually return type will differ according to different result of login.

     * ActionResult
        You could claim a action result and return any type , those types could be wrapped properly into a actionresult class.
## ASP.NET membership system
   * Evolution
    First membership system, then simple membership system and finally universival provider.
    The reason why developing new authentication is User want to use identity not only provided by the  website but also from other social networks, the key is 3rd party identity could also be provided  and unit test need to be introduced in identity system as well
    * identity
      Namespace is Microsoft.AspNet.Identity
      1. IRole

      2. How to use Identity
       There are four actions in Identity, Regrister, Login, Loginout

## ASP.NET EF code first
   * important class to create a Entity framework application
    1. Namespace
     System.Data.Entity
    2. Class
      1. MigrateDatabaseToLatestVersion
         An implementation of IDatabaseInitializer<TContext> that will use Code First Migration to update the database to the latest version, it takes a DbContext class and
      2. Database
      3. DbContext
         Inherit from this class to generate a new customize class to create model.
         override OnModelCreate class , this class accept a parameter DbModelBuilder which is used to create mapping from model class to database table.
      4. DbModelBuilder
         An Entity method in this class is used to create the table from entity class, use ToTable method
         An Configurations member(type System.Data.Entity.ModelConfiguration.Configuration.ConfigurationRegistar) which is used to register derived entiity and complex type configurations to be registerd with this builder.
      5. DbMigrationConfiguration
         Inherit from this class, this class has a seed virtual method(seed) you could override and create test data etc..
      6. lazy loading
         Lazy loading is a concept where we delay the loading of the object until the point where we need it.

## Attribute in C#
   Attribute is an associate declarative information with c# code(types, method and properties etc.), it is similiar with adding a static member to a class, this is associated with a class or its member method, properties etc. We could also declare custome information by ourselves.

## Application level event handle in ASP.NET
   It evolves from Global.asax in ASP.NET Webform to Starup.cs in OWIN based asp.net. These kinds of files are used as the entry point of an ASP.NET application. Although it does the same thing in the same level, the idea on how to do is a little bit different. Global.asax will implement the handle logic and define the event itself, but Starup is mostly used to register services and inject modules in HTTP pipeline.
   1. Startup.cs
      It is mandatory in ASP.NET 5 which is named ASP.NET core 1.0 later. It is introduced from OWIN application the reduce dependency of application on server.  
      You could put Startup in any namespaces and create multiple Startup, ASP.NET will match from the Application's root namespace otherwise using alphabatically first namespace.
      It has two very important method which should be public
      One is ConfigureServices which receives a IServiceCollection input and add default services to the application and it could also register dependencies application need to implement IoC or Dependencies injection.
      The other is Configure, which reveives a IApplicationBuilder input, two optional parameters named IHostingEnvironment, ILoggerFactory and specifies how the application will responde in each HTTP reques. We need to define ConfigurationService first since Configure may need services registered in it.

## Dependency Injection in ASP.NET
   ASP.NET core has build-int support for Dependency injection, we can add services to DI container using this method. Following are ways to define ConfigureServices method in startup class.

## Open ID connection
     It is another method that implements identity check, the specification is a 3rd party abstract layer on many authentication protocol including oAuth, JWT etc. This is an implementation, and Microsoft implements this specification in AspNetCore

## Claim based authorization
  Claim based authorization is optional for Authencation, but ASP.NET identity and Open ID both implements, with this, you could add any authorization policy other than user name and password and even from a third party. And you could imply security into as little element as a function.
