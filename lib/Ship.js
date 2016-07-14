var Ship=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.velX=0;
	this.velY=0;
	this.src=src;
//	this.posX=0;//겹칠시 이동 X좌표
//	this.posY=0;//겹칠시 이동 Y좌표
	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
		
		this.stage.appendChild(this.img);

		this.move();
	}
	
	this.move=function(){
		var me=this;
		var limitX=parseInt(this.stage.style.width)-this.width;
		var limitY=parseInt(this.stage.style.height)-this.height;
		
		for(var i=0; i < mazeArray.length;i++){
			var result=hitTest(this.img,mazeArray[i].div);
			if(result&&mazeArray[i].div.style.background=="red"){
				console.log(this.velX);
				console.log(this.velY);	
				this.x-=this.velX*4;
				this.y-=this.velY*4;
				this.velX=0;
				this.vely=0;
			}

		}


		this.x=this.x+this.velX;
		this.y=this.y+this.velY;
		//console.log(this.x);

		if(this.x>0 && this.x <limitX){
			this.img.style.left=this.x+"px";
		}
		if(this.y>0 && this.y <limitY){
			this.img.style.top=this.y+"px";
		}

		setTimeout(function(){
			me.move();
		},5);
	}
}