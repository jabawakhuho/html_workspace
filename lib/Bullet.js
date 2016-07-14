/*
	아래의 코드는 지금 당장 사용할 총알 자체가 아닌, 
	장차 총알을 생성해낼 틀이다!!!!
	객체 메뉴얼
	stage	: 이 총알이 어떤 div에 붙을지를 결정하세요
	x :  이 총알이 어느 X좌표에서 부터 날아갈지 결정하는 변수
	y : 이 총알이 어느 y좌표에서 부터 날아갈지 결정하세요

*/
var Bullet=function(stage,x,y){
	//객체의 특징에 대한 값을 담고 있다고 하여 속성이라 한다.
	//property라 표기한다.
	this.stage=stage;
	this.span;
	this.x=x;
	this.y=y;
	this.st;//setTimeout을 가리키기 위한 변수
	this.velX=10;//몇 픽셀씩 욺직일지 정함..

	//객체 안에 들어있는 함수는 (method)메서드라 한다!!!!
	//method(방법):객체의 동작 방식을 결정하는 로직이 들어있기 떄문에....
	this.init=function(){
		this.span=document.createElement("span");
		this.span.innerText="●";
		this.span.style.color="red";
		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";

		this.span.style.width=10+"px";
		this.span.style.height=10+"px";
		stage.appendChild(this.span);

		this.move();
	}

	this.hitTest=function(){
		//적군과 부딫치면....
		for(var i=0; i<enemyArray.length;i++){
			
			if(enemyArray[i] != undefined){//배열에 존제하는 img에 대해서만 ..즉 undefined가 아니라면
				var result=hitTest(this.span,enemyArray[i].img);
				console.log(result);
				if(result){
					//총알 죽이고
					this.stage.removeChild(this.span);
					clearTimeout(this.st);

					//적군 죽이고
					this.stage.removeChild(enemyArray[i].img);
					clearTimeout(enemyArray[i].st);
					delete enemyArray[i];//배열에서 제거 (값이 undefined로 됨);
				}
			}
		}

	}

	this.move=function(){
		var me=this;
		this.x+=this.velX;
		this.span.style.left=this.x+"px";
		
		this.st=setTimeout(function(){
			me.move();
		},10);
		
		
		this.hitTest();
		//전군과 부딫치지 않고 화면밖으로 나가면
		//stage를 벗어나면 총알의 setTimeout 멈춰야함
	//	console.log(parseInt(this.stage.style.width));
		if(parseInt(this.span.style.left)>parseInt(this.stage.style.width)){
				//console.log("자살");
				//setTimeout을 멈추고, 화면에서 지우고!!
				this.stage.removeChild(this.span);
				clearTimeout(this.st);
				return;
		}
	}

}