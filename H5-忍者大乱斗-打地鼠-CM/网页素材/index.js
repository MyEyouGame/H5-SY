    window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
			  window.webkitRequestAnimationFrame ||
			  window.mozRequestAnimationFrame    ||
			  function( callback ){
				window.setTimeout(callback, 1000 / 60);
			  };
	})();
 	
   (function() {
	     var lastTime = 0;
	     var vendors = ['webkit', 'moz'];
	     for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		     window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	     	 window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
									  window[vendors[x] + 'CancelRequestAnimationFrame'];
	     }

	    if (!window.requestAnimationFrame) {
		    window.requestAnimationFrame = function(callback, element) {
			     var currTime = new Date().getTime();
			     var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
			     var id = window.setTimeout(function() {
				     callback(currTime + timeToCall);
		       	 }, timeToCall);
			     lastTime = currTime + timeToCall;
			     return id;
		    };
	    }
	    
		if (!window.cancelAnimationFrame) {
		     window.cancelAnimationFrame = function(id) {
			     clearTimeout(id);
		     };
	    }
    }());
   
    var timeouts;
	function doTimer(length, resolution, oninstance, oncomplete){
		var steps = (length / 100) * (resolution / 10),
		speed = length / steps,
		count = 0,
		start = new Date().getTime();

		function instance(){
			if(count++ == steps){
				oncomplete(steps, count);
			}
			else{
				oninstance(steps, count);

				var diff = (new Date().getTime() - start) - (count * speed);
				window.setTimeout(instance, (speed - diff));
			}
		}
		timeouts = window.setTimeout(instance, speed);
	}
	
	function lp() {
			 mv = setTimeout(main, 500);
	    }
	
	function main(){
	
		document.getElementById("loader").style.display = "none";
		
		var container = document.getElementById('container');
		container.style.display = "block";
					
		var widthToHeight = 0 ;
		var newWidth = window.innerWidth;
		var newHeight = window.innerHeight;
		
		upAnimation();
		
		sizeData(newWidth,newHeight);
		resize(newWidth,newHeight);	
		
	} 

	var lyb = document.querySelector("#lyb");	
	
	var xClose = document.getElementById('closeX');
    xClose.onclick = function(){
		
		this.remove();
		djs(); 
		startGame();
		
		closeInfo.style.animation = "close 0.5s normal linear 1 forwards";
		closeInfo.style.webkitAnimation = "close 0.5s normal linear 1 forwards";
		 
		tut.style.display="none";
		
		info.style.animationPlayState = "running";
		info.style.webkitAnimationPlayState = "running";
		
		djs15.style.display = "none";
		
		bearOut1.style.display = "none";
		bearOut2.style.display = "none";
		bearOut3.style.display = "none";
		bearOut4.style.display = "none";
		bearOut5.style.display = "none";
		bearOut6.style.display = "none";
		bearOut7.style.display = "none";
		bearOut8.style.display = "none";
		bearOut9.style.display = "none";
		
		BearIn1Animation();
		BearIn2Animation();
		BearIn3Animation();
		BearIn4Animation();
		BearIn5Animation();
		BearIn6Animation();
		BearIn7Animation();
		BearIn8Animation();
		BearIn9Animation();
		
		DJSAnimation();
		
		// var ele=document.getElementById("container");
        // ele.onmousemove=function(){GetMouse(event);}
        // function GetMouse(oEvent,snum)
        // {
            // x=oEvent.clientX;
            // y=oEvent.clientY; 
			// document.getElementById('lyb').style.left = x +"px";
            // document.getElementById('lyb').style.top = y +"px";
            // var oEvent=oEvent||event;
        // }
	}	
			 
	var countDown = 15;
	//倒计时
    function djs(){
        countDown -= 1; 
		if(countDown == 0 ){  
           lose();
		   // win();
		   clearInterval(circle);
		   
        }  
		setTimeout("djs()",1080);  
    }
 	
    function startGame(){
		 
		var score = 0; 
	
	circle=setInterval(function(){	
		var arrPos = [
		                { top : "35.7%" , left : "5%"  },
		                { top : "35.7%" , left : "36%" },
		                { top : "35.7%" , left : "68%" },
		                { top : "52.7%" , left : "5%"  },
		                { top : "52.7%" , left : "36%" },
		                { top : "52.7%" , left : "68%" },
		                { top : "71.7%" , left : "1.0%"  },
		                { top : "71.7%" , left : "32.5%" },
		                { top : "71.7%" , left : "64.0%" }
		             ];
					 
	    
        //monster出来
	    var monsterArray = [
		                        'm0.png',
								'm1.png',
								'm2.png',
								'm3.png',
								'm4.png',
								'm5.png',
								'm6.png',
								'm7.png',
								'm8.png'
			           		];			 
	
	    //熊怪出来
	    var bearArray = [
		                	'b0.png',
							'b1.png',
							'b2.png',
							'b3.png',
							'b4.png',
							'b5.png',
							'b6.png',
							'b7.png'
							// 'b221.png',
							// 'b222.png',
							// 'b223.png',
							// 'b224.png',
							// 'b225.png',
							// 'b226.png'
		         		];
	
    var appearWolf=['b0.png','m0.png']	
	var newImg=document.createElement('img');
	container.appendChild(newImg);
	
	var wfLocation=rand(0,8);	// 熊的随机位置
	
	newImg.style.left=arrPos[wfLocation].left;
	newImg.style.top=arrPos[wfLocation].top;
	newImg.style.width = "15%";
	newImg.style.height = "36.5%";
	newImg.style.position='relative';
	
	var X=rand(0,2);		// 选择熊还是灯
	
	if (X<2){
		X='b';
	}else{
		X='m';
	}
	
	var y=7;
	newImg.style.display='block';
		
	    var appear0=setInterval(function(){
		    newImg.src= X+y+'.png';
		    y++;
			var indexs=0;
			
			newImg.onclick=function(){
			
     			indexs++;
				if (indexs>1) {
					return false;		// 鼠标只能点击1次 而不能无限点
				}
				
				y=8;
				
				for (var i=0;i<7;i++) {
					y++;
					newImg.src=bearArray[y];
					if(y>7){
						y--;
					}
				}
				
				if (X=='b') {
					s+=10; 
					
				}else if (X=='m'){
					s-=10;
					if (s<=0) {
						s=0;
					} 
				}
			}
			    if (y>5) {
				    clearInterval(appear0);
	                setTimeout(function(){
				        y=5;
			            var appear1=setInterval(function(){
				        newImg.src= X+y+'.png';
				        console.log(y);
				        y--;
					        if (y<0) {
						        clearInterval(appear1); 
						        newImg.remove();
					        }
				        },100)
			        },stay)
			    }
		    },100);
			
	 
			
        },secs) 
		 
		
	
	}
	 
	 
	 
	function rand(min,max){
	    return Math.round(Math.random()*(max-min)+min);
    }
	 
	 var secs=rand(1200,1500);
     var stay=rand(150,250);
	 

    function random(){
	         rand = parseInt(Math.random() * 9)//出来的位置
             rand1 = parseInt(Math.random() * 3)//出来的是熊怪/灯笼怪
	}
       
    hole.addEventListener('mousedown', hit);
	   
	var hitToggle = 0;
	function hit() {
		if (hitToggle === 0) {
			lyb.style.animationPlayState = "running";
			lyb.style.webkitAnimationPlayState = "running";
			hitToggle = 1;
		} 
		else{
			lyb.style.animationPlayState = "running";
			lyb.style.webkitAnimationPlayState = "running";
			hitToggle = 0;
		}
 
	}
		
	function win(){
		
		ZLAnimation();
		CSAnimation();
		SSRAnimation();
		EagleAnimation();
		leaf1Animation();
		leaf2Animation();
		SBAnimation();
		
		clearInterval(circle);
		
		lyb.style.display = "none";
			
		sb.style.display = "block"; 
		moon.style.display = "block";
		winBg.style.display = "block";
		word.style.display = "block";
		wlight1.style.display = "block";
		leaf1.style.display = "block";
		leaf2.style.display = "block";
		
		cloud1.style.display = "block";
		cloud1.style.animationPlayState = "running";
		cloud1.style.webkitAnimationPlayState = "running";
		
		cloud2.style.display = "block";
		cloud2.style.animationPlayState = "running";
		cloud2.style.webkitAnimationPlayState = "running";
		
		eagle.style.display = "block";
		eagle.style.animationPlayState = "running";
		eagle.style.webkitAnimationPlayState = "running";
		
		tut2.style.display = "block";
		tut2.style.animationPlayState = "running";
		tut2.style.webkitAnimationPlayState = "running";	
	}
		
	function lose(){
		
		clearTimeout("djs()");
		
		again.style.display = "block";
		again.style.animationPlayState = "running";
		again.style.webkitAnimationPlayState = "running";
 
		tut3.style.display = "block";
		tut3.style.animationPlayState = "running";
		tut3.style.webkitAnimationPlayState = "running";
		
		var non = "none";
			document.getElementById('loseX').style.display = non;
            doTimer(
			800,20,function(steps){
						non = non - (1 / steps);
						document.getElementById('loseX').style.display = non;				
						},
			function(){
						document.getElementById('loseX').style.display = "block";										
						LoseAnimation();
					}				
            );	
			
		m1Animation();
		m2Animation();
		m3Animation();
		m4Animation();
		m5Animation();
		m6Animation();
		m7Animation();
		m8Animation();
		m9Animation();
		
		tut3.style.display = "block";
		tut3.style.animationPlayState = "running";
		tut3.style.webkitAnimationPlayState = "running";
				
		monsterLose.style.display = "block";
		monsterLose.style.animationPlayState = "running";
		monsterLose.style.webkitAnimationPlayState = "running";
		
		light2.style.display = "block";
		light2.style.animationPlayState = "running";
		light2.style.webkitAnimationPlayState = "running";
		
		lyb.style.display = "none";
	}	
	  
	function reloadPage(){
         window.location.reload();
    }
	
		
		
	//上半部的animation	
 	var upArray = [
	                    '0.png',   
						'4.png',   
						'8.png',     
						'12.png',   
						'16.png',   
						'20.png',    
						'24.png',    
						'28.png',    
						'36.png',   
						'40.png',  
						'44.png',   
						'48.png',  
						'52.png',   
						'56.png',   
						'60.png',  
						'64.png',   
						'68.png',  
						'72.png',  
						'76.png',   
						'80.png',   
						'84.png',   
						'88.png',   
						'92.png',   
						'96.png',  
						'100.png', 
						'104.png',  
						'108.png',       
						'112.png',   
						'116.png',  
						'120.png' 
					  ];	
	for(i=0; i < upArray.length; i++)
	{	 
	    if(i < upArray.length)
	    {
		     var upImage = document.createElement("IMG");
		     upImage.setAttribute("src", upArray[i]);	
		     upImage.setAttribute("class","upA");
		     upA.appendChild(upImage);
	    }
    }	
	var renderUP;
	function upAnimation(){
		var myIndex = 0;			
		var upImage = document.getElementsByClassName("upA");		
		loopUP();
		
		function loopUP(){
			var i;
			for (i=0;i<upImage.length;i++)
			{
				upImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > upImage.length){}
			upImage[myIndex-1].style.display = "block";
			renderUP = setTimeout(loopUP,100);			
			 
			if (myIndex === 30){
			 clearTimeout(renderUP);
			}		
		}
	} 
	
	//输界面
    var loseMonsterArray = [
	                            'a1.png',         
								'a5.png',         
								'a9.png',         
								'a13.png',         
								'a17.png',     	
                                'a21.png',         
								'a25.png',      
								'a29.png',       
								'a33.png',        
								'a37.png',   
								'a39.png' 						
	                       ];	
	for(i=0; i < loseMonsterArray.length; i++)
	{	 
	    if(i < loseMonsterArray.length)
	    {
		     var m1Image = document.createElement("IMG");
		     m1Image.setAttribute("src", loseMonsterArray[i]);	
		     m1Image.setAttribute("class","m1");
		     m1.appendChild(m1Image);
			 
			 var m2Image = document.createElement("IMG");
		     m2Image.setAttribute("src", loseMonsterArray[i]);	
		     m2Image.setAttribute("class","m2");
		     m2.appendChild(m2Image);
			 
			 var m3Image = document.createElement("IMG");
		     m3Image.setAttribute("src", loseMonsterArray[i]);	
		     m3Image.setAttribute("class","m3");
		     m3.appendChild(m3Image);
			 
			 var m4Image = document.createElement("IMG");
		     m4Image.setAttribute("src", loseMonsterArray[i]);	
		     m4Image.setAttribute("class","m4");
		     m4.appendChild(m4Image);
			 
			 var m5Image = document.createElement("IMG");
		     m5Image.setAttribute("src", loseMonsterArray[i]);	
		     m5Image.setAttribute("class","m5");
		     m5.appendChild(m5Image);
			 
			 var m6Image = document.createElement("IMG");
		     m6Image.setAttribute("src", loseMonsterArray[i]);	
		     m6Image.setAttribute("class","m6");
		     m6.appendChild(m6Image);
			 
			 var m7Image = document.createElement("IMG");
		     m7Image.setAttribute("src", loseMonsterArray[i]);	
		     m7Image.setAttribute("class","m7");
		     m7.appendChild(m7Image);
			 
			 var m8Image = document.createElement("IMG");
		     m8Image.setAttribute("src", loseMonsterArray[i]);	
		     m8Image.setAttribute("class","m8");
		     m8.appendChild(m8Image);
			 
			 var m9Image = document.createElement("IMG");
		     m9Image.setAttribute("src", loseMonsterArray[i]);	
		     m9Image.setAttribute("class","m9");
		     m9.appendChild(m9Image);
	    }
    }	
	var renderM1;
	function m1Animation(){
		var myIndex = 0;			
		var m1Image = document.getElementsByClassName("m1");		
		loopM1();
		
		function loopM1(){
			var i;
			for (i=0;i<m1Image.length;i++)
			{
				m1Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > m1Image.length){}
			m1Image[myIndex-1].style.display = "block";
			renderM1 = setTimeout(loopM1,120);			
			 
			if (myIndex === 11){
			 clearTimeout(renderM1); 
			}		
		}
	} 
	var renderM2;
	function m2Animation(){
		var myIndex = 0;			
		var m2Image = document.getElementsByClassName("m2");		
		loopM2();
		
		function loopM2(){
			var i;
			for (i=0;i<m2Image.length;i++)
			{
				m2Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > m2Image.length){}
			m2Image[myIndex-1].style.display = "block";
			renderM2 = setTimeout(loopM2,120);			
			 
			if (myIndex === 11){
			 clearTimeout(renderM2); 
			}		
		}
	} 
    var renderM3;
	function m3Animation(){
		var myIndex = 0;			
		var m3Image = document.getElementsByClassName("m3");		
		loopM3();
		
		function loopM3(){
			var i;
			for (i=0;i<m3Image.length;i++)
			{
				m3Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > m3Image.length){}
			m3Image[myIndex-1].style.display = "block";
			renderM3 = setTimeout(loopM3,120);			
			 
			if (myIndex === 11){
			 clearTimeout(renderM3); 
			}		
		}
	} 	
	var renderM4;
	function m4Animation(){
		var myIndex = 0;			
		var m4Image = document.getElementsByClassName("m4");		
		loopM4();
		
		function loopM4(){
			var i;
			for (i=0;i<m4Image.length;i++)
			{
				m4Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > m4Image.length){}
			m4Image[myIndex-1].style.display = "block";
			renderM4 = setTimeout(loopM4,120);			
			 
			if (myIndex === 11){
			 clearTimeout(renderM4); 
			}		
		}
	} 
	var renderM5;
	function m5Animation(){
		var myIndex = 0;			
		var m5Image = document.getElementsByClassName("m5");		
		loopM5();
		
		function loopM5(){
			var i;
			for (i=0;i<m5Image.length;i++)
			{
				m5Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > m5Image.length){}
			m5Image[myIndex-1].style.display = "block";
			renderM5 = setTimeout(loopM5,120);			
			 
			if (myIndex === 11){
			 clearTimeout(renderM5); 
			}		
		}
	} 
	var renderM6;
	function m6Animation(){
		var myIndex = 0;			
		var m6Image = document.getElementsByClassName("m6");		
		loopM6();
		
		function loopM6(){
			var i;
			for (i=0;i<m6Image.length;i++)
			{
				m6Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > m6Image.length){}
			m6Image[myIndex-1].style.display = "block";
			renderM6 = setTimeout(loopM6,120);			
			 
			if (myIndex === 11){
			 clearTimeout(renderM6); 
			}		
		}
	} 
	var renderM1;
	function m7Animation(){
		var myIndex = 0;			
		var m7Image = document.getElementsByClassName("m7");		
		loopM7();
		
		function loopM7(){
			var i;
			for (i=0;i<m7Image.length;i++)
			{
				m7Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > m7Image.length){}
			m7Image[myIndex-1].style.display = "block";
			renderM7 = setTimeout(loopM7,120);			
			 
			if (myIndex === 11){
			 clearTimeout(renderM7); 
			}		
		}
	} 
	var renderM8;
	function m8Animation(){
		var myIndex = 0;			
		var m8Image = document.getElementsByClassName("m8");		
		loopM8();
		
		function loopM8(){
			var i;
			for (i=0;i<m8Image.length;i++)
			{
				m8Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > m8Image.length){}
			m8Image[myIndex-1].style.display = "block";
			renderM8 = setTimeout(loopM8,120);			
			 
			if (myIndex === 11){
			 clearTimeout(renderM8); 
			}		
		}
	} 
	var renderM9;
	function m9Animation(){
		var myIndex = 0;			
		var m9Image = document.getElementsByClassName("m9");		
		loopM9();
		
		function loopM9(){
			var i;
			for (i=0;i<m9Image.length;i++)
			{
				m9Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > m9Image.length){}
			m9Image[myIndex-1].style.display = "block";
			renderM9 = setTimeout(loopM9,120);			
			 
			if (myIndex === 11){
			 clearTimeout(renderM9); 
			}		
		}
	} 
	
	//失败
	var loseArray = [
                        'l1.png',  
						'l5.png',   
						'l9.png',   
						'l13.png',   
						'l17.png',  
						'l21.png',  
						'l25.png',  
						'l29.png',   
						'l33.png',  
						'l37.png',  
						'l40.png'
                    ];
 	for(i=0; i < loseArray.length; i++)
	{	 
	    if(i < loseArray.length)
	    {
		     var loseImage = document.createElement("IMG");
		     loseImage.setAttribute("src", loseArray[i]);	
		     loseImage.setAttribute("class","loseX");
		     loseX.appendChild(loseImage);
	    }
    }
	var renderLose;
	function LoseAnimation(){
		var myIndex = 0;			
		var loseImage = document.getElementsByClassName("loseX");		
		loopLose();
		
		function loopLose(){
			var i;
			for (i=0;i<loseImage.length;i++)
			{
				loseImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > loseImage.length){}
			loseImage[myIndex-1].style.display = "block";
			renderLose = setTimeout(loopLose,150);			
			 
			if (myIndex === 10){
			    myIndex = 0;
			}		
		}
	} 
	
	//开始界面
    var BearInArray = [
	                    'i1.png',  
						'i5.png',   
						'i9.png',   
						'i13.png',
						'i1.png'
	                  ];
  	for(i=0; i < BearInArray.length; i++)
	{	 
	    if(i < BearInArray.length)
	    {
		     var bearIn1Image = document.createElement("IMG");
		     bearIn1Image.setAttribute("src", BearInArray[i]);	
		     bearIn1Image.setAttribute("class","bearIn1");
		     bearIn1.appendChild(bearIn1Image);
			 
			 var bearIn2Image = document.createElement("IMG");
		     bearIn2Image.setAttribute("src", BearInArray[i]);	
		     bearIn2Image.setAttribute("class","bearIn2");
		     bearIn2.appendChild(bearIn2Image);
			 
		     var bearIn3Image = document.createElement("IMG");
		     bearIn3Image.setAttribute("src", BearInArray[i]);	
		     bearIn3Image.setAttribute("class","bearIn3");
		     bearIn3.appendChild(bearIn3Image);
			 
			 var bearIn4Image = document.createElement("IMG");
		     bearIn4Image.setAttribute("src", BearInArray[i]);	
		     bearIn4Image.setAttribute("class","bearIn4");
		     bearIn4.appendChild(bearIn4Image);
			 
			 var bearIn5Image = document.createElement("IMG");
		     bearIn5Image.setAttribute("src", BearInArray[i]);	
		     bearIn5Image.setAttribute("class","bearIn5");
		     bearIn5.appendChild(bearIn5Image);
			 
			 var bearIn6Image = document.createElement("IMG");
		     bearIn6Image.setAttribute("src", BearInArray[i]);	
		     bearIn6Image.setAttribute("class","bearIn6");
		     bearIn6.appendChild(bearIn6Image);
			 
			 var bearIn7Image = document.createElement("IMG");
		     bearIn7Image.setAttribute("src", BearInArray[i]);	
		     bearIn7Image.setAttribute("class","bearIn7");
		     bearIn7.appendChild(bearIn7Image);
			 
			 var bearIn8Image = document.createElement("IMG");
		     bearIn8Image.setAttribute("src", BearInArray[i]);	
		     bearIn8Image.setAttribute("class","bearIn8");
		     bearIn8.appendChild(bearIn8Image);
			 
			 var bearIn9Image = document.createElement("IMG");
		     bearIn9Image.setAttribute("src", BearInArray[i]);	
		     bearIn9Image.setAttribute("class","bearIn9");
		     bearIn9.appendChild(bearIn9Image);
	    }
    }
	var renderBearIn1;
	function BearIn1Animation(){
		var myIndex = 0;			
		var bearIn1Image = document.getElementsByClassName("bearIn1");		
		loopBearIn1();
		
		function loopBearIn1(){
			var i;
			for (i=0;i<bearIn1Image.length;i++)
			{
				bearIn1Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > bearIn1Image.length){}
			bearIn1Image[myIndex-1].style.display = "block";
			renderBearIn1 = setTimeout(loopBearIn1,160);			
			 
			if (myIndex === 5){
			    clearTimeout(renderBearIn1);
				bearIn1.style.display="none";
				// myIndex=0;
			}		
		}
	} 
    var renderBearIn2;
	function BearIn2Animation(){
		var myIndex = 0;			
		var bearIn2Image = document.getElementsByClassName("bearIn2");		
		loopBearIn2();
		
		function loopBearIn2(){
			var i;
			for (i=0;i<bearIn2Image.length;i++)
			{
				bearIn2Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > bearIn2Image.length){}
			bearIn2Image[myIndex-1].style.display = "block";
			renderBearIn2 = setTimeout(loopBearIn2,160);			
			 
			if (myIndex === 5){
			    clearTimeout(renderBearIn2);
				bearIn2.style.display="none";
				// myIndex=0;
			}		
		}
	} 
    var renderBearIn3;
	function BearIn3Animation(){
		var myIndex = 0;			
		var bearIn3Image = document.getElementsByClassName("bearIn3");		
		loopBearIn3();
		
		function loopBearIn3(){
			var i;
			for (i=0;i<bearIn3Image.length;i++)
			{
				bearIn3Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > bearIn3Image.length){}
			bearIn3Image[myIndex-1].style.display = "block";
			renderBearIn3 = setTimeout(loopBearIn3,160);			
			 
			if (myIndex === 5){
			    clearTimeout(renderBearIn3);
				bearIn3.style.display="none";
				// myIndex=0;
			}		
		}
	} 
    var renderBearIn4;
	function BearIn4Animation(){
		var myIndex = 0;			
		var bearIn4Image = document.getElementsByClassName("bearIn4");		
		loopBearIn4();
		
		function loopBearIn4(){
			var i;
			for (i=0;i<bearIn4Image.length;i++)
			{
				bearIn4Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > bearIn4Image.length){}
			bearIn4Image[myIndex-1].style.display = "block";
			renderBearIn4 = setTimeout(loopBearIn4,160);			
			 
			if (myIndex === 5){
			    clearTimeout(renderBearIn4);
				bearIn4.style.display="none";
				// myIndex=0;
			}		
		}
	} 
    var renderBearIn5;
	function BearIn5Animation(){
		var myIndex = 0;			
		var bearIn5Image = document.getElementsByClassName("bearIn5");		
		loopBearIn5();
		
		function loopBearIn5(){
			var i;
			for (i=0;i<bearIn5Image.length;i++)
			{
				bearIn5Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > bearIn5Image.length){}
			bearIn5Image[myIndex-1].style.display = "block";
			renderBearIn5 = setTimeout(loopBearIn5,160);			
			 
			if (myIndex === 5){
			    clearTimeout(renderBearIn5);
				bearIn5.style.display="none";
				// myIndex=0;
			}		
		}
	} 
    var renderBearIn6;
	function BearIn6Animation(){
		var myIndex = 0;			
		var bearIn6Image = document.getElementsByClassName("bearIn6");		
		loopBearIn6();
		
		function loopBearIn6(){
			var i;
			for (i=0;i<bearIn6Image.length;i++)
			{
				bearIn6Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > bearIn6Image.length){}
			bearIn6Image[myIndex-1].style.display = "block";
			renderBearIn6 = setTimeout(loopBearIn6,160);			
			 
			if (myIndex === 5){
			    clearTimeout(renderBearIn6);
				bearIn6.style.display="none";
				// myIndex=0;
			}		
		}
	} 
    var renderBearIn7;
	function BearIn7Animation(){
		var myIndex = 0;			
		var bearIn7Image = document.getElementsByClassName("bearIn7");		
		loopBearIn7();
		
		function loopBearIn7(){
			var i;
			for (i=0;i<bearIn7Image.length;i++)
			{
				bearIn7Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > bearIn7Image.length){}
			bearIn7Image[myIndex-1].style.display = "block";
			renderBearIn7 = setTimeout(loopBearIn7,160);			
			 
			if (myIndex === 5){
			    clearTimeout(renderBearIn7);
				bearIn7.style.display="none";
				// myIndex=0;
			}		
		}
	} 
    var renderBearIn8;
	function BearIn8Animation(){
		var myIndex = 0;			
		var bearIn8Image = document.getElementsByClassName("bearIn8");		
		loopBearIn8();
		
		function loopBearIn8(){
			var i;
			for (i=0;i<bearIn8Image.length;i++)
			{
				bearIn8Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > bearIn8Image.length){}
			bearIn8Image[myIndex-1].style.display = "block";
			renderBearIn8 = setTimeout(loopBearIn8,160);			
			 
			if (myIndex === 5){
			    clearTimeout(renderBearIn8);
				bearIn8.style.display="none";
				// myIndex=0;
			}		
		}
	} 
    var renderBearIn9;
	function BearIn9Animation(){
		var myIndex = 0;			
		var bearIn9Image = document.getElementsByClassName("bearIn9");		
		loopBearIn9();
		
		function loopBearIn9(){
			var i;
			for (i=0;i<bearIn9Image.length;i++)
			{
				bearIn9Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > bearIn9Image.length){}
			bearIn9Image[myIndex-1].style.display = "block";
			renderBearIn9 = setTimeout(loopBearIn9,160);			
			 
			if (myIndex === 5){
			    clearTimeout(renderBearIn9);
				bearIn9.style.display="none";
				// myIndex=0;
			}		
		}
	} 

	//倒计时
    var djsArray = [
	                    'djs15.png',
						'djs14.png',
						'djs13.png',
						'djs12.png',
						'djs11.png',
						'djs10.png',
						'djs9.png',
						'djs8.png',
						'djs7.png',
						'djs6.png',
						'djs5.png',
						'djs4.png',
						'djs3.png',
						'djs2.png',
						'djs1.png',
						'djs0.png' 
	               ];
	for(i=0; i < djsArray.length; i++)
	{	 
	    if(i < djsArray.length)
	    {
		     var djsImage = document.createElement("IMG");
		     djsImage.setAttribute("src", djsArray[i]);	
		     djsImage.setAttribute("class","daoshu");
		     daoshu.appendChild(djsImage);
	    }
    }
	var renderDJS;
	function DJSAnimation(){
		var myIndex = 0;			
		var djsImage = document.getElementsByClassName("daoshu");		
		loopDJS();
		
		function loopDJS(){
			var i;
			for (i=0;i<djsImage.length;i++)
			{
				djsImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > djsImage.length){}
			djsImage[myIndex-1].style.display = "block";
			renderDJS = setTimeout(loopDJS,1000);			
			 
			if (myIndex === 16){
			    clearTimeout(renderDJS); 
			}		
		}
	} 
   
    //战力
	var zhanliArray = [
	                        'z1.png',  
							'z5.png',  
							'z9.png',   
							'z13.png',   
							'z17.png',   
							'z21.png',   
							'z25.png',   
							'z29.png',  
							'z33.png',   
							'z37.png',  
							'z41.png',   
							'z45.png',  
							'z49.png',  
							'z53.png',   
							'z57.png',  
							'z61.png', 
							'z63.png'
	                   ];
	for(i=0; i < zhanliArray.length; i++)
	{	 
	    if(i < zhanliArray.length)
	    {
		     var zlImage = document.createElement("IMG");
		     zlImage.setAttribute("src", zhanliArray[i]);	
		     zlImage.setAttribute("class","zhanli");
		     zhanli.appendChild(zlImage);
	    }
    }
	var renderZL;
	function ZLAnimation(){
		var myIndex = 0;			
		var zlImage = document.getElementsByClassName("zhanli");		
		loopZL();
		
		function loopZL(){
			var i;
			for (i=0;i<zlImage.length;i++)
			{
				zlImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > zlImage.length){}
			zlImage[myIndex-1].style.display = "block";
			renderZL = setTimeout(loopZL,50);			
			 
			if (myIndex === zhanliArray.length){
			    clearTimeout(renderZL); 
			}		
		}
	} 
   
    //传说
    var csArray = [
	                'cs1.png', 
					'cs3.png', 
					'cs5.png', 
					'cs7.png', 
					'cs9.png', 
					'cs11.png', 
					'cs13.png', 
					'cs15.png',
					'cs16.png'
	              ];
	for(i=0; i < csArray.length; i++)
	{	 
	    if(i < csArray.length)
	    {
		     var csImage = document.createElement("IMG");
		     csImage.setAttribute("src", csArray[i]);	
		     csImage.setAttribute("class","ccs");
		     ccs.appendChild(csImage);
	    }
    }
	var renderCS;
	function CSAnimation(){
		var myIndex = 0;			
		var csImage = document.getElementsByClassName("ccs");		
		loopCS();
		
		function loopCS(){
			var i;
			for (i=0;i<csImage.length;i++)
			{
				csImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > csImage.length){}
			csImage[myIndex-1].style.display = "block";
			renderCS = setTimeout(loopCS,50);			
			 
			if (myIndex === 9){
			    clearTimeout(renderCS); 
			}		
		}
	} 
   
    //SSR
    var ssrArray = [
	                'ssr1.png', 
					'ssr3.png',  
					'ssr5.png', 
					'ssr7.png', 
					'ssr9.png', 
					'ssr11.png', 
					'ssr13.png', 
					'ssr15.png' 
	              ];
	for(i=0; i < ssrArray.length; i++)
	{	 
	    if(i < ssrArray.length)
	    {
		     var ssrImage = document.createElement("IMG");
		     ssrImage.setAttribute("src", ssrArray[i]);	
		     ssrImage.setAttribute("class","ssr");
		     ssr.appendChild(ssrImage);
	    }
    }
	var renderSSR;
	function SSRAnimation(){
		var myIndex = 0;			
		var ssrImage = document.getElementsByClassName("ssr");		
		loopSSR();
		
		function loopSSR(){
			var i;
			for (i=0;i<ssrImage.length;i++)
			{
				ssrImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > ssrImage.length){}
			ssrImage[myIndex-1].style.display = "block";
			renderSSR = setTimeout(loopSSR,50);			
			 
			if (myIndex === 8){
			    clearTimeout(renderSSR); 
			}		
		}
	} 

    //鹰
    var eagleArray = [
	                    'y1.png',   
						'y5.png',   
						'y9.png',    
						'y13.png',   
						'y17.png',   
						'y21.png', 
						'y25.png',  
						'y28.png' 
	                 ];
	for(i=0; i < eagleArray.length; i++)
	{	 
	    if(i < eagleArray.length)
	    {
		     var eagleImage = document.createElement("IMG");
		     eagleImage.setAttribute("src", eagleArray[i]);	
		     eagleImage.setAttribute("class","eagle");
		     eagle.appendChild(eagleImage);
	    }
    }
	var renderEagle;
	function EagleAnimation(){
		var myIndex = 0;			
		var eagleImage = document.getElementsByClassName("eagle");		
		loopEagle();
		
		function loopEagle(){
			var i;
			for (i=0;i<eagleImage.length;i++)
			{
				eagleImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > eagleImage.length){}
			eagleImage[myIndex-1].style.display = "block";
			renderEagle = setTimeout(loopEagle,50);			
			 
			if (myIndex === 8){
			    clearTimeout(renderEagle); 
			}		
		}
	} 

    //leaf1
	var Leaf1Array = [
	                    'ly1.png',     
						'ly9.png',    
						'ly17.png',     
						'ly25.png',    
						'ly33.png',     
						'ly41.png',       
						'ly49.png',      
						'ly57.png',     
						'ly65.png',  
						'ly68.png'
	                  ];
    for(i=0; i < Leaf1Array.length; i++)
	{	 
	    if(i < Leaf1Array.length)
	    {
		     var leaf1Image = document.createElement("IMG");
		     leaf1Image.setAttribute("src", Leaf1Array[i]);	
		     leaf1Image.setAttribute("class","leaf1");
		     leaf1.appendChild(leaf1Image);
	    }
    }
	var renderleaf1;
	function leaf1Animation(){
		var myIndex = 0;			
		var leaf1Image = document.getElementsByClassName("leaf1");		
		loopleaf1();
		
		function loopleaf1(){
			var i;
			for (i=0;i<leaf1Image.length;i++)
			{
				leaf1Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > leaf1Image.length){}
			leaf1Image[myIndex-1].style.display = "block";
			renderleaf1 = setTimeout(loopleaf1,180);			
			 
			if (myIndex === 10){
			    clearTimeout(renderleaf1);  
			}		
		}
	} 

    //leaf2
	var leaf2Array = [
	                    'yl1.png',     
						'yl9.png',      
						'yl17.png',       
						'yl25.png',       
						'yl33.png',       
						'yl41.png',      
						'yl49.png',       
						'yl57.png', 
						'yl59.png'
	                 ];
	for(i=0; i < leaf2Array.length; i++)
	{	 
	    if(i < leaf2Array.length)
	    {
		     var leaf2Image = document.createElement("IMG");
		     leaf2Image.setAttribute("src", leaf2Array[i]);	
		     leaf2Image.setAttribute("class","leaf2");
		     leaf2.appendChild(leaf2Image);
	    }
    }
	var renderleaf2;
	function leaf2Animation(){
		var myIndex = 0;			
		var leaf2Image = document.getElementsByClassName("leaf2");		
		loopleaf2();
		
		function loopleaf2(){
			var i;
			for (i=0;i<leaf2Image.length;i++)
			{
				leaf2Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > leaf2Image.length){}
			leaf2Image[myIndex-1].style.display = "block";
			renderleaf2 = setTimeout(loopleaf2,180);			
			 
			if (myIndex === 9){
			    clearTimeout(renderleaf2); 
			}		
		}
	} 
	
    //进入游戏
	var sbArray = [
	                'sb1.png',  
					'sb5.png',  
					'sb9.png',   
					'sb13.png',  
					'sb17.png',   
					'sb21.png',  
					'sb25.png',  
					'sb29.png',   
					'sb33.png',   
					'sb37.png',   
					'sb41.png',   
					'sb45.png',   
					'sb49.png',   
					'sb53.png',   
					'sb57.png',  
					'sb61.png',   
					'sb65.png',   
					'sb69.png',   
					'sb73.png',   
					'sb77.png',   
					'sb81.png',   
					'sb85.png',   
					'sb89.png',   
					'sb93.png',    
					'sb97.png',   
					'sb101.png',   
					'sb105.png',   
					'sb109.png',   
					'sb113.png',  
					'sb117.png',  
					'sb122.png'
	              ];
	for(i=0; i < sbArray.length; i++)
	{	 
	    if(i < sbArray.length)
	    {
		     var sbImage = document.createElement("IMG");
		     sbImage.setAttribute("src", sbArray[i]);	
		     sbImage.setAttribute("class","sb");
		     sb.appendChild(sbImage);
	    }
    }
	var renderSB;
	function SBAnimation(){
		var myIndex = 0;			
		var sbImage = document.getElementsByClassName("sb");		
		loopSB();
		
		function loopSB(){
			var i;
			for (i=0;i<sbImage.length;i++)
			{
				sbImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > sbImage.length){}
			sbImage[myIndex-1].style.display = "block";
			renderSB = setTimeout(loopSB,150);			
			 
			if (myIndex === 31){
			    myIndex = 14;
			}		
		}
	} 
	
   















	
		
		
	function sizeData(w,h){
	
		var newWidth = w;
		var newHeight = h;
		// watch
		if ( newWidth === newHeight ){ widthToHeight = 1 / 1;}
		else if ( newWidth === 320 && newHeight === 325){widthToHeight = 65 / 64;}
		else if ( newWidth === 320 && newHeight === 330){widthToHeight = 33 / 32;}
		else if ( newWidth === 320 && newHeight === 290){widthToHeight = 32 / 29;}
		else if (( newWidth === 272 && newHeight === 340)||( newWidth === 312 && newHeight === 390)){widthToHeight = 5/4;}
		// Ipad 1/2/3,Nexus 9
		else if ((newWidth === 1536 && newHeight === 2048)
				||(newWidth === 2732 && newHeight === 2048 )||(newWidth === 2048 && newHeight === 1536)){widthToHeight = 4 / 3;}
		// Chromebook Pixel,Iphone,Iphone 4, Surface Book
		else if ((newWidth === 320 && newHeight === 480) || (newWidth === 640 && newHeight=== 960)
				||(newWidth === 480 && newHeight === 320) || (newWidth === 960 && newHeight=== 640)
				||(newWidth === 2560 && newHeight=== 1700) ||(newWidth === 3000 && newHeight=== 2000)
				||(newWidth === 2160 && newHeight=== 1440) ||(newWidth === 2736 && newHeight=== 1824)){widthToHeight = 3 / 2;}
				
		else if ((newWidth === 320 && newHeight === 480) || (newWidth === 640 && newHeight=== 960)
				||(newWidth === 480 && newHeight === 320) || (newWidth === 960 && newHeight=== 640)){widthToHeight = 2 / 3;}		
		
		// Chromobox 30, Dell Venue 8,MacBook 12, MAcbook Air 13,Macbook Pro 13, Macbook Pro 15
		// Nexus 15,Nexus 7, Samsung Galaxy Tab 10,Sony Xperia Z3/Z4 Tablet
		else if ((newWidth === 800 && newHeight===480) || (newWidth === 1280 && newHeight === 800)
				||(newWidth === 1440 && newHeight === 900) || (newWidth === 2880 && newHeight === 1800)
				||(newWidth === 1200 && newHeight === 1920) || (newWidth === 800 && newHeight === 1280)
				||(newWidth === 1920 && newHeight === 1200) || (newWidth === 2560 && newHeight === 1600)){widthToHeight = 16 / 10;}
		// Nexus 4
		else if (newWidth === 768 && newHeight === 1280){widthToHeight = 5 / 3;}
		// Android One,Chromebook 11, Google Pixel /XL,FTC One M8/M9, iMac 27/5K, Iphone5/6/6 Plus,LG G2/G3,
		// Surface /2/3/Pro/Sony Xperia Z1 Ultra/Z1 Compact/Z2/Z3/Z3 Compact/Sony Xperia C4,
		// Samsung Galaxy 4/S5/S6/S7/S7 Edge,Nexus 6P/Note, Mac Book Air 11 , Moto G/X/5/5X/6/6P
		else if ((newWidth === 720 && newHeight === 1280)||(newWidth === 1366 && newHeight === 768)
				||(newWidth === 5120 && newHeight === 2880)){widthToHeight = 9 / 16;}
		
		//Samsung Galaxy Tab 7
		else if (newWidth === 600 && newHeight===1024){widthToHeight = 10/16;}
		// Samsung Galaxy S8/S8+
		else if (newWidth === 1440 && newHeight===2960){widthToHeight = 18.5 / 9;}
		
		//
		else if (newWidth ===  1080 && newHeight===2160 ||newWidth ===  1440 && newHeight===2880 
				|| newWidth ===  411 && newHeight===823){widthToHeight = 9 / 18;}
		
		//Final
		//GalaxyS5 
		else if(newWidth === 1920 && newHeight === 1080){widthToHeight = 16 / 9;}	
		//iphone 5
		else if(newWidth === 640 && newHeight === 1136){widthToHeight = 40 / 71;}	
		//iphone 6,7,8 plus  //Google Pixel,Google Pixel XL 16：9
		else if (newWidth === 414 && newHeight === 736 || newWidth === 375 && newHeight === 667 
				|| newWidth === 320 && newHeight === 568 || newWidth === 411 && newHeight === 731 
				|| newWidth === 360 && newHeight === 640  || newWidth === 1080 && newHeight === 1920
				|| newWidth === 750 && newHeight === 1334 ||newWidth === 1440 && newHeight === 2560) {widthToHeight = 9 / 16;}	
		//iphone X
		else if (newWidth === 375 && newHeight === 812 || newWidth === 1125 && newHeight === 2436){widthToHeight = 9 / 19.5;}
		//ipad, ipad Pro
		else if (newWidth === 768   && newHeight === 1024 || 
				 newWidth === 2048  && newHeight === 2732 || newWidth === 1024  && newHeight === 1366  ){widthToHeight = 3 / 4;}
		
		else{widthToHeight = 2.5 / 4;}
		
		return (newWidth,newHeight);
	}	
	
	function resize(w,h){
		
		var newWidth = w;
		var newHeight = h;
		
		var newWidthToHeight = newWidth / newHeight;
		if (newWidthToHeight > widthToHeight) {
			newWidth = newHeight * widthToHeight;
			container.style.height = newHeight + 'px';
			container.style.width = newWidth + 'px';
		} 
		else {
			newHeight = newWidth / widthToHeight;
			container.style.width = newWidth + 'px';
			container.style.height = newHeight + 'px';
		}
		var newWidthToHeight = newWidth / newHeight;
		if (newWidthToHeight > widthToHeight) {
			newWidth = newHeight * widthToHeight;
			container.style.height = newHeight + 'px';
			container.style.width = newWidth + 'px';
		} 
		else {
			newHeight = newWidth / widthToHeight;
			container.style.width = newWidth + 'px';
			container.style.height = newHeight + 'px';
		}
		container.style.fontSize = (newWidth / 400) + 'em';
	}
	
	 window.addEventListener("orientationchange", function() {location.reload();}, false);
     document.getElementById("x").innerHTML = "";
	 
	 