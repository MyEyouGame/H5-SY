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
			window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||   
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
  
	var g = document.getElementById("gameContainer");

	var w = document.getElementById("gameContainer"),
    d = document,
    e = d.documentElement,
    x = w.innerWidth || e.clientWidth 
    y = w.innerHeight|| e.clientHeight;
	
	x=w.clientWidth;
	y=w.clientHeight;
	 
		 var inner_container = document.getElementById('inner_container');
	
	    
		
		
		
	
		 var gRun  = document.getElementById("gRun"); 
         var monster = document.getElementById("monster");
		
		 var grave1 = document.getElementById("grave1");
         var grave2 = document.getElementById("grave2");
         var grave3 = document.getElementById("grave3");
         var grave4 = document.getElementById("grave4");
		
		 var mushroom1 = document.getElementById("mushroom1");
		 var mushroom2 = document.getElementById("mushroom2");
		
		 // var bfire = document.getElementById("bfire"); 
		 // var sfire = document.getElementById("sfire"); 
            
         //背景			        
		 var redLayer   = document.getElementById("redLayer");
		 var ored       = document.getElementById("ored");
         var greenLayer = document.getElementById("greenLayer");			
		
		 var flower1 = document.getElementById("flower1");			
		 var flower2 = document.getElementById("flower2");				
	
	     var jewel1 = document.getElementById('jewel1');
	     var jewel2 = document.getElementById('jewel2');
	     var jewel3 = document.getElementById('jewel3');
	
	
	
	
		 var key   = document.getElementById("key");
		 var block = document.getElementById("block");
		 var gift  = document.getElementById("gift");
	 
	 
	     var score;

         var jewelAmount = 3;
		 
		 var jumping = false;
		 
		 var fps = 35;
		 
	
     	  
         		
	// document.getElementById("demo").innerHTML = ms.getMilliseconds();s
	
	function main(){
		
		document.getElementById("loader").style.display = "none";		
		gameContainer.style.display = "block";
		
		var jewelImage = document.getElementsByClassName("jewel");
		
		// var gRun = document.getElementsByClassName("gRun");
		
		jump();
		begin();
		init();
	}
	

	
	var tstart = document.getElementById("tstart");

    tstart.onclick = function() { //为start按键添加点击事件处理程序
         girl.style.display = "none"; //隐藏标题
		 glove.style.display = "none";
		 start.style.display = "none";
		 tut.style.display = "none";
		 begin();
		 jump();
		 // landRun();
		 // timedCount();
	}	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function begin(){
	    		
		// gRun.style.animationName = "run";
	    // gRun.style.WebkitanimationName = "run";
		
		monster.style.animationName = "move";
	    monster.style.WebkitanimationName = "move";
		
		// gRun.style.AnimationPlayState = "running";
		// gRun.style.WebkitAnimationPlayState = "running";
		
		block.style.animationName = "LR";
		block.style.WebkitanimationName = "LR";
		
		block.style.AnimationPlayState = "running";
		block.style.WebkitAnimationPlayState = "running";
		
		ored.style.animationName = "opacityred";
		ored.style.WebkitanimationName = "opacityred";
		
		ored.style.animationPlayState = "running";
		ored.style.WebkitAnimationPlayState = "running";
		
		monster.style.animationPlayState = "running";
		monster.style.WebkitanimationPlayState = "running";
		
		brick2.style.animationPlayState = "running";
		brick2.style.WebkitAnimationPlayState = "running";
	     
		moveBG.style.animationPlayState = "running";
		moveBG.style.webkitRequestAnimationFrame = "running";
	
	}
 
 
        var key=0;
        var bool=false;
        var speed=6;//每次行走的距离
        // var actor;//人物div
        const HEIGHT=33;//人物的高
        const WIDTH=32;//人物的宽
        // var arr=[1,3,2,0];//4排图像 代表 下 左 右 上
        var num=0;
        var jumpBool=false;
        var actorSkinSpeed=8;
        var jumpSpeed=-15;
        init();  
		 
		
		 function init() {
            window.addEventListener("keydown",keyHandler);
            window.addEventListener("keyup",keyHandler);
            actor=document.querySelector("div");
            // setInterval(animation,16);
            //按键驱动不能实现 实现的是通过按键触发相应动画 实现我们的人物的帧动画 跳转
        }
        
        function keyHandler(e) {
            bool=e.type==="keydown";
            key=e.keyCode;
            // if(!bool){
                // num=0;
                // actor.style.backgroundPositionX=-num*WIDTH+"px";
            // }
            if(key===32 && !jumpBool){//跳跃 空格驱动
                jumpBool=true;
            }
        }
        
        // function animation() {
            // jump();
            // if(!bool)return;
            // walk();//单方向行走 实现
            // changeDirection();//方向确定时  内部行走的实现
        // }
        
        function jump() {
            if(!jumpBool)return;
            jumpSpeed+=1;
            if(jumpSpeed===15){
                jumpBool=false;
                jumpSpeed=-15;
                return;
            }
            gRun.style.top=gRun.offsetTop+jumpSpeed+"px";
        }


































	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function updatePlayer(){
		
		// gRun.jump();
		
		
		
		
		// if(gRun.y + gRun.height >= inner_container.height){		
      		 // gameOver();
		// }
		
		// if(gRun.y + gRun.height <= inner_container.height){
			 // gameOver();
		// }
	}

    






















    // var c=0;
    // var score;
	
    // function timedCount()
    // {
     // document.getElementById('score').value = c;
     // c=c+1;
     // score=setTimeout("timedCount()",100);
    // }






























    // function GetBox () {
		// var weakness = document.getElementById ("weakness");
		// var attackPoint = document.getElementById ("attackPoint");
				
		// if (weakness.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
			// var rect = attackPoint.getBoundingClientRect ();
			// x = rect.left;
			// y = rect.top;
			// w = rect.right - rect.left;
			// h = rect.bottom - rect.top;
		// }
		
		// if (attackPoint.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
			// var rect2 = weakness.getBoundingClientRect ();
			// x2 = rect2.left;
			// y2 = rect2.top;
			// w2 = rect2.right - rect2.left;
			// h2 = rect2.bottom - rect2.top;

			// return(x,y,x2,y2,w,h,w2,h2);
		// }
	// }
	



















    function reloadPage(){ //again
         window.location.reload();
    }
	
    (function () {
  
	if (window.matchMedia("(orientation: portrait)").matches) {
		
		g.style.webkitTransform = 'rotate(90deg)'; 
		g.style.mozTransform    = 'rotate(90deg)'; 
		g.style.msTransform     = 'rotate(90deg)'; 
		g.style.oTransform      = 'rotate(90deg)'; 
		g.style.transform       = 'rotate(90deg)'; 
	
		 window.addEventListener('orientationchange', function() { location.reload(); }, false);
		
		var game = {
		element: document.getElementById("gameContainer"),
		width: 1280,
		height: 720,
		safeWidth: 720,
		safeHeight: 1280
		}
	}

	if (window.matchMedia("(orientation: landscape)").matches) {
	
		g.style.webkitTransform = 'rotate(0deg)'; 
		g.style.mozTransform    = 'rotate(0deg)'; 
		g.style.msTransform     = 'rotate(0deg)'; 
		g.style.oTransform      = 'rotate(0deg)'; 
		g.style.transform       = 'rotate(0deg)'; 
	
		 window.addEventListener('orientationchange', function() { location.reload(); }, false);
			
		var game = {
		element: document.getElementById("gameContainer"),
		width: 1280,
		height: 720,
		safeWidth: 1280,
		safeHeight: 720
		}
	}
	
	resizeGame = function () {
	
		var viewport, newGameWidth, newGameHeight, newGameX, newGameY;
						
		viewport = {
			width: window.innerWidth,
			height: window.innerHeight
		};
		
		if (game.height / game.width > viewport.height / viewport.width) {
		
			if (game.safeHeight / game.width > viewport.height / viewport.width) {
			 
			  newGameHeight = viewport.height * game.height / game.safeHeight;
			  newGameWidth = newGameHeight * game.width / game.height;
			} else {
				
			  
			  newGameWidth = viewport.width;
			  newGameHeight = newGameWidth * game.height / game.width;
			}
		} else { 
			if (game.height / game.safeWidth > viewport.height / viewport.width) {
				
				newGameHeight = viewport.height;
				newGameWidth = newGameHeight * game.width / game.height;
			} else {
				 
				
				newGameWidth = viewport.width * game.width / game.safeWidth;
				newGameHeight = newGameWidth * game.height / game.width;
			}
		}
		
		game.element.style.width = newGameWidth + "px";
		game.element.style.height = newGameHeight + "px";
		  
		newGameX = (viewport.width - newGameWidth) / 2;
		newGameY = (viewport.height - newGameHeight) / 2;
				
		game.element.style.margin = newGameY + "px " + newGameX + "px";
	};
window.addEventListener("resize", resizeGame);
resizeGame();
}())

