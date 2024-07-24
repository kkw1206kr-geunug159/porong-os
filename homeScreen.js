const wallpaper=document.getElementById("wallpaper");
const anchored=document.getElementById("empty");
var maxW=window.innerWidth;
var maxH=window.innerHeight;
var DockIconsList=[];

document.body.onload=setWallpaper();setDock();

function setWallpaper(){
	wallpaper.style.backgroundColor="red";
	wallpaper.style.backgroundImage="url('./wallpaper.jpg')";
	wallpaper.style.backgroundRepeat="no-repeat";
	wallpaper.style.backgroundAttachment="fixed";
	wallpaper.style.backgroundPosition="center";
	wallpaper.style.backgroundSize="cover";
}

function setDock(...args){
	var dock=document.createElement("div");
	//var newContent = document.createTextNode("환영합니다!");
	var dockWidth=args.length*60+(args.length+1)*20;
	dock.id="dockPanel";
	//dock.appendChild(newContent);
	document.body.insertBefore(dock,anchored);
	dock.style.backgroundColor="#ffffff66";
	dock.style.backdropFilter="blur(50px)";
	dock.style.height="80px";
	dock.style.position="absolute";
	dock.style.bottom="10px";
	dock.style.borderRadius="25px";
	dock.style.width=dockWidth+"px";
	dock.style.left=maxW/2-dockWidth/2+'px';
	addIconsInDock('01');
}

function addIconsInDock(...args){
	const dock=document.getElementById("dockPanel");
	var iconToAppend=document.createElement("button");
	iconToAppend.id="dockIcon"+args[0];
	iconToAppend.innerHTML="test"
	dock.append(iconToAppend);
}
