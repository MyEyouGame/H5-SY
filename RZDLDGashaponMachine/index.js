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
		
		var non1 = "none";
			document.getElementById('butterfly').style.display = non1;
            doTimer(
			350,20,function(steps){
						non1 = non1 - (1 / steps);
						document.getElementById('butterfly').style.display = non1;				
						},
			function(){
						document.getElementById('butterfly').style.display = "block";										
						ButterflyAnimation();
					}				
            );	
			
		var non2 = "none";
			document.getElementById('butterfly2').style.display = non2;
            doTimer(
			350,20,function(steps){
						non2 = non2 - (1 / steps);
						document.getElementById('butterfly2').style.display = non2;				
						},
			function(){
						document.getElementById('butterfly2').style.display = "block";										
						Butterfly2Animation();
					}				
            );
			
		var widthToHeight = 0 ;
		var newWidth = window.innerWidth;
		var newHeight = window.innerHeight;
		
		sizeData(newWidth,newHeight);
		resize(newWidth,newHeight);	
		
	}

    var hit     = document.querySelector("#gashapon");
    var xuetiao = document.querySelector("#xuetiao");




	var start = document.getElementById("lampGlow");
	start.onclick = function(){
		 
		 clearTimeout(renderButterfly);
		 clearTimeout(renderButterfly2);
		 		 
		 butterfly.style.display = "none";
		 butterfly2.style.display = "none";
		 
		 female.style.animationPlayState = "running";
		 female.style.webkitAnimationPlayState = "running";
		
		 male.style.animationPlayState = "running";
		 male.style.webkitAnimationPlayState = "running";
		
		 lamp.style.animationPlayState = "running";
		 lamp.style.webkitAnimationPlayState = "running";
		
	     startLamp.style.animationPlayState = "running";
		 startLamp.style.webkitAnimationPlayState = "running";
		 
		 lampGlow.style.animationPlayState = "running";
		 lampGlow.style.webkitAnimationPlayState = "running";
		 
		 flower1.style.display = "block";
		 flower2.style.display = "block";
		 
		 info.style.display = "block";
		 info.style.animation = "show 0.5s linear forwards 1 0.2S";
		 info.style.webkitAnimation = "show 0.5s linear forwards 1 0.2S";
		 
		 cb.style.display = "block";
		
		 var nonCB = "none";
			document.getElementById('cb').style.display = nonCB;
            doTimer(
			400,20,function(steps){
						nonCB = nonCB - (1 / steps);
						document.getElementById('cb').style.display = nonCB;				
						},
			function(){
						document.getElementById('cb').style.display = "block";										
						CBAnimation();
					}				
            );
		
		}	
		
	var confirmB = document.getElementById("cb");
	confirmB.onclick = function(){	
	     
		 lampGlow.style.display =　"none";
		 
		 topUI.style.display = "block";
		 bottomUI.style.display = "block";
		
         info.style.animation = "opacity 0.5s linear normal forwards 1";
         info.style.webkitAnimation = "opacity 0.5s linear normal forwards 1";
		
		 clearTimeout(renderCB);
		 cb.style.display = "none";
	
	     gashapon1.style.display = "block";
	     gashapon2.style.display = "block";
	     gashapon3.style.display = "block";
	    
		 book.style.display = "block";
		 book.style.animation = "RtorL 0.5s normal linear 1 forwards 0.5s";
		 book.style.webkitAnimation = "RtorL 0.5s normal linear 1 forwards 0.5s";
		 
		 star.style.display = "block";
		 star.style.animation = "starMove 0.5s normal linear 1 forwards 0.5s";
		 star.style.webkitAnimation = "starMove 0.5s normal linear 1 forwards 0.5s";
		 
		 bar.style.display="block";
		 
		 MoonGlow.style.display="block";
		 		 
		 cb1.style.display = "block";
		 cb1.style.animationPlayState = "running";
		 cb1.style.webkitAnimationPlayState = "running";
		
		 var non3 = "none";
			document.getElementById('gashapon').style.display = non3;
            doTimer(
			500,20,function(steps){
						non3 = non3 - (1 / steps);
						document.getElementById('gashapon').style.display = non3;				
						},
			function(){
						document.getElementById('gashapon').style.display = "block";										
						GashaponAnimation();
					}				
            );
	}

    var hit1 = document.getElementById("gashapon");
    hit1.onclick = function(){
		
		gashapon.style.display = "none";
		
		fgashapon.style.display = "block";
		FirstGashaponAnimation();
		
		xuetiao.style.display = "block";
			
	}
   
    var c1 = document.getElementById("collect1");
	c1.onclick = function(){
		
		rc1.style.animation = "collect 1s forwards linear normal 1";
		rc1.style.webkitAnimation = "collect 1s forwards linear normal 1";
		
		star.style.animation = "star 1s forwards linear normal 1";
		star.style.webkitAnimation = "star 1s forwards linear normal 1";
        
        book.style.animation = "bookScale 1s normal linear 1 forwards";
        book.style.webkitAnimation = "bookScale 1s normal linear 1 forwards";

        w1.style.display = "none";

        rating.style.animation = "opacity 1s 1 linear forwards normal ";
        rating.style.webkitAnimation = "opacity 1s 1 linear forwards normal ";

        sr.style.animation = "opacity 1s 1 linear forwards normal ";
        sr.style.webkitAnimation = "opacity 1s 1 linear forwards normal ";

        rewardBG.style.animation = "opacity 1s 1 linear forwards normal ";
        rewardBG.style.webkitAnimation = "opacity 1s 1 linear forwards normal ";

        tut.style.animation = "opacity 1s 1 linear forwards normal ";
        tut.style.webkitAnimation = "opacity 1s 1 linear forwards normal ";

        collect1.style.animation = "scaleCB 0.3s normal linear 1 forwards ";
        collect1.style.webkitAnimation = "scaleCB 0.3s normal linear 1 forwards ";

        var non3 = "none";
			document.getElementById('gashapon').style.display = non3;
            doTimer(
			600,20,function(steps){
						non3 = non3 - (1 / steps);
						document.getElementById('gashapon').style.display = non3;				
						},
			function(){
						document.getElementById('gashapon').style.display = "block";										
						GashaponAnimation();
					}				
            );

        bar2.style.display = "block";
        xuetiao.style.display = "block";

	}

	function charge() {
		energy = energy += 10;
		bar.style.width = energy + "%";
		console.log(energy);
		if (energy >= 50) {
			count += 1;
			energy = 0;
			console.log(energy);
			bar.style.width = energy + "%";
			
			chargebar.style.display = "none";
			
			openEgg();
		}
		if (count === 0) {
			val = 0.05;
		}else if (count === 1) {
			val = 0.07;
		}else if (count === 2) {
			val = 0.1;
		}
		
		if (energy >= 25 && cracked === 0) {
			eggCrack();
		}
	}
	







		
		
		
		
		
		
		
		
		
		
		
		
		
	var butterflyArray = [
	                        'b1.png',
							// 'b2.png',
							'b3.png',
							// 'b4.png',
							'b5.png',
							// 'b6.png',
							'b7.png',
							// 'b8.png',
							'b9.png',
							// 'b10.png',
							'b11.png',
							'b12.png'
	                     ];	
		for(i=0; i < butterflyArray.length; i++)
	    {	 
		    if(i < butterflyArray.length)
		    {
			     var butterflyImage = document.createElement("IMG");
			     butterflyImage.setAttribute("src", butterflyArray[i]);	
			     butterflyImage.setAttribute("class","butterfly");
			     butterfly.appendChild(butterflyImage);
		    }
	    }	
	var renderButterfly;
	function ButterflyAnimation(){
		var myIndex = 0;			
		var butterflyImage = document.getElementsByClassName("butterfly");		
		loopButterfly();
		
		function loopButterfly(){
			var i;
			for (i=0;i<butterflyImage.length;i++)
			{
				butterflyImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > butterflyImage.length){}
			butterflyImage[myIndex-1].style.display = "block";
			renderButterfly = setTimeout(loopButterfly,150);			
			 
			if (myIndex === 6){
				myIndex = 0;
			}		
		}
	} 
	
    	for(i=0; i < butterflyArray.length; i++)
	    {	 
		    if(i < butterflyArray.length)
		    {
			     var butterfly2Image = document.createElement("IMG");
			     butterfly2Image.setAttribute("src", butterflyArray[i]);	
			     butterfly2Image.setAttribute("class","butterfly2");
			     butterfly2.appendChild(butterfly2Image);
		    }
	    }	
	var renderButterfly2;
	function Butterfly2Animation(){
		var myIndex = 0;			
		var butterfly2Image = document.getElementsByClassName("butterfly2");		
		loopButterfly2();
		
		function loopButterfly2(){
			var i;
			for (i=0;i<butterfly2Image.length;i++)
			{
				butterfly2Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > butterfly2Image.length){}
			butterfly2Image[myIndex-1].style.display = "block";
			renderButterfly2 = setTimeout(loopButterfly2,80);			
			 
			if (myIndex === 6){
				myIndex = 0;
			}		
		}
	} 
		
	var cbArray = [
	                'cb1.png',
					'cb2.png',
					'cb3.png',
					'cb4.png',
					'cb5.png',
					'cb6.png',
					'cb7.png',
					'cb8.png'
	              ];		
		for(i=0; i < cbArray.length; i++)
	    {	 
		    if(i < cbArray.length)
		    {
			     var cbImage = document.createElement("IMG");
			     cbImage.setAttribute("src", cbArray[i]);	
			     cbImage.setAttribute("class","cb");
			     cb.appendChild(cbImage);
		    }
	    }
	var renderCB;
	function CBAnimation(){
		var myIndex = 0;			
		var cbImage = document.getElementsByClassName("cb");		
		loopCB();
		
		function loopCB(){
			var i;
			for (i=0;i<cbImage.length;i++)
			{
				cbImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > cbImage.length){}
			cbImage[myIndex-1].style.display = "block";
			renderCB = setTimeout(loopCB,130);			
			 
			if (myIndex === 7){
				myIndex = 0;
			}		
		}
	} 
		
	var gashaponArray = [ 
	                        'g0.png',
							'g4.png',
							'g8.png',
							'g12.png',
							'g16.png',
							'g20.png',
							'g24.png',
							'g28.png',
							'g32.png',
							'g36.png',
							'g40.png',
							'g44.png',
							'g48.png',
							'g52.png',
							'g56.png',
							'g60.png',
							'g62.png'
						];	
	    for(i=0; i < gashaponArray.length; i++)
	    {	 
		    if(i < gashaponArray.length)
		    {
			     var gashaponImage = document.createElement("IMG");
			     gashaponImage.setAttribute("src", gashaponArray[i]);	
			     gashaponImage.setAttribute("class","gashapon");
			     gashapon.appendChild(gashaponImage);
		    }
	    }	
	var renderGashapon;
	function GashaponAnimation(){
		var myIndex = 0;			
		var gashaponImage = document.getElementsByClassName("gashapon");		
		loopGashapon();
		
		function loopGashapon(){
			var i;
			for (i=0;i<gashaponImage.length;i++)
			{
				gashaponImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > gashaponImage.length){}
			gashaponImage[myIndex-1].style.display = "block";
			renderGashapon = setTimeout(loopGashapon,30);			
			 
			if (myIndex === 16){
				clearTimeout(renderGashapon);
			}		
		}
	} 
		
	var firstClickArray = [
	                        'g64.png',
							'g68.png',
							'g72.png',
							'g76.png',
							'g80.png',
							'g84.png',
							'g88.png'
		              ];	
		for(i=0; i < firstClickArray.length; i++)
	    {	 
		    if(i < firstClickArray.length)
		    {
			     var firstImage = document.createElement("IMG");
			     firstImage.setAttribute("src", firstClickArray[i]);	
			     firstImage.setAttribute("class","fgashapon");
			     fgashapon.appendChild(firstImage);
		    }
	    }
	var renderFirstGashapon;
	function FirstGashaponAnimation(){
		var myIndex = 0;			
		var firstImage = document.getElementsByClassName("fgashapon");		
		loopFirstGashapon();
		
		function loopFirstGashapon(){
			var i;
			for (i=0;i<firstImage.length;i++)
			{
				firstImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > firstImage.length){}
			firstImage[myIndex-1].style.display = "block";
			renderFirstGashapon = setTimeout(loopFirstGashapon,30);			
			 
			if (myIndex === 6){
				clearTimeout(renderFirstGashapon);
			}		
		}
	} 
		
	var thirdClickArray = [
	                        'g114.png',
							'g116.png',
							'g118.png',
							'g120.png',
							'g122.png',
							'g126.png',
							'g130.png',
							'g134.png',
							'g138.png',
							'g142.png',
							'g146.png',
							'g150.png',
							'g154.png',
							'g158.png',
							'g162.png',
							'g166.png',
							'g170.png',
							'g174.png',
							'g178.png',
							'g182.png',
							'g186.png',
							'g190.png',
							'g194.png',
							'g198.png',
							'g202.png',
							'g206.png',
							'g210.png',
							'g214.png',
							'g215.png'
	                      ];	
		for(i=0; i < thirdClickArray.length; i++)
	    {	 
		    if(i < thirdClickArray.length)
		    {
			     var thirdImage = document.createElement("IMG");
			     thirdImage.setAttribute("src", thirdClickArray[i]);	
			     thirdImage.setAttribute("class","tgashapon");
			     tgashapon.appendChild(thirdImage);
		    }
	    }
	var renderThirdGashapon;
	function ThirdGashaponAnimation(){
		var myIndex = 0;			
		var thirdImage = document.getElementsByClassName("tgashapon");		
		loopThirdGashapon();
		
		function loopThirdGashapon(){
			var i;
			for (i=0;i<thirdImage.length;i++)
			{
				thirdImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > thirdImage.length){}
			thirdImage[myIndex-1].style.display = "block";
			renderThirdGashapon = setTimeout(loopThirdGashapon,80);			
			 
			if (myIndex === 28){
				clearTimeout(renderThirdGashapon);
				tgashapon.style.display = "none";
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
	 
	 