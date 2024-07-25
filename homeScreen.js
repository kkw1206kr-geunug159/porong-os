const wallpaper=document.getElementById("wallpaper");
const anchored=document.getElementById("empty");
var maxW=window.innerWidth;
var maxH=window.innerHeight;
var DockIconsList=[];
var dockItemsLength=0;

document.body.onload=setWallpaper();setDock();

function setWallpaper(){
	wallpaper.style.backgroundColor="red";
	wallpaper.style.backgroundImage="url('./wallpaper.jpg')";
	wallpaper.style.backgroundRepeat="no-repeat";
	wallpaper.style.backgroundAttachment="fixed";
	wallpaper.style.backgroundPosition="center";
	wallpaper.style.backgroundSize="cover";
	for(let i=1;i<=15;i++){
		if(localstorage.getItem("dockItem"+i)==null){
			break;
		}
		dockItemsLength++;
		setDock(
	}
}

function setDock(...args){
	var dock=document.createElement("div");
	//var newContent = document.createTextNode("환영합니다!");
	var dockWidth=args.length*60+(args.length+1)*10;
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
	dock.style.padding="0px";
	dock.style.left=maxW/2-dockWidth/2+'px';
	for(let i=1;i<=dockItemsLength;i++){
		addIconsInDock(localstorage.getItem("dockItem"+i));
	}
}

function addIconsInDock(...args){
	const dock=document.getElementById("dockPanel");
	var iconToAppend=document.createElement("button");
	iconToAppend.id="dockIcon"+args[0];
	iconToAppend.style.backgroundImage="url('./'"+"'files'"+"'.png')";
	iconToAppend.style.width="60px";
	iconToAppend.style.height="60px";
	iconToAppend.style.borderWidth="0px";
	iconToAppend.style.backgroundColor="#ffffff00";
	iconToAppend.style.backgroundSize="cover";
	iconToAppend.style.borderRadius="15px";
	iconToAppend.style.position="relative";
	iconToAppend.style.top="10px";
	iconToAppend.style.left="10px";
	dock.append(iconToAppend);
}
