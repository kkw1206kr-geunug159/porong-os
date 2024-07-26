Window create_simple_window(Display* display,int width,int height,int x,int y,int win_border_width){
	int screen_num=DefaultScreen(display);
	Window win;
	win=XCreateSimpleWindow(display,RootWindow(display,screen_num),x,y,width,height,win_border_width,BlackPixel(display,screen_num),WhitePixel(display,screen_num));
	XMapWindow(display,win);
	XFlush(display);
	return win;
}
GC create_gc(Display* display,Window win,int reverse_video,unsigned int line_width,int line_style,int cap_style,int join_style,unsigned long foreground,unsigned long background){
	GC gc;
	unsigned long valuemask=0;
	XGCValues values;
	int screen_num=DefaultScreen(display);
	gc=XCreateGC(display,win,valuemask,&values);
	XSetForeground(display,gc,foreground);
	XSetBackground(display,gc,background);
	XSetLineAttributes(display,gc,line_width,line_style,cap_style,join_style);
	XSetFillStyle(display,gc,FillSolid);
	return gc;
}
