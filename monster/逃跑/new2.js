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
	
		var mv;
		var jewelAmount = 3;
		// var countTime = document.getElementById('countTime').innerHTML;
		
	function lp() {	
		     mv = setTimeout(main, 500);
	}
	
    function jump(){	
		 game.input.onDown.add(this.jump, this); //给鼠标按下事件绑定龙的跳跃动作
         this.spaceKey = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
         this.upKey = game.input.keyboard.addKey(Phaser.KeyCode.UP);
         game.input.keyboard.addKeyCapture([Phaser.KeyCode.SPACEBAR, Phaser.KeyCode.UP]);

		 if (this.spaceKey.isDown || this.upKey.isDown) {
         this.jump();
        }
		
    if (game.input.keyboard.isDown(Phaser.KeyCode.DOWN) && this.dragon.downRun === false) {
         this.dragon.downRun = true;
         this.dragon.animations.stop();
         this.dragon.animations.play('down_run');
         this.dragon.body.setSize(this.dragon.width, this.dragon.height / 2, 0, this.dragon.height / 2);
        } else if (!game.input.keyboard.isDown(Phaser.KeyCode.DOWN) && this.dragon.downRun === true) {
         this.dragon.downRun = false;
         this.dragon.animations.stop();
         this.dragon.animations.play('run');
         this.dragon.body.setCircle(this.dragon.width / 2);
         this.dragon.body.offset.set(0, 0);//恢复一下偏移为0
        }
    }		
		
		 var gameContainer   = document.getElementById("gameContainer");
		 var inner_container = document.getElementById('inner_container');
		
	     var jewel = document.getElementById("jewel");
		 var score = document.getElementById("score");
		 
		 var monster = document.getElementById("monster");
		 var gRun  = document.getElementById("gRun"); 
        
         var grave1 = document.getElementById("grave1");
         var grave2 = document.getElementById("grave2");
         var grave3 = document.getElementById("grave3");
         var grave4 = document.getElementById("grave4");
		
		 var m1 = document.getElementById("m1");
		 var m2 = document.getElementById("m2");
		
		 var bfire = document.getElementById("bfire"); 
		 var sfire = document.getElementById("sfire"); 
            
         //背景			        
		 var redLayer   = document.getElementById("redLayer");
		 var ored       = document.getElementById("ored");
         var greenLayer = document.getElementById("greenLayer");			
		
		 var flower1  = document.getElementById("folwer1");			
		 var flower2 = document.getElementById("folwer2");				
				
		 var key   = document.getElementById("key");
		 var block = document.getElementById("block");
		 var gift = document.getElementById("gift");
	    
	
	function main(){
		
		document.getElementById("loader").style.display = "none";		
		gameContainer.style.display = "block";
		
		var jewelImage = document.getElementsByClassName("jewel");
		// jewelImage[1].style.left = "110%";
		// jewelImage[2].style.left = "220%";		
		
		var gRun = document.getElementsByClassName("gRun");
		createImage();
		// jump();
	}
	
	var tstart = document.getElementById("tstart");
	
    tstart.onclick = function() { //为start按键添加点击事件处理程序
         girl.style.display = "none"; //隐藏标题
		 glove.style.display = "none";
		 start.style.display = "none";
		 tut.style.display = "none";
		 begin();
	}
	var jewelAmount = 3;
	 
		 var inner_container = document.getElementById('inner_container');
	
	     var jewel = document.getElementById("jewel");
	
		 var gRun  = document.getElementById("gRun"); 
         var monster = document.getElementById("monster");
		 
         var grave1 = document.getElementById("grave1");
         var grave2 = document.getElementById("grave2");
         var grave3 = document.getElementById("grave3");
         var grave4 = document.getElementById("grave4");
		
		 var m1 = document.getElementById("m1");
		 var m2 = document.getElementById("m2");
		
		 // var bfire = document.getElementById("bfire"); 
		 // var sfire = document.getElementById("sfire"); 
            
         //背景			        
		 var redLayer   = document.getElementById("redLayer");
		 var ored       = document.getElementById("ored");
         var greenLayer = document.getElementById("greenLayer");			
		
		 var flower1 = document.getElementById("folwer1");			
		 var flower2 = document.getElementById("folwer2");				
	
	
		 var key   = document.getElementById("key");
		 var block = document.getElementById("block");
		 var gift  = document.getElementById("gift");
		
     	  
         		
	// document.getElementById("demo").innerHTML = ms.getMilliseconds();s
	
	function main(){
		
		document.getElementById("loader").style.display = "none";		
		gameContainer.style.display = "block";
		
		var jewelImage = document.getElementsByClassName("jewel");
		
		// var gRun = document.getElementsByClassName("gRun");
		
		createImage();	

	}
	
	
	function reloadPage(){ //again
         window.location.reload();
    }
	
	
	
	
	
	
	
	
	
	
	
	
	var tstart = document.getElementById("tstart");
	
    tstart.onclick = function() { //为start按键添加点击事件处理程序
         girl.style.display = "none"; //隐藏标题
		 glove.style.display = "none";
		 start.style.display = "none";
		 tut.style.display = "none";
		 begin();
		 landRun();
	}	
	
  
	
	function begin(){
	    		
		gRun.style.animationName = "run";
	    gRun.style.WebkitanimationName = "run";
		
		monster.style.animationName = "move";
	    monster.style.WebkitanimationName = "move";
		
		gRun.style.AnimationPlayState = "running";
		gRun.style.WebkitAnimationPlayState = "running";
		
		
		block.style.animationName = "LR";
		block.style.WebkitanimationName = "LR";
		
		block.style.AnimationPlayState = "running";
		block.style.WebkitAnimationPlayState = "running";
		
		ored.style.animationPlayState = "running";
		ored.style.WebkitAnimationPlayState = "running";
		
		monster.style.animationPlayState = "running";
		monster.style.WebkitanimationPlayState = "running";
		
		// sfire.style.animationPlayState = "running";
		// sfire.style.WebkitanimationPlayState = "running";
		
		// bfire.style.animationPlayState = "running";
		// bfire.style.WebkitanimationPlayState = "running";	
		
		brick2.style.animationPlayState = "running";
		brick2.style.WebkitAnimationPlayState = "running";
	}
	   
	function landRun() {
           
	    if (land.offsetLeft <= -2600) {    //270%
             land.style.left="0";
        } 
		   
		land.style.left  = land.offsetLeft  - 3 + "px";
 
	
		
			setTimeout(function(){
             landRun();
        },20);
		
		
	    // clearTimeout(landRun());	
		// var landTimer = setInterval(landRun,600); //让草地动起来的定时器
	}    

	
	
	
	
	
	// function move(){
		
		// if(brick1.offsetLeft <= 100 ){
			// brick1.style.left = "-100px";
		// }
		
   		// if (brick2.offsetLeft <= 100) {
             // brick2.style.left = "-100px";
		// }

        // if (brick3.offsetLeft <= -100){
			 // brick3.style.left = "-100px"
		// }
			
        // redLayer.style.left = redLayer.offsetLeft - 3 + "px";
        // ored.style.left = ored.offsetLeft - 3 + "px";
		// greenLayer.style.Left = greenLayer.offsetLeft - 3 + "px";
        			
	// }
	
	
	
	
	
	
	
	
	
	
	
	

	    
		
   	function reloadPage(){ //again
         window.location.reload();
    }

    function createImage(){
		var mLeft = 0 ;
		var jewelArray = ['jewel.png'];
		var i;
		for(i=0; i<3; i++)
		{	 
			if(i < 3)
			{
				 var jewelImage = document.createElement("IMG");
				 mLeft = mLeft + 70;
				 jewelImage.setAttribute("src", jewelArray[0]);
                 jewelImage.style.marginLeft= (mLeft) + "%";				
				 jewelImage.setAttribute("class","jewel");
				 jewel.appendChild(jewelImage);
			}
		}
    }

(function () {
  
	if (window.matchMedia("(orientation: portrait)").matches) {
		
		gameContainer.style.webkitTransform = 'rotate(90deg)'; 
		gameContainer.style.mozTransform    = 'rotate(90deg)'; 
		gameContainer.style.msTransform     = 'rotate(90deg)'; 
		gameContainer.style.oTransform      = 'rotate(90deg)'; 
		gameContainer.style.transform       = 'rotate(90deg)'; 
		
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
	
		gameContainer.style.webkitTransform = 'rotate(0deg)'; 
		gameContainer.style.mozTransform    = 'rotate(0deg)'; 
		gameContainer.style.msTransform     = 'rotate(0deg)'; 
		gameContainer.style.oTransform      = 'rotate(0deg)'; 
		gameContainer.style.transform       = 'rotate(0deg)'; 
	
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