
let ifCtrlPanOpened=0;

function sleep(sec) {
    let start = Date.now(), now = start;
    while (now - start < sec * 1000) {
        now = Date.now();
    }
}

const openingElement=[
	{transform:"scale(0)"},
	{transform:"scale(1)"},
];
const closingElement=[
	{transform:"scale(1)"},
	{transform:"scale(0)"},
];
const animationDuration={
	duration:250,
	iteration:1,
};

function windowMenu{
	const winMenu=document.getElementByClassName("windowControlBox");
}
