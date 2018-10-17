# Linux Command line
## issues
1. Recently when I use a new server and switch to an unkonw account, I could not use up arrow and other shortcut command.
That probably means that the new user account was created with /bin/sh as its login shell (which symlinks to the dash shell by default) instead of /bin/bash - you can change a user's login shell with the 'chsh' command

sudo chsh -s /bin/bash <username>
(you will need to log out and back in for the change to take effect). You may also need to copy the default .bashrc from /etc/skel to get the color prompt.

In future you might want to use the 'adduser' command instead of 'useradd' - it sets up a more complete user environment including things like a default .profile and .bashrc - as well as setting the login shell to 'bash'