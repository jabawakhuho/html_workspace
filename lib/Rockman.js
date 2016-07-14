var Rockman=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.div;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;
	this.velX=0;//x축의 방향으로 얼만큼 움직일지 정도를 표현하는 변수
	this.velY=2;//y축의 방향으로 얼만큼 움직일지 정도를 표현하는 변수
	this.gravity=0.1;//중력을 표현하는 변수!!!
	this.falling=true;//주인공이 떨어지고 있음을 알 수 있는 변수
	this.jumping=true;//주인공이 점프중임을 알수있는 변수
	this.speedCount=0;//키보드 인식이 너무 빠르면 안되므로, ActionCount의 증가 시점을 늦출 변수!
	this.running=false;//키보드 누를때만 true로 처리

	this.init=function(){
		this.div=document.createElement("div");
		this.img=document.createElement("img");
		this.img.src=this.src;
	

		this.div.style.overflow="hidden";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";

		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		
		//숨겨진 이미지의 좌표 처리
		this.img.style.position="relative";
		//this.img.style.top=-77+"px";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		//이미지를 Div에 탑재
		this.div.appendChild(this.img);

		//div를 stage에 탑재
		this.stage.appendChild(this.div);
		
		this.move();
		//this.action();
	}

	//동작을 표현하는 메서드
	//method 호출자는 경로를 매개변수로 넘기면 됨!!
	this.action=function(Arr){
		var me= this;

		if(this.running){//키보드 누를때만 수행
			this.speedCount++;

			if(this.speedCount%5==0){
				actionCount++;
				if(actionCount>Arr.length-1){
					actionCount=1;
				}
			}else{
				this.img.src=Arr[0];
			}
			this.img.src=Arr[actionCount];;
		}

		setTimeout(function(){
			me.action();
		},10);
	}

	this.move=function(){
		var me=this;
		
		//중력 데이터를 velY에 누적해보자!!
		this.velY+=this.gravity;

		//
		if(this.velY>0){
			this.jumping=false;
			this.falling=true;
		}

		//블럭들과 마주쳤는지 체크
		for(var i=0; i<blockArr.length; i++){
			var result=hitTest(this.div,blockArr[i].img);
			if(result&&this.falling){
		//		this.y=parseInt(blockArr[i].img.style.top)-(this.height);
				this.velY=0;
				this.falling=false;
			}
		}
		

		//X축 이동
		if(this.x >0){
			this.x+=this.velX;
		}else{
			this.x=1;
		}

		//console.log(this.velY);
		this.y+=this.velY;

		this.div.style.top=this.y+"px";
		this.div.style.left=this.x+"px";

		//stage밖으로 나갈시 케릭 삭제 및 게임 종료
		if(this.y > parseInt(this.stage.style.height)){
			this.stage.removeChild(this.div);
			clearTimeout(me.move);
			alert("game over");
			return;
		}

		//전역 변수인 actionCount를 여기서 증가시키자!!
		//speedCount를 이용해서

		
		setTimeout(function(){
			me.move();
		},10);
	
	}



}