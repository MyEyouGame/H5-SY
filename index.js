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
		var swordAmount=7;
		
	function lp() {
			 ; mv = setTimeout(main, 500);
	    }
		
	function main(){
		document.getElementById('value').innerHTML = "7/7";
		document.getElementById("loader").style.display = "none";
		
		var container = document.getElementById('container');
		container.style.display = "block";
		
		var inner_container = document.getElementById('inner_container');
		var inner_container2 = document.getElementById('inner_container2');
		var inner_container3 = document.getElementById('inner_container3');
		var inner_container4 = document.getElementById('inner_container4');
		var inner_container5 = document.getElementById('inner_container5');
		
		var ls1 = document.getElementsByClassName("ls1");	
		var ls2 = document.getElementsByClassName("ls2");
		
		var swo1 = document.getElementsByClassName("swo1");	
		var swo2 = document.getElementsByClassName("swo2");	
		var swo3 = document.getElementsByClassName("swo3");	
		var swo4 = document.getElementsByClassName("swo4");	
		var swo5 = document.getElementsByClassName("swo5");	
		var swo6 = document.getElementsByClassName("swo6");	
		var swo7 = document.getElementsByClassName("swo7");	
		
		var cloud1 = document.getElementsByClassName("cloud1");
		var cloud2 = document.getElementsByClassName("cloud2");
		var cloud3 = document.getElementsByClassName("cloud3");
		var cloud4 = document.getElementsByClassName("cloud4");
		
		var m2 = document.getElementsByClassName("m2");	
		var d2 = document.getElementsByClassName("d2");	
		
        var lose=document.getElementsByClassName("lose");
	    var againF=document.getElementsByClassName("againF");
		
		var nextlevel=document.getElementsByClassName("nextlevel");
		
		var myImageArray = ['sword.png'];
		
		var widthToHeight = 0 ;
		var newWidth = window.innerWidth;
		var newHeight = window.innerHeight;
		
		sizeData(newWidth,newHeight);
		resize(newWidth,newHeight);		
		createImage();
		window.requestAnimationFrame(monster);	
	}	
	
	inner_container.addEventListener('mousedown', touchstart);
	inner_container2.addEventListener('mousedown', attack);
	inner_container4.addEventListener('mousedown', attack2);
	
	function touchstart(event) {
		event.preventDefault();
		inner_container.style.display = "none";
		inner_container2.style.display = "block";
		document.getElementById('tut').style.display = "block";
		document.getElementById("m2").style.display="block";
		inner_container.removeEventListener('mousedown', touchstart);				
	}
	
 	 var mWidth = 100;
	 var s;
	 var k;
	 var toggle = 0;			
		
	function attack(event) {
		 event.preventDefault();
		 document.getElementById('tut').style.display = "none";
		 document.getElementById('glove').style.display = "none";
		 document.getElementById('wuci').style.display = "none";
		 document.getElementById('att').style.display = "none";

		 // m2.style.animationPlayState = "running";
		 
		var swords = document.getElementsByClassName('swords');
		
		if(swordAmount <= 0){
			 document.getElementById('value').innerHTML = "0/7";		
			 swordAmount = 0;
		}	
		else{
		     swordAmount--;
			 document.getElementById('value').innerHTML = swordAmount +"/7";
			 swords[swordAmount].style.display="none";	
		}
		
		if(swordAmount <= 0)
		{  
		     inner_container2.removeEventListener('mousedown', attack); 		 
		}	
		
	var mTop = 128;
		
	function sword(timestamp) {

		mTop-=10;
		ls1.style.marginTop = mTop + '%';
				
	    if (mTop > -30) {
		
		    GetBox(); 
			 
		    if(x2<x && x<(x2+w2))
			{
				mWidth-=2;
				document.getElementById('xuetiao').style.width= mWidth + "%";
			}
			
			if((mWidth < 2.5 && swordAmount <=0) || (mWidth <2.5 && swordAmount >0) )
			{
				document.getElementById("m2").style.display="none";
				document.getElementById("tut2").style.display="block";
				inner_container4.style.display="block"; 
				inner_container2.style.display="none"; 
				window.cancelAnimationFrame(s);
			}
			else if (mWidth > 2.5 && swordAmount <0)
			{
				window.cancelAnimationFrame(s);
				document.getElementById("m2").style.display="none";
				lose.style.backgroundImage="url('lose.png')";
				inner_container3.style.display="block";
			}				
		}
		  else{
		    ls1.style.marginTop = 128 + '%'; 		  
		  }	
	        window.requestAnimationFrame(sword);
		}	
		 s= window.requestAnimationFrame(sword);
}	
    
	function attack2(event) {
		 event.preventDefault();
		 document.getElementById('tut2').style.display = "none";
		 d2.style.animationPlayState = "running";
		
		var swooo = document.getElementsByClassName('swooo');
		
		if(swordAmount <= 0){
			 document.getElementById('value').innerHTML = "0/7";		
			 swordAmount = 0;
		}	
		else{
		     swordAmount--;
			 document.getElementById('value').innerHTML = swordAmount +"/7";
			 swooo[swordAmount].style.display="none";	
		}
		
		if(swordAmount <= 0)
		{  
		     inner_container4.removeEventListener('mousedown', attack2); 
			 // d2.style.animationName="killDragon";	
		
		    // if(toggle===0){
			     // d2.style.animationName="killDragon";		
	                 // if(d2.style.){}
					 // else{toggle=1;}
			// }
			// if(toggle===1){
				// d2.style.animationName = "killDragon";
				     // if(d2.style.){}
		             // else{toggle=0;}
			// }
			
		}	
						
	var mTop = 128;
		
	function sword(timestamp) {

		  mTop-=10;
		  ls2.style.marginTop = mTop + '%';
				
	    if (mTop > -30) {
		
		     GetBox2(); 
			 
		        if(x2<x && x<(x2+w2))
			{
				mWidth-=2;
				document.getElementById('xuetiao2').style.width= mWidth + "%";
			}
			if((mWidth < 3 && swordAmount <=0) || (mWidth < 3 && swordAmount > 0 ) )
			{
				document.getElementById("d2").style.display="none";
				document.getElementById("tut3").style.display="block";
				document.getElementById("cloud1").style.display="none";
				document.getElementById("cloud2").style.display="none";
				document.getElementById("cloud3").style.display="none";
				document.getElementById("cloud4").style.display="none";
				inner_container3.style.display="block"; 
				window.cancelAnimationFrame(k);
			}
			else if (mWidth > 3 && swordAmount < 0)
			{
				window.cancelAnimationFrame(k);
				document.getElementById("d2").style.display="none";
				lose.style.backgroundImage="url('lose.png')";
				inner_container2.style.display="block";
			}				
		  }
		  else{
		    ls2.style.marginTop = 128 + '%'; 		  
		  }	
	        window.requestAnimationFrame(sword);
		}	
		 k= window.requestAnimationFrame(sword);
	}
  	
    function monster(timestamp) {		
		
	mons = window.requestAnimationFrame(monster);
 
		if((mWidth < 3 && swordAmount <=0) || (mWidth < 3 && swordAmount >=0) )
		{
		        document.getElementById("m2").style.display="none";
				document.getElementById("tut2").style.display="block";
				inner_container4.style.display="block";
                inner_container2.style.display="none"; 				
				window.cancelAnimationFrame(mons);
		}
		else if (mWidth > 3 && swordAmount <=0)
		{
				 window.cancelAnimationFrame(mons);
				 lose.style.backgroundImage="url('lose.png')";
				 document.getElementById("m2").style.display="none";
				 inner_container3.style.display="block";
		}		
	}		
	
	function dragon(timestamp) {		
		
	dra = window.requestAnimationFrame(dragon);
 
		if((mWidth < 2.5 && swordAmount <=0) || (mWidth < 2.5 && swordAmount >=0) )
		{
			document.getElementById("d2").style.display="none";
			document.getElementById("cloud1").style.display="none";
			document.getElementById("cloud2").style.display="none";
			document.getElementById("cloud3").style.display="none";
			document.getElementById("cloud4").style.display="none";
			document.getElementById("tut3").style.display="block";
			window.cancelAnimationFrame(dra);
			inner_container5.style.display="block";
		}
		else if (mWidth > 2.5 && swordAmount <=0)
		{
			window.cancelAnimationFrame(dra);
			lose.style.backgroundImage="url('lose.png')";
			document.getElementById("d2").style.display="none";
			inner_container3.style.display="block";
		}		
	}	
	
	function createImage(){
	
		var myImageArray = ['sword.png'];

		ls1.style.backgroundImage= "url("+ myImageArray[0] +")";
		ls1.style.backgroundSize="100% 100%";
		ls1.style.backgroundRepeat="no-repeat";

        ls2.style.backgroundImage= "url("+ myImageArray[0] +")";
		ls2.style.backgroundSize="100% 100%";
		ls2.style.backgroundRepeat="no-repeat";
								
		var mLeft= 62.5 ;
		var i;

		for (i=0; i<7; i++)
		{
			if(i<7)
			{
				var myImg = document.createElement('IMG');
				mLeft = mLeft + 4.3;
				console.log(myImageArray[0]);
				myImg.src = "sword.png";
				myImg.className = 'swords';
				myImg.alt = 'swords'+(i+1);
				myImg.style.marginLeft= (mLeft) + "%";
				inner_container2.appendChild(myImg);
			}
		}
	
		var mmLeft= 62.5 ;
		var j;
		
		for (j=0; j<7; j++)
		{
			if(j<7)
			{
				var myImg = document.createElement('IMG');
				mmLeft = mmLeft + 4.3;
				myImg.src = "sword.png";
				console.log(myImageArray[0]);
				myImg.className = 'swooo';
				myImg.alt = 'swooo'+(j+1);
				myImg.style.marginLeft= (mmLeft) + "%";
				inner_container4.appendChild(myImg);
			}
		}		
	} 
	
	function GetBox() {
		var weakness = document.getElementById ("weakness");
		var attackPoint = document.getElementById ("attackPoint");	
				
		if (weakness.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
			var rect = attackPoint.getBoundingClientRect ();
			x = rect.left;
			y = rect.top;
			w = rect.right - rect.left;
			h = rect.bottom - rect.top;  
	
		}
		
		if (attackPoint.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
			var rect2 = weakness.getBoundingClientRect ();
			x2 = rect2.left;
			y2 = rect2.top;
			w2 = rect2.right - rect2.left;
			h2 = rect2.bottom - rect2.top;
	
			return(x,y,x2,y2,w,h,w2,h2);
		}
	
	}

    function GetBox2 () {
		var weakness2 = document.getElementById ("weakness2");
		var attackPoint2 = document.getElementById ("attackPoint2");	
				
		if (weakness2.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
			var rect = attackPoint2.getBoundingClientRect ();
			x = rect.left;
			y = rect.top;
			w = rect.right - rect.left;
			h = rect.bottom - rect.top;  
	
		}
		
		if (attackPoint2.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
			var rect2 = weakness2.getBoundingClientRect ();
			x2 = rect2.left;
			y2 = rect2.top;
			w2 = rect2.right - rect2.left;
			h2 = rect2.bottom - rect2.top;
	
			return(x,y,x2,y2,w,h,w2,h2);
		}
	
	}

	function reloadPage(){
         window.location.reload();
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
     // document.getElementById("x").innerHTML = "";