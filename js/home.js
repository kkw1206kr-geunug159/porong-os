
let ifCtrlPanOpened=0;

function sleep(sec) {
    let start = Date.now(), now = start;
    while (now - start < sec * 1000) {
        now = Date.now();
    }
}

function closeCtrlPanAnim(){
	document.getElementById("controlCenter").style.animationName="closeCtrlPan";
}

function ctrlPan(){
	if(ifCtrlPanOpened==1){
		setTimeout(closeCtrlPanAnim,500)
		document.getElementById("controlCenter").style.display="none";
		ifCtrlPanOpened=0;
	}
	else{
		document.getElementById("controlCenter").style.display="block";
		document.getElementById("controlCenter").style.animationName="openCtrlPan";
		ifCtrlPanOpened=1;
	}
}
