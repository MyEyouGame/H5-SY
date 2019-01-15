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
	
	var tstart = document.getElementById("tstart");
	
	var redLayer   = document.getElementById("redLayer");
	var ored       = document.getElementById("ored");
	var greenLayer = document.getElementById("greenLayer");			
		
	var jewel1 = document.getElementById("jewel1");
	var jewel2 = document.getElementById("jewel2");
	var jewel3 = document.getElementById("jewel3");
	
	function main(){
		
        document.getElementById("loader").style.display = "none";		
		gameContainer.style.display = "block";
	}
		
    tstart.onclick = function() { //为start按键添加点击事件处理程序
         girl.style.display = "none"; //隐藏标题
		 glove.style.display = "none";
		 start.style.display = "none";
		 tut.style.display = "none";
		 begin();
		 bgMove();
	}	
		
		
    function begin(){
		
		 brick2.style.AnimationPlayState = "running";
	     brick2.style.WebkitAnimationPlayState = "running";
		
		 gRun.style.anwimationName = "run";
		 gRun.style.WebkitanimationName= "run";
		 gRun.style.AnimationPlayState = "running";
	     gRun.style.WebkitAnimationPlayState = "running";
		
		 monster.style.animationName = "move";
		 monster.style.WebkitanimationName= "move";
		 monster.style.AnimationPlayState = "running";
	     monster.style.WebkitAnimationPlayState = "running";
			
		 ored.style.animationPlayState = "running";
		 ored.style.WebkitAnimationPlayState = "running";
	}
		
	function bgMove(){
		
		 if (moveBG.offsetLeft <= "-2600") {    //270%
             moveBG.style.left="0";
        } 
		   
		moveBG.style.left  = moveBG.offsetLeft  - 3 + "px";
		
			setTimeout(function(){
             bgMove();
            },20);

	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
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
