var Fish=function(stage,width,height,x,y){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.targetX=0;//도달 위치
	this.targetY=0;//도달 위치
	this.a = 0.9; //남은 거리의 비율 계수
	this.velX=0;
	this.velY=0;

	this.init=function(){
		this.div=document.createElement("div");
		this.div.innerText="☆";
		this.div.style.fontSize=this.width+"px";
		this.div.style.fontWeight="bold";

		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";

		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";

		this.stage.appendChild(this.div);

		this.move();
	}

	this.move=function(){
		var me = this;
		var posX=parseInt(this.div.style.left);
		var posY=parseInt(this.div.style.top);

		this.div.style.left = this.targetX - this.a*(this.targetX-posX)+"px";  
		this.div.style.top = this.targetY - this.a*(this.targetY-posY)+"px"; 

		setTimeout(function(){
			me.move();
		},10);
	}

}