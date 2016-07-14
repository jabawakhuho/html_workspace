var Maze =function(stage,width,height,x,y){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.div;
	

	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.div.style.border="1px solid black";
	
		this.stage.appendChild(this.div);
		
		//나인 사각형을 클릭하면, this.div의 배경색을 바꾸자
		var me=this;
		var flag =false;
		this.div.addEventListener("click",function(){
			if(flag=!flag){
				me.div.style.background="red";
			}else{
				me.div.style.background="";
			}
		});

		this.move();
	}

	this.move=function(){
		
	}

}