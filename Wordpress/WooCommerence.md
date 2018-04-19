# Modify default woo-commerence template
## Modify product page
   1. Add security code
      In wordpress, when people access index.php, will create ASBPATH variable, in order to avoid direct access to some page(especially for each has side effect), could add a logic on top of a php file
      ```php
      <?php
       if(! defined('ABSPATH'))
       {
         exit; //Exit if accessed directly
       }
       ?>
      ```
    2. Global variable
      In php, variable scope is different with C, C# and javascript, when you define a variable, and use the same name in a wrapped scope, the variable value outside will not cover the variable value inside. You need to declare implicitly with global and then every reference to this variable will go to global variable.
    3. Php native functions
       ob_start(), ob_end_flush(), ob_end_clean(), ob_get_contents(), ob_get_flush(), ob_get_clean(),ob_clean(), ob_flush(),  

    4. Several ways to modify woo-commerce template
       There are 3 ways to modify a woo-commerce template, the first one to copy woo-commerce template to your theme and modify it, the second one is modify the template file directly and the last one is using actions and filters. The best way is to use the third one. Actually, this implies to every modification try to make in WordPress, add things instead of modifying existed files unless you are quite sure about what you are doing. WordPress is updated frequently, so any changes make to existed files may be overridden.
    5. Translation function
       ```php
       __(string $text,string $domain=''default)
       ```
       In wordpress this is used to get translate of current text, you set the original text,and if there is tranlsation in default or domain you set, then will load the tranlsation otherwise load original text.
     6. Hooks
        Hooks are one of two key principles when customizing your wordpress website. You need to figure out where to use add_filter, remove_filter, add_action(), remove_action, do_action and apply_filter.
        Action hooks allow you to insert custom code at various points and filter hooks allow you to manipulate and return a variable which is passes.
      7. Find location of a content in wordpress
         To locate a component first take a look at plugin or theme folder which has relation with this component, if could not find out, then use find in project to find class name, could try several different layers of class since sometimes class name is not hard coded
       8. Custome product type
       9. Multi-Language
          esc_html__() is a function wordpress use to make translate easier and more efficient, it accepts a default string which will output when no translatation found and a domain in which you could create a translation for all words print with esc_html__()
      10. How to add a custom data tab and panel and add the data to the sysyem
           [Add custome data tab in WooCommerce product](https://www.proy.info/woocommerce-admin-custom-product-data-tab/)
## Add optional data to product

For Now I plan to add a optional data to product page, need to allow customer add customer data on the background and rearrange layout on he front end
Here I use some plugins and article as a Reference
https://wordpress.org/plugins/search-by-sku-for-woocommerce/
https://dsgnwrks.pro/snippets/woocommerce-allow-adding-multiple-products-to-the-cart-via-the-add-to-cart-query-string/
 Woo Product Bundles
and Advanced Woo Search
