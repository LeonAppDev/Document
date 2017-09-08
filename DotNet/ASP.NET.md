# ASP.NET
## Name conventions
  .net platform, all class, namespace and function use Pascal writing.
## ASP.NET MVC
  1. ASP.NET MVC is a open source framework used by asp.net to implement MVC model
  2. It begins from MVC2 to MVC6 and the move to core mvc1.x and 2.x


## ASP.NET membership system
   * Evolution
    First membership system, then simple membership system and finally universival provider.
    The reason why developing new authentication is User want to use identity not only provided by the  website but also from other social networks, the key is 3rd party identity could also be provided  and unit test need to be introduced in identity system as well
    * identity
      Namespace is Microsoft.AspNet.Identity
      1. IRole
## Investigate larkyo webapi
   1. Microsoft.AspNet.Identity
## Investigate eShopOnContainer

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
