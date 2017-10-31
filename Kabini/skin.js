// Garden Gnome Software - Skin
// Pano2VR pro 4.5.3/10717
// Filename: 2011_1 wo logo.ggsk
// Generated Tue Jul 21 21:17:31 2015

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/left__o.png';
		preLoadImg.src=basePath + 'images/left__a.png';
		preLoadImg.src=basePath + 'images/right__o.png';
		preLoadImg.src=basePath + 'images/right__a.png';
		preLoadImg.src=basePath + 'images/up__o.png';
		preLoadImg.src=basePath + 'images/up__a.png';
		preLoadImg.src=basePath + 'images/down__o.png';
		preLoadImg.src=basePath + 'images/down__a.png';
		preLoadImg.src=basePath + 'images/zoom_in__o.png';
		preLoadImg.src=basePath + 'images/zoom_in__a.png';
		preLoadImg.src=basePath + 'images/zoom_out__o.png';
		preLoadImg.src=basePath + 'images/zoom_out__a.png';
		preLoadImg.src=basePath + 'images/auto_rotate__o.png';
		preLoadImg.src=basePath + 'images/auto_rotate__a.png';
		preLoadImg.src=basePath + 'images/fullscreen__o.png';
		preLoadImg.src=basePath + 'images/fullscreen__a.png';
	}
	
	this.addSkin=function() {
		this._loading_bar=document.createElement('div');
		this._loading_bar.ggId="loading bar";
		this._loading_bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_bar.ggVisible=true;
		this._loading_bar.className='ggskin ggskin_rectangle';
		this._loading_bar.ggType='rectangle';
		this._loading_bar.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-90 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(3 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -90px;';
		hs+='top:  3px;';
		hs+='width: 198px;';
		hs+='height: 10px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		hs+='background: #c8c8c8;';
		hs+='border: 2px solid #c8c8c8;';
		this._loading_bar.setAttribute('style',hs);
		this._loading_text=document.createElement('div');
		this._loading_text__text=document.createElement('div');
		this._loading_text.className='ggskin ggskin_textdiv';
		this._loading_text.ggTextDiv=this._loading_text__text;
		this._loading_text.ggId="loading text";
		this._loading_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_text.ggVisible=true;
		this._loading_text.className='ggskin ggskin_text';
		this._loading_text.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -29px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #808080;';
		hs+='color: #c8c8c8;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loading_text__text.setAttribute('style',hs);
		this._loading_text.ggUpdateText=function() {
			var hs="<b>Hang on a sec... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._loading_text.ggUpdateText();
		this._loading_text.appendChild(this._loading_text__text);
		this._loading_bar.appendChild(this._loading_text);
		this.divSkin.appendChild(this._loading_bar);
		this._toolbar=document.createElement('div');
		this._toolbar.ggId="toolbar";
		this._toolbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toolbar.ggVisible=true;
		this._toolbar.className='ggskin ggskin_container';
		this._toolbar.ggType='container';
		this._toolbar.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-153 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-57 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -153px;';
		hs+='top:  -57px;';
		hs+='width: 328px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		this._toolbar.setAttribute('style',hs);
		this._left=document.createElement('div');
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_button';
		this._left.ggType='button';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_button';
		this._left__img.setAttribute('src',basePath + 'images/left.png');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._left__img.className='ggskin ggskin_button';
		this._left__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._left__img);
		this._left.appendChild(this._left__img);
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'images/left__o.png';
			me._left.ggIsOver=true;
			me.elementMouseOver['left']=true;
		}
		this._left.onmouseout=function () {
			me._left.style[domTransition]='none';
			me._left.style.opacity='1';
			me._left.style.visibility=me._left.ggVisible?'inherit':'hidden';
			me._left__img.src=basePath + 'images/left.png';
			me._left.ggIsOver=false;
			me.elementMouseDown['left']=false;
			me.elementMouseOver['left']=false;
		}
		this._left.onmousedown=function () {
			me._left__img.src=basePath + 'images/left__a.png';
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			if (me._left.ggIsOver) {
				me._left__img.src=basePath + 'images/left__o.png';
			} else {
				me._left__img.src=basePath + 'images/left.png';
			}
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
			me.elementMouseOver['left']=false;
		}
		this._toolbar.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_button';
		this._right.ggType='button';
		hs ='position:absolute;';
		hs+='left: 40px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_button';
		this._right__img.setAttribute('src',basePath + 'images/right.png');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._right__img.className='ggskin ggskin_button';
		this._right__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._right__img);
		this._right.appendChild(this._right__img);
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'images/right__o.png';
			me._right.ggIsOver=true;
			me.elementMouseOver['right']=true;
		}
		this._right.onmouseout=function () {
			me._right.style[domTransition]='none';
			me._right.style.opacity='1';
			me._right.style.visibility=me._right.ggVisible?'inherit':'hidden';
			me._right__img.src=basePath + 'images/right.png';
			me._right.ggIsOver=false;
			me.elementMouseDown['right']=false;
			me.elementMouseOver['right']=false;
		}
		this._right.onmousedown=function () {
			me._right__img.src=basePath + 'images/right__a.png';
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			if (me._right.ggIsOver) {
				me._right__img.src=basePath + 'images/right__o.png';
			} else {
				me._right__img.src=basePath + 'images/right.png';
			}
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
			me.elementMouseOver['right']=false;
		}
		this._toolbar.appendChild(this._right);
		this._up=document.createElement('div');
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_button';
		this._up.ggType='button';
		hs ='position:absolute;';
		hs+='left: 80px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_button';
		this._up__img.setAttribute('src',basePath + 'images/up.png');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._up__img.className='ggskin ggskin_button';
		this._up__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up__img);
		this._up.appendChild(this._up__img);
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'images/up__o.png';
			me._up.ggIsOver=true;
			me.elementMouseOver['up']=true;
		}
		this._up.onmouseout=function () {
			me._up.style[domTransition]='none';
			me._up.style.opacity='1';
			me._up.style.visibility=me._up.ggVisible?'inherit':'hidden';
			me._up__img.src=basePath + 'images/up.png';
			me._up.ggIsOver=false;
			me.elementMouseDown['up']=false;
			me.elementMouseOver['up']=false;
		}
		this._up.onmousedown=function () {
			me._up__img.src=basePath + 'images/up__a.png';
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			if (me._up.ggIsOver) {
				me._up__img.src=basePath + 'images/up__o.png';
			} else {
				me._up__img.src=basePath + 'images/up.png';
			}
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
			me.elementMouseOver['up']=false;
		}
		this._toolbar.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_button';
		this._down.ggType='button';
		hs ='position:absolute;';
		hs+='left: 120px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_button';
		this._down__img.setAttribute('src',basePath + 'images/down.png');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._down__img.className='ggskin ggskin_button';
		this._down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._down__img);
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'images/down__o.png';
			me._down.ggIsOver=true;
			me.elementMouseOver['down']=true;
		}
		this._down.onmouseout=function () {
			me._down.style[domTransition]='none';
			me._down.style.opacity='1';
			me._down.style.visibility=me._down.ggVisible?'inherit':'hidden';
			me._down__img.src=basePath + 'images/down.png';
			me._down.ggIsOver=false;
			me.elementMouseDown['down']=false;
			me.elementMouseOver['down']=false;
		}
		this._down.onmousedown=function () {
			me._down__img.src=basePath + 'images/down__a.png';
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			if (me._down.ggIsOver) {
				me._down__img.src=basePath + 'images/down__o.png';
			} else {
				me._down__img.src=basePath + 'images/down.png';
			}
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
			me.elementMouseOver['down']=false;
		}
		this._toolbar.appendChild(this._down);
		this._zoom_in=document.createElement('div');
		this._zoom_in.ggId="zoom in";
		this._zoom_in.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_in.ggVisible=true;
		this._zoom_in.className='ggskin ggskin_button';
		this._zoom_in.ggType='button';
		hs ='position:absolute;';
		hs+='left: 160px;';
		hs+='top:  0px;';
		hs+='width: 44px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoom_in.setAttribute('style',hs);
		this._zoom_in__img=document.createElement('img');
		this._zoom_in__img.className='ggskin ggskin_button';
		this._zoom_in__img.setAttribute('src',basePath + 'images/zoom_in.png');
		this._zoom_in__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._zoom_in__img.className='ggskin ggskin_button';
		this._zoom_in__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoom_in__img);
		this._zoom_in.appendChild(this._zoom_in__img);
		this._zoom_in.onmouseover=function () {
			me._zoom_in__img.src=basePath + 'images/zoom_in__o.png';
			me._zoom_in.ggIsOver=true;
			me.elementMouseOver['zoom_in']=true;
		}
		this._zoom_in.onmouseout=function () {
			me._zoom_in.style[domTransition]='none';
			me._zoom_in.style.opacity='1';
			me._zoom_in.style.visibility=me._zoom_in.ggVisible?'inherit':'hidden';
			me._zoom_in__img.src=basePath + 'images/zoom_in.png';
			me._zoom_in.ggIsOver=false;
			me.elementMouseDown['zoom_in']=false;
			me.elementMouseOver['zoom_in']=false;
		}
		this._zoom_in.onmousedown=function () {
			me._zoom_in__img.src=basePath + 'images/zoom_in__a.png';
			me.elementMouseDown['zoom_in']=true;
		}
		this._zoom_in.onmouseup=function () {
			if (me._zoom_in.ggIsOver) {
				me._zoom_in__img.src=basePath + 'images/zoom_in__o.png';
			} else {
				me._zoom_in__img.src=basePath + 'images/zoom_in.png';
			}
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.ontouchend=function () {
			me.elementMouseDown['zoom_in']=false;
			me.elementMouseOver['zoom_in']=false;
		}
		this._toolbar.appendChild(this._zoom_in);
		this._zoom_out=document.createElement('div');
		this._zoom_out.ggId="zoom out";
		this._zoom_out.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_out.ggVisible=true;
		this._zoom_out.className='ggskin ggskin_button';
		this._zoom_out.ggType='button';
		hs ='position:absolute;';
		hs+='left: 204px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoom_out.setAttribute('style',hs);
		this._zoom_out__img=document.createElement('img');
		this._zoom_out__img.className='ggskin ggskin_button';
		this._zoom_out__img.setAttribute('src',basePath + 'images/zoom_out.png');
		this._zoom_out__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._zoom_out__img.className='ggskin ggskin_button';
		this._zoom_out__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoom_out__img);
		this._zoom_out.appendChild(this._zoom_out__img);
		this._zoom_out.onmouseover=function () {
			me._zoom_out__img.src=basePath + 'images/zoom_out__o.png';
			me._zoom_out.ggIsOver=true;
			me.elementMouseOver['zoom_out']=true;
		}
		this._zoom_out.onmouseout=function () {
			me._zoom_out.style[domTransition]='none';
			me._zoom_out.style.opacity='1';
			me._zoom_out.style.visibility=me._zoom_out.ggVisible?'inherit':'hidden';
			me._zoom_out__img.src=basePath + 'images/zoom_out.png';
			me._zoom_out.ggIsOver=false;
			me.elementMouseDown['zoom_out']=false;
			me.elementMouseOver['zoom_out']=false;
		}
		this._zoom_out.onmousedown=function () {
			me._zoom_out__img.src=basePath + 'images/zoom_out__a.png';
			me.elementMouseDown['zoom_out']=true;
		}
		this._zoom_out.onmouseup=function () {
			if (me._zoom_out.ggIsOver) {
				me._zoom_out__img.src=basePath + 'images/zoom_out__o.png';
			} else {
				me._zoom_out__img.src=basePath + 'images/zoom_out.png';
			}
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ontouchend=function () {
			me.elementMouseDown['zoom_out']=false;
			me.elementMouseOver['zoom_out']=false;
		}
		this._toolbar.appendChild(this._zoom_out);
		this._auto_rotate=document.createElement('div');
		this._auto_rotate.ggId="auto rotate";
		this._auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._auto_rotate.ggVisible=true;
		this._auto_rotate.className='ggskin ggskin_button';
		this._auto_rotate.ggType='button';
		hs ='position:absolute;';
		hs+='left: 244px;';
		hs+='top:  0px;';
		hs+='width: 44px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._auto_rotate.setAttribute('style',hs);
		this._auto_rotate__img=document.createElement('img');
		this._auto_rotate__img.className='ggskin ggskin_button';
		this._auto_rotate__img.setAttribute('src',basePath + 'images/auto_rotate.png');
		this._auto_rotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._auto_rotate__img.className='ggskin ggskin_button';
		this._auto_rotate__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._auto_rotate__img);
		this._auto_rotate.appendChild(this._auto_rotate__img);
		this._auto_rotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._auto_rotate.onmouseover=function () {
			me._auto_rotate__img.src=basePath + 'images/auto_rotate__o.png';
			me._auto_rotate.ggIsOver=true;
			me.elementMouseOver['auto_rotate']=true;
		}
		this._auto_rotate.onmouseout=function () {
			me._auto_rotate.style[domTransition]='none';
			me._auto_rotate.style.opacity='1';
			me._auto_rotate.style.visibility=me._auto_rotate.ggVisible?'inherit':'hidden';
			me._auto_rotate__img.src=basePath + 'images/auto_rotate.png';
			me._auto_rotate.ggIsOver=false;
			me.elementMouseOver['auto_rotate']=false;
		}
		this._auto_rotate.onmousedown=function () {
			me._auto_rotate__img.src=basePath + 'images/auto_rotate__a.png';
		}
		this._auto_rotate.onmouseup=function () {
			if (me._auto_rotate.ggIsOver) {
				me._auto_rotate__img.src=basePath + 'images/auto_rotate__o.png';
			} else {
				me._auto_rotate__img.src=basePath + 'images/auto_rotate.png';
			}
		}
		this._auto_rotate.ontouchend=function () {
			me.elementMouseOver['auto_rotate']=false;
		}
		this._toolbar.appendChild(this._auto_rotate);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_button';
		this._fullscreen.ggType='button';
		hs ='position:absolute;';
		hs+='left: 284px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_button';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.png');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._fullscreen__img.className='ggskin ggskin_button';
		this._fullscreen__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fullscreen__img);
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen__o.png';
			me._fullscreen.ggIsOver=true;
			me.elementMouseOver['fullscreen']=true;
		}
		this._fullscreen.onmouseout=function () {
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.opacity='1';
			me._fullscreen.style.visibility=me._fullscreen.ggVisible?'inherit':'hidden';
			me._fullscreen__img.src=basePath + 'images/fullscreen.png';
			me._fullscreen.ggIsOver=false;
			me.elementMouseOver['fullscreen']=false;
		}
		this._fullscreen.onmousedown=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen__a.png';
		}
		this._fullscreen.onmouseup=function () {
			if (me._fullscreen.ggIsOver) {
				me._fullscreen__img.src=basePath + 'images/fullscreen__o.png';
			} else {
				me._fullscreen__img.src=basePath + 'images/fullscreen.png';
			}
		}
		this._fullscreen.ontouchend=function () {
			me.elementMouseOver['fullscreen']=false;
		}
		this._toolbar.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._toolbar);
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading_bar.style[domTransition]='none';
			me._loading_bar.style.visibility='hidden';
			me._loading_bar.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		var hs='';
		if (me._loading_bar.ggParameter) {
			hs+=parameterToTransform(me._loading_bar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loading_bar.style[domTransform]=hs;
		this._loading_text.ggUpdateText();
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseOver['left']) {
			me._left.style[domTransition]='none';
			me._left.style.opacity='2';
			me._left.style.visibility=me._left.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseOver['right']) {
			me._right.style[domTransition]='none';
			me._right.style.opacity='2';
			me._right.style.visibility=me._right.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseOver['up']) {
			me._up.style[domTransition]='none';
			me._up.style.opacity='2';
			me._up.style.visibility=me._up.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseOver['down']) {
			me._down.style[domTransition]='none';
			me._down.style.opacity='2';
			me._down.style.visibility=me._down.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseDown['zoom_in']) {
			me.player.changeFovLog(-0.6,true);
		}
		if (me.elementMouseOver['zoom_in']) {
			me._zoom_in.style[domTransition]='none';
			me._zoom_in.style.opacity='2';
			me._zoom_in.style.visibility=me._zoom_in.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseDown['zoom_out']) {
			me.player.changeFovLog(0.6,true);
		}
		if (me.elementMouseOver['zoom_out']) {
			me._zoom_out.style[domTransition]='none';
			me._zoom_out.style.opacity='2';
			me._zoom_out.style.visibility=me._zoom_out.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['auto_rotate']) {
			me._auto_rotate.style[domTransition]='none';
			me._auto_rotate.style.opacity='2';
			me._auto_rotate.style.visibility=me._auto_rotate.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['fullscreen']) {
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.opacity='2';
			me._fullscreen.style.visibility=me._fullscreen.ggVisible?'inherit':'hidden';
		}
	};
	this.addSkin();
};