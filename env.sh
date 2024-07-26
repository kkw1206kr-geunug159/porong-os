export WORKING=~/porong-os

alias d="clear;cd $WORKING;tree"

alias edit="vim $WORKING/homeScreen.js"

alias run="i3 & firefox --kiosk ~/porong-os/screen.html &"

alias pull="cd $WORKING;git pull"
alias push="cd $WORKING;git add .;git commit -m 'auto';git push"
