#Identity structure
## User class
  It defines several kinds of different users. There is something behind the theme, since user should be used in identity and should also be considered a palyer in the app
  Respoonsities and service is the general database operation mapping to method.
## Questions
　　* Why writing logic mapping AspNetUsers twice, one in OnModelCreate using DbModelBuilder and the other one in ApplicationUserMapping derived from EntityTypeConfiguration  and use in DbModelBuilder.Configurations.Add

    * What is the usage of responsity, service and store, why do you need to use so many layers to build a service, what is the benefit.
    * Application User service and User service all manipulate ApplicationUser, what is the difference? ApplicationUserService is used to create user, create user profile
    * If I want to add a team, how should I do TeamDbContext
    * Why do we need to set all the property to virtual in LarkyoCore class. I think virtual is used for lazy loading, but lazy loading only needed for reference type. not    value type. value type in the class is also set as virtual
    * Why application user and UserProfile decalre themselves
    * How to initialize the controller
    * Why do we need to define a IdentityDbContext seperately
