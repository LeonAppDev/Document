# Website Responsive
## Boostrap
 Boostrap's main idea is using CSS and set different class to tag according to CSS @media attribute
 1. Add a meta into head
 Need to add a meta with name viewport to head first,
 ```html
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
 ```
 2. A good emulator on desktop
 Always need a good emulator, I used to work on Chrome utilize its toggle device toolbar, later found it not accurate. It seems firefox is better in this area. Edge doesn't not support any device mode. Chrome also has a extension named 'mobile browser emulator', it is better than default supported function.

 3. Bootstrap use Vanillia and Jquery as base technology
  When creating some dynamic effect, such as responsive menu, we need to use bootstrap.min.js, and its dependency is Jquery.
  For ableowl.net as example, when it is full screen, it use a nav list to show all the menu item, and when it goes to mobile, it use a button, and add or remove some attribute to implement responsive

  4. align and vertical-align
  vertical-align adjust vertical position of element inside

## Aria
   Mean Accessible rich internet application, which could be used to make web content more accessible to people with disabilities.
   1. attribute
   all begin with aria, link with -.

   2. attribute list
   for example, aria-hidden, Indicates that the element and all of its descendants are not visible or perceivable to any user as implemented by the author. Must notice invisible and not perceivable are two different meanings.
