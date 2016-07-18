var DateBox = function(stage,width,height,text){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.text=text;
	var me=this;
	this.txt;
	this.bt;
	this.title;//날짜를 담을 div
	this.content;//입력 폼과 내용을 담을 div
	this.tr=true;

	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border="1px solid blue";
		this.div.style.float="left";

		
		this.title=document.createElement("div");
		this.title.style.width=100+"%";
		this.title.style.height=20+"px";
		this.title.innerText=this.text;
		this.div.appendChild(this.title);//날짜 부착

		this.content=document.createElement("div");
		this.content.style.width=100+"%";
		this.content.style.height=75+"px";
		this.content.style.overflow="scroll";
		this.content.style.fontSize="9pt";
		this.div.appendChild(this.content);//날짜 부착

		this.stage.appendChild(this.div);


		//div에 대한 이벤트 처리
		this.title.addEventListener("click",function(){

			if(me.tr){
				me.createForm();
			}
			console.log(me.tr);
		});


	}
	

	//클릭시 textarea와 Button 등장시키지
	this.createForm=function(){
		this.txt=document.createElement("textarea");
		this.txt.style.width=95+"%";
		this.txt.style.height=45+"px";
		this.txt.style.background="yellow";

		
		this.bt=document.createElement("input");
		this.bt.type="button";
		this.bt.value="save";

		this.bt.addEventListener("click",function(){
			me.showContent();
		});
		
		this.content.appendChild(this.txt);
		this.content.appendChild(this.bt);
		
		//console.log(this.bt);
		this.tr=false;
	}
	
	//컨텐츠 출력
	this.showContent=function(){
			//textarea의 값 얻기~
			var str=this.txt.value;
			//
			this.content.removeChild(this.txt);
			this.content.removeChild(this.bt);

			this.content.innerText+=str;

			//console.log(this.txt);
			this.tr=true;
	}
}