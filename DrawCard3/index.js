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
		
		zf1.style.display = "none";
        zf2.style.display = "none";
        zf3.style.display = "none";
		
		sizeData(newWidth,newHeight);
		resize(newWidth,newHeight);	
		
		FengLingAnimation();
		KaiJuanZhouAnimation();			
	}
		
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
		
	var start = document.getElementById("tstart");
	start.onclick = function(){
   
        call.style.display = "none";
      
	    tstart.style.display = "none";
   
        zf1.style.display = "none";
        zf2.style.display = "none";
        zf3.style.display = "none";

        call2.style.display = "block";		
		call2.style.animationPlayState = "running";
		call2.style.webkitAnimationPlayState = "running";
		
		KaiJuanZhou.style.animation = "opacity 0.1s 1 linear forwards";
		KaiJuanZhou.style.webkitAnimation = "opacity 0.1s 1 linear forwards";
		
		xJuanZhou.style.display = "block";
       	xJuanZhouAnimation();
	 
	    begin();
	}
	
	function begin(){
		
		bg.style.animationPlayState = "running";
		bg.style.webkitAnimationPlayState = "running";
		
		
		var non = "none";
			document.getElementById('zhoufu1').style.display = non;
            doTimer(
			1400,20,function(steps){
						non = non - (1 / steps);
						document.getElementById('zhoufu1').style.display = non;				
						},
			function(){
						document.getElementById('zhoufu1').style.display = "block";										
						ZhouFu1Animation();
					}				
            );	
		
		var non1 = "none";
			document.getElementById('zhoufu2').style.display = non1;
            doTimer(
			1400,20,function(steps){
						non1 = non1 - (1 / steps);
						document.getElementById('zhoufu2').style.display = non1;				
						},
			function(){
						document.getElementById('zhoufu2').style.display = "block";										
						ZhouFu2Animation();
					}				
            );	
		
		var non2 = "none";
			document.getElementById('zhoufu3').style.display = non2;
            doTimer(
			1400,20,function(steps){
						non2 = non2 - (1 / steps);
						document.getElementById('zhoufu3').style.display = non2;				
						},
			function(){
						document.getElementById('zhoufu3').style.display = "block";										
						ZhouFu3Animation();
					}				
            );
			
		var non3 = "none";
			document.getElementById('Fu1').style.display = non3;
            doTimer(
			1700,20,function(steps){
						non3 = non3 - (1 / steps);
						document.getElementById('Fu1').style.display = non3;				
						},
			function(){
						document.getElementById('Fu1').style.display = "block";										
					    Fu1Animation();
					}				
            );
		
		var non4 = "none";
			document.getElementById('Fu2').style.display = non4;
            doTimer(
			1700,20,function(steps){
						non4 = non4 - (1 / steps);
						document.getElementById('Fu2').style.display = non4;				
						},
			function(){
						document.getElementById('Fu2').style.display = "block";										
						Fu2Animation();
					}				
            );
			
		var non5 = "none";
			document.getElementById('Fu3').style.display = non5;
            doTimer(
			1700,20,function(steps){
						non5 = non5 - (1 / steps);
						document.getElementById('Fu3').style.display = non5;				
						},
			function(){
						document.getElementById('Fu3').style.display = "block";										
						Fu3Animation();
					}				
            );	
       
        zf1.style.display = "block";
        zf2.style.display = "block";
        zf3.style.display = "block";
			
		word.style.display = "block";
		word.style.animation = "scale 0.5s normal linear infininte forwards 2.2s";
		word.style.webkitAnimation = "scale 0.5s normal linear infininte forwards 2.2s";
	}
	
	var choose1 = document.getElementById('zf1');
	choose1.onclick = function(){
		
		Fu2.style.animation = "opacity 0.5s linear forwards normal 1 0.1s";
		Fu2.style.webkitAnimation = "opacity 0.5s linear forwards normal 1 0.1s";
		
		Fu3.style.animation = "opacity 0.5s linear forwards normal 1 0.1s";
		Fu3.style.webkitAnimation = "opacity 0.5s linear forwards normal 1 0.1s";

		zf1.style.display = "none";
		zf2.style.display = "none";
		zf3.style.display = "none";

		Fu1.style.animation = "chooseFZ1 0.5s linear forwards normal 1"; 
		Fu1.style.webkitAnimation = "chooseFZ1 0.5s linear forwards normal 1"; 
	     
		word.style.animation = "opacity 0.5s 1 linear forwards normal"; 
		word.style.webkitAnimation = "opacity 0.5s 1 linear forwards normal"; 
		 
		    var non7 = "none";
			document.getElementById('callfz1').style.display = non7;
            doTimer(
			350,20,function(steps){
						non7 = non7 - (1 / steps);
						document.getElementById('callfz1').style.display = non7;				
						},
			function(){
						document.getElementById('callfz1').style.display = "block";										
						callfz1Animation();
					}				
            );	

            var non7a = "none";
			document.getElementById('feb1').style.display = non7a;
            doTimer(
			650,20,function(steps){
						non7a = non7a - (1 / steps);
						document.getElementById('feb1').style.display = non7a;				
						},
			function(){
						document.getElementById('feb1').style.display = "block";										
						feb1Animation();
					}				
            );

			var non7b = "none";
			document.getElementById('feb2').style.display = non7b;
            doTimer(
			750,20,function(steps){
						non7b = non7b - (1 / steps);
						document.getElementById('feb2').style.display = non7b;				
						},
			function(){
						document.getElementById('feb2').style.display = "block";										
						feb2Animation();
					}						
			);
			
			var non7c = "none";
			document.getElementById('feb3').style.display = non7c;
            doTimer(
			850,20,function(steps){
						non7c = non7c - (1 / steps);
						document.getElementById('feb3').style.display = non7c;				
						},
			function(){
						document.getElementById('feb3').style.display = "block";										
						feb3Animation();
					}			
			);
			
			var non7d = "none";
			document.getElementById('feb4').style.display = non7d;
            doTimer(
			950,20,function(steps){
						non7d = non7d - (1 / steps);
						document.getElementById('feb4').style.display = non7d;				
						},
			function(){
						document.getElementById('feb4').style.display = "block";										
						feb4Animation();
					}			
			);
			
			var non7e = "none";
			document.getElementById('feb5').style.display = non7e;
            doTimer(
			1050,20,function(steps){
						non7e = non7e - (1 / steps);
						document.getElementById('feb5').style.display = non7e;				
						},
			function(){
						document.getElementById('feb5').style.display = "block";										
						feb5Animation();
					}			
			);
			
			var non7f = "none";
			document.getElementById('feb6').style.display = non7f;
            doTimer(
			1150,20,function(steps){
						non7f = non7f - (1 / steps);
						document.getElementById('feb6').style.display = non7f;				
						},
			function(){
						document.getElementById('feb6').style.display = "block";										
						feb6Animation();
					}			
			);
			
			var non7g = "none";
			document.getElementById('feb7').style.display = non7g;
            doTimer(
			1250,20,function(steps){
						non7g = non7g - (1 / steps);
						document.getElementById('feb7').style.display = non7g;				
						},
			function(){
						document.getElementById('feb7').style.display = "block";										
						feb7Animation();
					}			
			);
			
			var non7h = "none";
			document.getElementById('feb8').style.display = non7h;
            doTimer(
			1350,20,function(steps){
						non7h = non7h - (1 / steps);
						document.getElementById('feb8').style.display = non7h;				
						},
			function(){
						document.getElementById('feb8').style.display = "block";										
						feb8Animation();
					}			
			);
			
		    var non9 = "none";
			document.getElementById('shockWave1').style.display = non9;
            doTimer(
			2400,20,function(steps){
						non9 = non9 - (1 / steps);
						document.getElementById('shockWave1').style.display = non9;				
						},
			function(){
						document.getElementById('shockWave1').style.display = "block";										
						shockWave1Animation();
					}			
			);	
			
	}
	
	
	var choose2 = document.getElementById("zf2");
	choose2.onclick = function(){
		
		Fu1.style.animation = "opacity 0.5s linear forwards normal 1 0.1s";
		Fu1.style.webkitAnimation = "opacity 0.5s linear forwards normal 1 0.1s";
		
		Fu3.style.animation = "opacity 0.5s linear forwards normal 1 0.1s";
		Fu3.style.webkitAnimation = "opacity 0.5s linear forwards normal 1 0.1s";
		
		zf1.style.display = "none";
		zf2.style.display = "none";
		zf3.style.display = "none";
		
		Fu2.style.animation = "chooseFZ2 0.3s linear forwards normal 1"; 
		Fu2.style.webkitAnimation = "chooseFZ2 0.3s linear forwards normal 1"; 
	    
        word.style.animation = "opacity 0.5s 1 linear forwards normal"; 
		word.style.webkitAnimation = "opacity 0.5s 1 linear forwards normal"; 
		
		var non6 = "none";
			document.getElementById('callfz2').style.display = non6;

			doTimer(
			150,20,function(steps){
						non6 = non6 - (1 / steps);
						document.getElementById('callfz2').style.display = non6;				
						},
			function(){
						document.getElementById('callfz2').style.display = "block";										
						callfz2Animation();
					}				
            );	
			
		
			
	}
	
	
	var choose3 = document.getElementById('zf3');
	choose3.onclick = function(){
		
		Fu1.style.animation = "opacity 0.5s linear forwards normal 1 0.1s";
		Fu1.style.webkitAnimation = "opacity 0.5s linear forwards normal 1 0.1s";
		
		Fu2.style.animation = "opacity 0.5s linear forwards normal 1 0.1s";
		Fu2.style.webkitAnimation = "opacity 0.5s linear forwards normal 1 0.1s";

		zf1.style.display = "none";
		zf2.style.display = "none";
		zf3.style.display = "none";

		Fu3.style.animation = "chooseFZ3 0.5s linear forwards normal 1"; 
		Fu3.style.webkitAnimation = "chooseFZ3 0.5s linear forwards normal 1"; 
	
	    word.style.animation = "opacity 0.5s 1 linear forwards normal"; 
		word.style.webkitAnimation = "opacity 0.5s 1 linear forwards normal"; 
			
	    var non8 = "none";
			document.getElementById('callfz3').style.display = non8;
            doTimer(
			350,20,function(steps){
						non8 = non8 - (1 / steps);
						document.getElementById('callfz3').style.display = non8;				
						},
			function(){
						document.getElementById('callfz3').style.display = "block";										
						callfz3Animation();
					}				
            );	
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	//风铃
	var FengLingArray = [   
	                        '0.png',
							'8.png',
							'16.png',
							'23.png',
							'33.png',
							'42.png',
							'50.png',
							'57.png',
							'65.png',
							'72.png',
							'80.png',
							'88.png',
							'95.png',
							'105.png',
							'114.png',
							'120.png'
	                    ];
		for(i=0; i < FengLingArray.length; i++)
	    {	 
		    if(i < FengLingArray.length)
		    {
			     var FengLingImage = document.createElement("IMG");
			     FengLingImage.setAttribute("src", FengLingArray[i]);	
			     FengLingImage.setAttribute("class","fengling");
			     fengling.appendChild(FengLingImage);
		    }
	    }	
	var renderFengLing;
	function FengLingAnimation(){
		var myIndex = 0;			
		var FengLingImage = document.getElementsByClassName("fengling");		
		loopFengLing();
		
		function loopFengLing(){
			var i;
			for (i=0;i<FengLingImage.length;i++)
			{
				FengLingImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > FengLingImage.length){}
			FengLingImage[myIndex-1].style.display = "block";
			renderFengLing = setTimeout(loopFengLing,210);			
			 
			if (myIndex === 16){
				myIndex=0;	
			}		
		}
	} 
	
	//开卷轴	
	var KaiJuanZhouArray = [
	                            'J00001.png',
								'J00009.png',
								'J00017.png',
								'J00024.png'
	                       ];
		for(i=0; i < KaiJuanZhouArray.length; i++)
	    {	 
		    if(i <KaiJuanZhouArray.length)
		    {
			     var KaiJuanZhouImage = document.createElement("IMG");
			     KaiJuanZhouImage.setAttribute("src", KaiJuanZhouArray[i]);	
			     KaiJuanZhouImage.setAttribute("class","KaiJuanZhou");
			     KaiJuanZhou.appendChild(KaiJuanZhouImage);
		    }
	    }	
    var renderKaiJuanZhou;
	function KaiJuanZhouAnimation(){
		var myIndex = 0;			
		var KaiJuanZhouImage = document.getElementsByClassName("KaiJuanZhou");		
		loopKaiJuanZhou();
		
		function loopKaiJuanZhou(){
			var i;
			for (i=0;i<KaiJuanZhouImage.length;i++)
			{
				KaiJuanZhouImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > KaiJuanZhouImage.length){}
			KaiJuanZhouImage[myIndex-1].style.display = "block";
			renderKaiJuanZhou = setTimeout(loopKaiJuanZhou,80);			
			 
			if (myIndex === 4){
				clearTimeout(renderKaiJuanZhou);	
			}		
		}
	} 
			
	//关卷轴
    var xJuanZhouArray = [
	                         'Z00001.png',
						     'Z00009.png',
						     'Z00017.png',
						     'Z00020.png'
	                     ];	
		for(i=0; i < xJuanZhouArray.length; i++)
	    {	 
		    if(i <xJuanZhouArray.length)
		    {
			     var xJuanZhouImage = document.createElement("IMG");
			     xJuanZhouImage.setAttribute("src", xJuanZhouArray[i]);	
			     xJuanZhouImage.setAttribute("class","xJuanZhou");
			     xJuanZhou.appendChild(xJuanZhouImage);
		    }
	    }				
	var renderxJuanZhou;
	function xJuanZhouAnimation(){
		var myIndex = 0;			
		var xJuanZhouImage = document.getElementsByClassName("xJuanZhou");		
		loopxJuanZhou();
		
		function loopxJuanZhou(){
			var i;
			for (i=0;i<xJuanZhouImage.length;i++)
			{
				xJuanZhouImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > xJuanZhouImage.length){}
			xJuanZhouImage[myIndex-1].style.display = "block";
			renderxJuanZhou = setTimeout(loopxJuanZhou,80);			
			 
			if (myIndex === 4){
				clearTimeout(renderxJuanZhou);	
				xJuanZhou.style.display = "none";
			}		
		}
	} 
			
	//咒符1
	var F1Array = [
	                'f11.png',
					'f19.png',
					'f117.png',
					'f122.png'
	              ];
		for(i=0; i < F1Array.length; i++)
	    {	 
		    if(i < F1Array.length)
		    {
			     var ZhouFu1Image = document.createElement("IMG");
			     ZhouFu1Image.setAttribute("src", F1Array[i]);	
			     ZhouFu1Image.setAttribute("class","zhoufu1");
			     zhoufu1.appendChild(ZhouFu1Image);
		    }
	    }
	var renderZhouFu1;
	function ZhouFu1Animation(){
		var myIndex = 0;			
		var ZhouFu1Image = document.getElementsByClassName("zhoufu1");		
		loopZhouFu1();
		
		function loopZhouFu1(){
			var i;
			for (i=0;i < ZhouFu1Image.length;i++)
			{
				ZhouFu1Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > ZhouFu1Image.length){}
			ZhouFu1Image[myIndex-1].style.display = "block";
			renderZhouFu1 = setTimeout(loopZhouFu1,90);			
			 
			if (myIndex === 4){
				clearTimeout(renderZhouFu1);
				zhoufu1.style.display = "none";
			}		
		}
	} 	

  	//咒符2	
	var F2Array = [
	                'f21.png',
					'f29.png',
					'f217.png',
					'f222.png'
	              ];	
		for(i=0; i < F2Array.length; i++)
	    {	 
		    if(i < F2Array.length)
		    {
			     var ZhouFu2Image = document.createElement("IMG");
			     ZhouFu2Image.setAttribute("src", F2Array[i]);	
			     ZhouFu2Image.setAttribute("class","zhoufu2");
			     zhoufu2.appendChild(ZhouFu2Image);
		    }
	    }
	var renderZhouFu2;
	function ZhouFu2Animation(){
		var myIndex = 0;			
		var ZhouFu2Image = document.getElementsByClassName("zhoufu2");		
		loopZhouFu2();
		
		function loopZhouFu2(){
			var i;
			for (i=0;i < ZhouFu2Image.length;i++)
			{
				ZhouFu2Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > ZhouFu2Image.length){}
			ZhouFu2Image[myIndex-1].style.display = "block";
			renderZhouFu2 = setTimeout(loopZhouFu2,90);			
			 
			if (myIndex === 4){
				clearTimeout(renderZhouFu2);
				zhoufu2.style.display = "none";
			}		
		}
	} 	
	
	//咒符3
	var F3Array = [
	                'f31.png',
					'f39.png',
					'f317.png',
					'f323.png'
	              ];	
    	for(i=0; i < F3Array.length; i++)
	    {	 
		    if(i < F3Array.length)
		    {
			     var ZhouFu3Image = document.createElement("IMG");
			     ZhouFu3Image.setAttribute("src", F3Array[i]);	
			     ZhouFu3Image.setAttribute("class","zhoufu3");
			     zhoufu3.appendChild(ZhouFu3Image);
		    }
	    }	
	var renderZhouFu3;
	function ZhouFu3Animation(){
		var myIndex = 0;			
		var ZhouFu3Image = document.getElementsByClassName("zhoufu3");		
		loopZhouFu3();
		
		function loopZhouFu3(){
			var i;
			for (i=0;i < ZhouFu3Image.length;i++)
			{
				ZhouFu3Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > ZhouFu3Image.length){}
			ZhouFu3Image[myIndex-1].style.display = "block";
			renderZhouFu3 = setTimeout(loopZhouFu3,90);			
			 
			if (myIndex === 4){
				clearTimeout(renderZhouFu3);
				zhoufu3.style.display = "none";
			}		
		}
	} 	
	
	//咒符
	var ZhouFuArray = [
						'zf1.png',
						'zf5.png',
						'zf9.png',
						'zf13.png',
						'zf17.png',
						'zf21.png',
						'zf25.png',
                        'zf29.png',						
						'zf33.png',
						'zf37.png',
						'zf40.png', 
	                  ];
		
	/**咒符1 飘动**/
		for(i=0; i < ZhouFuArray.length; i++)
	    {	 
		    if(i < ZhouFuArray.length)
		    {
			     var ZhouFuImage = document.createElement("IMG");
			     ZhouFuImage.setAttribute("src", ZhouFuArray[i]);	
			     ZhouFuImage.setAttribute("class","Fu1");
			     Fu1.appendChild(ZhouFuImage);
		    }
	    }		
	var renderFu1;
	function Fu1Animation(){
		var myIndex = 0;			
		var ZhouFuImage = document.getElementsByClassName("Fu1");		
		loopFu1();
		
		function loopFu1(){
			var i;
			for (i=0;i < ZhouFuImage.length;i++)
			{
				ZhouFuImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > ZhouFuImage.length){}
			ZhouFuImage[myIndex-1].style.display = "block";
			renderFu1 = setTimeout(loopFu1,150);			
			 
			if (myIndex === 11){
				myIndex = 0;
			}		
		}
	} 	

    /**咒符2 飘动**/
        for(j=0; j < ZhouFuArray.length; j++)
	    {	 
		    if(j < ZhouFuArray.length)
		    {
			     var ZhouFuImage = document.createElement("IMG");
			     ZhouFuImage.setAttribute("src", ZhouFuArray[j]);	
			     ZhouFuImage.setAttribute("class","Fu2");
			     Fu2.appendChild(ZhouFuImage);
		    }
	    }		
	var renderFu2;
	function Fu2Animation(){
		var myIndex = 0;			
		var ZhouFuImage = document.getElementsByClassName("Fu2");		
		loopFu2();
		
		function loopFu2(){
			var j;
			for (j=0;j < ZhouFuImage.length;j++)
			{
				ZhouFuImage[j].style.display="none";
			}
			myIndex++;
			if (myIndex > ZhouFuImage.length){}
			ZhouFuImage[myIndex-1].style.display = "block";
			renderFu2 = setTimeout(loopFu2,150);			
			 
			if (myIndex === 11){
				myIndex = 0;
			}		
		}
	} 	
  	
	/**咒符3 飘动**/
        for(k=0; k< ZhouFuArray.length; k++)
	    {	 
		    if(k < ZhouFuArray.length)
		    {
			     var ZhouFuImage = document.createElement("IMG");
			     ZhouFuImage.setAttribute("src", ZhouFuArray[k]);	
			     ZhouFuImage.setAttribute("class","Fu3");
			     Fu3.appendChild(ZhouFuImage);
		    }
	    }		
	var renderZhouFu3;
	function Fu3Animation(){
		var myIndex = 0;			
		var ZhouFuImage = document.getElementsByClassName("Fu3");		
		loopFu3();
		
		function loopFu3(){
			var k;
			for (k=0; k< ZhouFuImage.length;k++)
			{
				ZhouFuImage[k].style.display="none";
			}
			myIndex++;
			if (myIndex > ZhouFuImage.length){}
			ZhouFuImage[myIndex-1].style.display = "block";
			renderFu3 = setTimeout(loopFu3,150);			
			 
			if (myIndex === 11){
				myIndex = 0;
			}		
		}
	} 	
  	  		
	//召唤阵
    var callArray = [
	                   'zhz1.png',
					   'zhz9.png', 
					   'zhz17.png',
					   'zhz25.png',
					   'zhz33.png',
					   'zhz41.png',
					   'zhz49.png',
					   'zhz57.png',
					   'zhz65.png',
					   'zhz73.png',
					   'zhz81.png',
					   'zhz89.png',
					   'zhz97.png',
					   'zhz105.png'
	                ];	
		
	/**第1张咒符 法阵**/
		for(i=0; i < callArray.length; i++)
	    {	 
		    if(i < callArray.length)
		    {
			     var callfz1Image = document.createElement("IMG");
			     callfz1Image.setAttribute("src", callArray[i]);	
			     callfz1Image.setAttribute("class","callfz1");
			     callfz1.appendChild(callfz1Image);
		    }
	    }		
	var rendercallfz1;
	function callfz1Animation(){
		var myIndex = 0;			
		var callfz1Image = document.getElementsByClassName("callfz1");		
		loopcallfz1();
		
		function loopcallfz1(){
			var i;
			for (i=0;i < callfz1Image.length;i++)
			{
				callfz1Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > callfz1Image.length){}
			callfz1Image[myIndex-1].style.display = "block";
			rendercallfz1 = setTimeout(loopcallfz1,170);			
			 
			if (myIndex === 14){
				clearTimeout(rendercallfz1);	
				// callfz1.style.display = "none";
			}		
		}
	} 	
    
	/**第2张咒符 法阵**/
	    for(j=0; j < callArray.length; j++)
	    {	 
		    if(j < callArray.length)
		    {
			     var callfz2Image = document.createElement("IMG");
			     callfz2Image.setAttribute("src", callArray[j]);	
			     callfz2Image.setAttribute("class","callfz2");
			     callfz2.appendChild(callfz2Image);
		    }
	    }		
	var rendercallfz2;
	function callfz2Animation(){
		var myIndex = 0;			
		var callfz2Image = document.getElementsByClassName("callfz2");		
		loopcallzf2();
		
		function loopcallzf2(){
			var j;
			for (j=0;j < callfz2Image.length;j++)
			{
				callfz2Image[j].style.display="none";
			}
			myIndex++;
			if (myIndex > callfz2Image.length){}
			callfz2Image[myIndex-1].style.display = "block";
			rendercallfz2 = setTimeout(loopcallzf2,170);			
			 
			if (myIndex === 14){
				clearTimeout(rendercallfz2);	
				// callfz2.style.display = "none";
			}		
		}
	} 	

    /**第3张咒符 法阵**/
	    for(k=0; k < callArray.length; k++)
	    {	 
		    if(k < callArray.length)
		    {
			     var callfz3Image = document.createElement("IMG");
			     callfz3Image.setAttribute("src", callArray[k]);	
			     callfz3Image.setAttribute("class","callfz3");
			     callfz3.appendChild(callfz3Image);
		    }
	    }		
	var rendercallfz3;
	function callfz3Animation(){
		var myIndex = 0;			
		var callfz3Image = document.getElementsByClassName('callfz3');		
		loopcallzf3();
		
		function loopcallzf3(){
			var k;
			for (k=0; k<callfz3Image.length; k++)
			{
				callfz3Image[k].style.display="none";
			}
			myIndex++;
			if (myIndex > callfz3Image.length){}
			callfz3Image[myIndex-1].style.display = "block";
			rendercallfz3 = setTimeout(loopcallzf3,170);			
			 
			if (myIndex === 14){
				clearTimeout(rendercallfz3);	
				// callfz3.style.display = "none";
			}		
		}
	}

	//火焰特效
    var fireArray = [
                        'feb1.png',
						'feb5.png',
						'feb9.png',
						'feb13.png'
                    ];    
		
	/**火焰特效 1-1**/
		for(i=0; i < fireArray.length; i++)
	    {	 
		    if(i < fireArray.length)
		    {
			     var feb1Image = document.createElement("IMG");
			     feb1Image.setAttribute("src", fireArray[i]);	
			     feb1Image.setAttribute("class","feb1");
			     feb1.appendChild(feb1Image);
		    }
	    }		
	var renderfeb1;
	function feb1Animation(){
		var myIndex = 0;			
		var feb1Image = document.getElementsByClassName("feb1");		
		loopfeb1();
		
		function loopfeb1(){
			var i;
			for (i=0;i < feb1Image.length;i++)
			{
				feb1Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > feb1Image.length){}
			feb1Image[myIndex-1].style.display = "block";
			renderfeb1 = setTimeout(loopfeb1,200);			
			 
			if (myIndex === 4){
				myIndex=0;
			}		
		}
	} 	
  	  
	/**火焰特效 1-2**/
		for(i=0; i < fireArray.length; i++)
	    {	 
		    if(i < fireArray.length)
		    {
			     var feb2Image = document.createElement("IMG");
			     feb2Image.setAttribute("src", fireArray[i]);	
			     feb2Image.setAttribute("class","feb2");
			     feb2.appendChild(feb2Image);
		    }
	    }		
	var renderfeb2;
	function feb2Animation(){
		var myIndex = 0;			
		var feb2Image = document.getElementsByClassName("feb2");		
		loopfeb2();
		
		function loopfeb2(){
			var i;
			for (i=0;i < feb2Image.length;i++)
			{
				feb2Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > feb2Image.length){}
			feb2Image[myIndex-1].style.display = "block";
			renderfeb2 = setTimeout(loopfeb2,200);			
			 
			if (myIndex === 4){
				myIndex=0;
			}		
		}
	} 	
  	  	
	/**火焰特效 1-3**/
		for(i=0; i < fireArray.length; i++)
	    {	 
		    if(i < fireArray.length)
		    {
			     var feb3Image = document.createElement("IMG");
			     feb3Image.setAttribute("src", fireArray[i]);	
			     feb3Image.setAttribute("class","feb3");
			     feb3.appendChild(feb3Image);
		    }
	    }		
	var renderfeb3;
	function feb3Animation(){
		var myIndex = 0;			
		var feb3Image = document.getElementsByClassName("feb3");		
		loopfeb3();
		
		function loopfeb3(){
			var i;
			for (i=0;i < feb3Image.length;i++)
			{
				feb3Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > feb3Image.length){}
			feb3Image[myIndex-1].style.display = "block";
			renderfeb3 = setTimeout(loopfeb3,200);			
			 
			if (myIndex === 4){
				myIndex=0;
			}		
		}
	} 	
  	  	
	/**火焰特效 1-4**/
		for(i=0; i < fireArray.length; i++)
	    {	 
		    if(i < fireArray.length)
		    {
			     var feb4Image = document.createElement("IMG");
			     feb4Image.setAttribute("src", fireArray[i]);	
			     feb4Image.setAttribute("class","feb4");
			     feb4.appendChild(feb4Image);
		    }
	    }		
	var renderfeb4;
	function feb4Animation(){
		var myIndex = 0;			
		var feb4Image = document.getElementsByClassName("feb4");		
		loopfeb4();
		
		function loopfeb4(){
			var i;
			for (i=0;i < feb4Image.length;i++)
			{
				feb4Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > feb4Image.length){}
			feb4Image[myIndex-1].style.display = "block";
			renderfeb4 = setTimeout(loopfeb4,200);			
			 
			if (myIndex === 4){
				myIndex=0;
			}		
		}
	} 	
  	  			
	/**火焰特效 1-5**/
		for(i=0; i < fireArray.length; i++)
	    {	 
		    if(i < fireArray.length)
		    {
			     var feb5Image = document.createElement("IMG");
			     feb5Image.setAttribute("src", fireArray[i]);	
			     feb5Image.setAttribute("class","feb5");
			     feb5.appendChild(feb5Image);
		    }
	    }		
	var renderfeb5;
	function feb5Animation(){	
		var myIndex = 0;			
		var feb5Image = document.getElementsByClassName("feb5");		
		loopfeb5();
		
		function loopfeb5(){
			var i;
			for (i=0;i < feb5Image.length;i++)
			{
				feb5Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > feb5Image.length){}
			feb5Image[myIndex-1].style.display = "block";
			renderfeb5 = setTimeout(loopfeb5,200);			
			 
			if (myIndex === 4){
				myIndex=0;
			}		
		}
	} 		
		
	/**火焰特效 1-6**/
		for(i=0; i < fireArray.length; i++)
	    {	 
		    if(i < fireArray.length)
		    {
			     var feb6Image = document.createElement("IMG");
			     feb6Image.setAttribute("src", fireArray[i]);	
			     feb6Image.setAttribute("class","feb6");
			     feb6.appendChild(feb6Image);
		    }
	    }		
	var renderfeb6;
	function feb6Animation(){	
		var myIndex = 0;			
		var feb6Image = document.getElementsByClassName("feb6");		
		loopfeb6();
		
		function loopfeb6(){
			var i;
			for (i=0;i < feb6Image.length;i++)
			{
				feb6Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > feb6Image.length){}
			feb6Image[myIndex-1].style.display = "block";
			renderfeb6 = setTimeout(loopfeb6,200);			
			 
			if (myIndex === 4){
				myIndex=0;
			}		
		}
	} 		
			
	/**火焰特效 1-7**/
		for(i=0; i < fireArray.length; i++)
	    {	 
		    if(i < fireArray.length)
		    {
			     var feb7Image = document.createElement("IMG");
			     feb7Image.setAttribute("src", fireArray[i]);	
			     feb7Image.setAttribute("class","feb7");
			     feb7.appendChild(feb7Image);
		    }
	    }		
	var renderfeb7;
	function feb7Animation(){	
		var myIndex = 0;			
		var feb7Image = document.getElementsByClassName("feb7");		
		loopfeb7();
		
		function loopfeb7(){
			var i;
			for (i=0;i < feb7Image.length;i++)
			{
				feb7Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > feb7Image.length){}
			feb7Image[myIndex-1].style.display = "block";
			renderfeb7 = setTimeout(loopfeb7,200);			
			 
			if (myIndex === 4){
				myIndex=0;
			}		
		}
	} 		
	
	/**火焰特效 1-8**/
		for(i=0; i < fireArray.length; i++)
	    {	 
		    if(i < fireArray.length)
		    {
			     var feb8Image = document.createElement("IMG");
			     feb8Image.setAttribute("src", fireArray[i]);	
			     feb8Image.setAttribute("class","feb8");
			     feb8.appendChild(feb8Image);
		    }
	    }		
	var renderfeb8;
	function feb8Animation(){	
		var myIndex = 0;			
		var feb8Image = document.getElementsByClassName("feb8");		
		loopfeb8();
		
		function loopfeb8(){
			var i;
			for (i=0;i < feb8Image.length;i++)
			{
				feb8Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > feb8Image.length){}
			feb8Image[myIndex-1].style.display = "block";
			renderfeb8 = setTimeout(loopfeb8,200);			
			 
			if (myIndex === 4){
				myIndex=0;
			}		
		}
	} 		
			
	//ShockWave
	var ShockWaveArray = [
	                         'sw1.png',
						     'sw9.png',
						     'sw17.png',
						     'sw23.png'
	                      ];
		
	/**Shock Wave 1**/	
		for(i=0; i < ShockWaveArray.length; i++)
	    {	 
		    if(i < ShockWaveArray.length)
		    {
			     var ShockWave1Image = document.createElement("IMG");
			     ShockWave1Image.setAttribute("src", ShockWaveArray[i]);	
			     ShockWave1Image.setAttribute("class","shockWave1");
			     shockWave1.appendChild(ShockWave1Image);
		    }
	    }		
	var renderShockWave1;
	function shockWave1Animation(){
		var myIndex = 0;			
		var ShockWave1Image = document.getElementsByClassName("shockWave1");		
		loopShockWave1();
		
		function loopShockWave1(){
			var i;
			for (i=0;i < ShockWave1Image.length;i++)
			{
				ShockWave1Image[i].style.display="none";
			}
			myIndex++;
			if (myIndex > ShockWave1Image.length){}
			ShockWave1Image[myIndex-1].style.display = "block";
			renderShockWave1 = setTimeout(loopShockWave1,50);			
			 
			if (myIndex === 4){
				clearTimeout(renderShockWave1);
				shockWave1.style.display = "none";
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