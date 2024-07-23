export WORKING=~/porong-os

alias d="clear;cd $WORKING;tree"

alias home-html="vim $WORKING/homescreen.html"
alias home-css="vim $WORKING/css/home.css"
alias sysui-css="vim $WORKING/css/systemUI.css"
alias concenter-css="vim $WORKING/css/controlCenter.css"
alias home-js="vim $WORKING/js/home.js"

alias run="i3 & firefox --kiosk ~/porong-os/homescreen.html &"

alias pull="cd $WORKING;git pull"
alias push="cd $WORKING;git add .;git commit -m 'auto';git push"
