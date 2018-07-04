# Structure
1. A theme must contain style.css, and if it is a child theme, must inculde Template as its parent theme at beginning.
Must understand one thing, wordpress will not load style.css on page automatically, you need to add it manually. So for the theme you created, no a must to include style in style.css
2. functions.php is another inportant component for a theme, remember it should be called as functions.php, not function.php
3. wp_enqueue_style and wp_enqueue_script the first parameter is mandatory, but if you specify the third parameter, you must also specify the second parameter
4. Short sample code for google photo [embed width="80" height="80" align="alignleft" type="png" caption="alcatel"]https://photos.app.goo.gl/kAChPnq6ndqfk5RGA[/embed]
5. A silver bullet to solve issue that your forms do not send out message, install a SMTP plugin yourself.
6. Sendgrid and mailchimp are the good choice to use in sending your mail
7. Ninja form has some issue, use contact form 7 instead
8. I use forty as my own theme, I think it could be divided into 6 different parts, the first part is my self introduction, the second part is my skill list, the third part employment history and education history.the fourth part is project history, the fifth part is interest, the last part could be gallery
9. CSS's feature make the combination of two website quite hard
