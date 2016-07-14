//불꽃을 정의한다.
/*
 a: 어떤 div에 붙은지
 w: 가로크기
 h: 세로 크기
 posX: 초기 x좌표 위치
 posY: 초기 y좌표 위치

*/
var Flame=function(a,w,h,posX,posY){
	/*
	현실의 모든 사물은 객체지향언어에서 클래스로 표현되고,
	해당 사물이 보유한 상태는 변수인 속성으로 표현하며,
	해당 사물이 보유한 동작은 함수인 메서드로 표현한다.
	
	하지만 , 변수와 함수가 객체의 소유가 될때에는 명칭이 바뀐다.
	변수: 객체가 보유한 상태를 표현한다고 해서 속성(property)
	함수:	객체가 보유한 동작방식을 표현한다고 해서 메서드(method)
	*/
	/*가로 세로 크기 위치*/
	this.width=w;
	this.height=h;
	this.x=posX;//left
	this.y=posY;//top
	this.img;
	this.arr=new Array();
	this.area=a;
	this.count=0; //이미지의 Index

	//이 객체가 태어날때(메모리에 기제)하고 싶은 초기작업에 사용될 메서드 정의
	this.init=function(){
		this.img=document.createElement("img");
		this.arr[0]="../images/flame/flame1.png";
		this.arr[1]="../images/flame/flame2.png";
		this.arr[2]="../images/flame/flame3.png";
		this.arr[3]="../images/flame/flame4.png";
		
		this.img.src=this.arr[this.count];
		//이미지의 가로 세로 크기
		this.img.style.width=this.width+"px";
		this.img.style.heigth=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
		//호출자가 결정하는 영역에 붙일거임!!!!
		this.area.appendChild(this.img);

		this.move();
	}
	//불꽃 위치 설정
	this.pos=function(x,y){
		this.x=x;
		this.y=y;
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
	}
	//동작 방식 정의
	this.move=function(){
		var me=this;
		//console.log("i="+this.count);
		//이미지를 계속 교체해서 보여줌
		//src값을 변경!!
		this.count++;
		if(this.count>=this.arr.length){
			this.count=0;
		}
		this.img.src=this.arr[this.count];

		setTimeout(function(){
			me.move();
		},50);
	}
}
