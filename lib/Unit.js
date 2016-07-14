/*점점 다가오는 적군*/
var Unit=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.src=src;
	this.velX=0;//x축으로 다가올 거리(속도)
	this.velY=0;//y축으로 다가올 거리(속도)
	this.st;
	this.deg=0;
	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
	//	this.img.style.rotation=this.deg+"deg";
		this.stage.appendChild(this.img);

		this.move();
	}

	this.move=function(){
		var me=this;

	//	this.deg+=30;
	//	this.img.style.rotation+=this.deg+"deg";
	//	console.log("각도"+this.img.style.rotation);

		this.velX=-parseInt(Math.random()*2);
		var a=1;
		if(parseInt(Math.random()*2)<1){
		a*=-1;
		}
	//	this.velY=a*parseInt(Math.random()*30);
		//x,y축 설정
		this.x+=this.velX;
		this.y+=this.velY;

		//움직임 설정
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.st=setTimeout(function(){
			me.move();
		},100);

		//멈추는 조건은 아래로..
		//clearTimeout(st);
	}
}