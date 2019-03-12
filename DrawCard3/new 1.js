    //开卷轴	
	var KaiJuanZhouArray = [
	                            'J00001.png',
								'J00005.png',
								'J00009.png',
								'J00013.png',
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
			renderKaiJuanZhou = setTimeout(loopKaiJuanZhou,40);			
			 
			if (myIndex === 6){
				clearTimeout(renderKaiJuanZhou);	
			}		
		}
	} 
		
	//关卷轴
    var xJuanZhouArray = [
	                         'Z00001.png',
						     'Z00005.png',
						     'Z00009.png',
						     'Z00013.png',
						     'Z00017.png',
						     'Z00020.png'
	                     ];	
		for(i=0; i < xJuanZhouArray.length; i++)
	    {	 
		    if(i <xJuanZhouArray.length)
		    {
			     var xJuanZhouImage = document.createElement("IMG");
			     xJuanZhouImage.setAttribute("src", xJuanZhouArray[i]);	
			     xJuanZhouImage.setAttribute("class","KaiJuanZhou");
			     KaiJuanZhou.appendChild(xJuanZhouImage);
		    }
	    }				
	var renderxJuanZhou;
	function xJuanZhouAnimation(){
		var myIndex = 0;			
		var xJuanZhouImage = document.getElementsByClassName("KaiJuanZhou");		
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
			renderxJuanZhou = setTimeout(loopxJuanZhou,40);			
			 
			if (myIndex === 6){
				clearTimeout(renderxJuanZhou);	
			}		
		}
	} 
							
	//风铃
	var FengLingArray = [
	                        'FL00000.png',
							'FL00030.png',
							'FL00089.png'
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
			renderFengLing = setTimeout(loopFengLing,40);			
			 
			if (myIndex === 2){
				myIndex=0;	
			}		
		}
	} 
	
	/**纯css**/
    //召唤键
    var callButtonArray = [
	                        'C00067.png',
							'C00069.png',
							'C00071.png',
							'C00073.png'
	                      ];	
		for(i=0; i < callButtonArray.length; i++)
	    {	 
		    if(i < callButtonArray.length)
		    {
			     var callButtonImage = document.createElement("IMG");
			     callButtonImage.setAttribute("src", callButtonArray[i]);	
			     callButtonImage.setAttribute("class","callButton");
			     callButton.appendChild(callButtonImage);
		    }
	    }		
	var renderCallButton;
	function CallButtonAnimation(){
		var myIndex = 0;			
		var CallButtonImage = document.getElementsByClassName("callButton");		
		loopCallButton();
		
		function loopCallButton(){
			var i;
			for (i=0;i<CallButtonImage.length;i++)
			{
				CallButtonImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > CallButtonImage.length){}
			CallButtonImage[myIndex-1].style.display = "block";
			renderCallButton = setTimeout(loopCallButton,40);			
			 
			if (myIndex === 2){
				callButton.style.display = "none";
			}		
		}
	} 
	
   	//ShockWave
	var ShockWaveArray = [
	                         'SW00294.png',
						     'SW00302.png',
						     'SW00310.png',
						     'SW00312.png'
	                      ];
		for(i=0; i < ShockWaveArray.length; i++)
	    {	 
		    if(i < ShockWaveArray.length)
		    {
			     var ShockWaveImage = document.createElement("IMG");
			     ShockWaveImage.setAttribute("src", ShockWaveArray[i]);	
			     ShockWaveImage.setAttribute("class","shockWave");
			     shockWave.appendChild(ShockWaveImage);
		    }
	    }		
	var renderShockWave;
	function ShockWaveAnimation(){
		var myIndex = 0;			
		var ShockWaveImage = document.getElementsByClassName("shockWave");		
		loopShockWave();
		
		function loopShockWave(){
			var i;
			for (i=0;i < ShockWaveImage.length;i++)
			{
				ShockWaveImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > ShockWaveImage.length){}
			ShockWaveImage[myIndex-1].style.display = "block";
			renderShockWave = setTimeout(loopShockWave,40);			
			 
			if (myIndex === 2){
				shockWave.style.display = "none";
			}		
		}
	} 
	
    //火焰特效
	var fireArray = [
	                    'FEB00030.png',
						'FEB00034.png',
						'FEB00039.png',
						'FEB00041.png'
	                ];
		for(i=0; i < fireArray.length; i++)
	    {	 
		    if(i < fireArray.length)
		    {
			     var FireImage = document.createElement("IMG");
			     FireImage.setAttribute("src", fireArray[i]);	
			     FireImage.setAttribute("class","fire");
			     fire.appendChild(FireImage);
		    }
	    }					  
	var renderFire;
	function FireAnimation(){
		var myIndex = 0;			
		var FireImage = document.getElementsByClassName("fire");		
		loopFire();
		
		function loopFire(){
			var i;
			for (i=0;i < FireImage.length;i++)
			{
				FireImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > FireImage.length){}
			FireImage[myIndex-1].style.display = "block";
			renderFire = setTimeout(loopFire,40);			
			 
			if (myIndex === 2){
				fire.style.display = "none";
			}		
		}
	} 	
		
	//边框
    var borderArray = [
	                    '417.png',
						'449.png',
						'481.png',
						'510.png'
	                  ];	
		for(i=0; i < borderArray.length; i++)
	    {	 
		    if(i < borderArray.length)
		    {
			     var borderImage = document.createElement("IMG");
			     borderImage.setAttribute("src", borderArray[i]);	
			     borderImage.setAttribute("class","border");
			     border.appendChild(borderImage);
		    }
	    }	
	var renderBorder;
	function FireAnimation(){
		var myIndex = 0;			
		var borderImage = document.getElementsByClassName("border");		
		loopBorder();
		
		function loopBorder(){
			var i;
			for (i=0;i < borderImage.length;i++)
			{
				borderImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > borderImage.length){}
			borderImage[myIndex-1].style.display = "block";
			renderBorder = setTimeout(loopBorder,40);			
			 
			if (myIndex === 4){
				myIndex = 0;
			}		
		}
	} 	

    //咒符
	var ZhouFuArray = [
	                    'zf0.png',
						'zf1.png',
						'zf2.png',
						'zf3.png',
						'zf4.png',
						'zf5.png',
						'zf6.png',
						'zf7.png',
						'zf8.png',
						'zf9.png',
						'zf10.png', 
						'zf11.png',
						'zf12.png',
						'zf13.png',
						'zf14.png',
						'zf15.png',
						'zf16.png',
						'zf17.png',
						'zf18.png',
						'zf19.png',
						'zf20.png', 
						'zf21.png',
						'zf22.png',
						'zf23.png',
						'zf24.png',
						'zf25.png',
						'zf26.png',
						'zf27.png',
						'zf28.png',
						'zf29.png',
						'zf30.png', 
						'zf31.png',
						'zf32.png',
						'zf33.png',
						'zf34.png',
						'zf35.png',
						'zf36.png',
						'zf37.png',
						'zf38.png',
						'zf39.png',
						'zf40.png', 
	                  ];
		for(i=0; i < ZhouFuArray.length; i++)
	    {	 
		    if(i < ZhouFuArray.length)
		    {
			     var ZhouFuImage = document.createElement("IMG");
			     ZhouFuImage.setAttribute("src", ZhouFuArray[i]);	
			     ZhouFuImage.setAttribute("class","ZhouFu");
			     ZhouFu.appendChild(ZhouFuImage);
		    }
	    }		
	var renderZhouFu;
	function ZhouFuAnimation(){
		var myIndex = 0;			
		var ZhouFuImage = document.getElementsByClassName("ZhouFu");		
		loopZhouFu();
		
		function loopZhouFu(){
			var i;
			for (i=0;i < ZhouFuImage.length;i++)
			{
				ZhouFuImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > ZhouFuImage.length){}
			ZhouFuImage[myIndex-1].style.display = "block";
			renderZhouFu = setTimeout(loopZhouFu,40);			
			 
			if (myIndex === 4){
				myIndex = 0;
			}		
		}
	} 	

  	//咒符1
	var F1Array = [
	                'F100102.png',
					'F100107.png',
					'F100116.png',
					'F100123.png'
	              ];
		for(i=0; i < F1Array.length; i++)
	    {	 
		    if(i < F1Array.length)
		    {
			     var ZhouFu1Image = document.createElement("IMG");
			     ZhouFu1Image.setAttribute("src", F1Array[i]);	
			     ZhouFu1Image.setAttribute("class","ZhouFu1");
			     ZhouFu1.appendChild(ZhouFu1Image);
		    }
	    }
	var renderZhouFu1;
	function ZhouFu1Animation(){
		var myIndex = 0;			
		var ZhouFu1Image = document.getElementsByClassName("ZhouFu1");		
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
			renderZhouFu1 = setTimeout(loopZhouFu1,40);			
			 
			if (myIndex === 4){
				myIndex = 0;
			}		
		}
	} 	

  	//咒符2	
	var F2Array = [
	                'F200102.png',
					'F200107.png',
					'F200116.png',
					'F200123.png'
	              ];	
		for(i=0; i < F2Array.length; i++)
	    {	 
		    if(i < F2Array.length)
		    {
			     var ZhouFu2Image = document.createElement("IMG");
			     ZhouFu2Image.setAttribute("src", F2Array[i]);	
			     ZhouFu2Image.setAttribute("class","ZhouFu2");
			     ZhouFu2.appendChild(ZhouFu2Image);
		    }
	    }
	var renderZhouFu2;
	function ZhouFu2Animation(){
		var myIndex = 0;			
		var ZhouFu2Image = document.getElementsByClassName("ZhouFu2");		
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
			renderZhouFu2 = setTimeout(loopZhouFu2,40);			
			 
			if (myIndex === 4){
				myIndex = 0;
			}		
		}
	} 	
	
	//咒符3
	var F3Array = [
	                'F300102.png',
					'F300107.png',
					'F300116.png',
					'F300124.png'
	              ];	
    	for(i=0; i < F3Array.length; i++)
	    {	 
		    if(i < F3Array.length)
		    {
			     var ZhouFu3Image = document.createElement("IMG");
			     ZhouFu3Image.setAttribute("src", F3Array[i]);	
			     ZhouFu3Image.setAttribute("class","ZhouFu3");
			     ZhouFu3.appendChild(ZhouFu3Image);
		    }
	    }	
	var renderZhouFu3;
	function ZhouFu3Animation(){
		var myIndex = 0;			
		var ZhouFu3Image = document.getElementsByClassName("ZhouFu3");		
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
			renderZhouFu3 = setTimeout(loopZhouFu3,40);			
			 
			if (myIndex === 4){
				myIndex = 0;
			}		
		}
	} 	
		
	//烟花
    var FireWorksArray = [
	                        'F00000.png',
							'F00008.png',
							'F00016.png',
							'F00024.png',
							'F00032.png'
	                     ];	
		for(i=0; i < FireWorksArray.length; i++)
	    {	 
		    if(i < FireWorksArray.length)
		    {
			     var FireWorksImage = document.createElement("IMG");
			     FireWorksImage.setAttribute("src", FireWorksArray[i]);	
			     FireWorksImage.setAttribute("class","fireworks");
			     fireworks.appendChild(FireWorksImage);
		    }
	    }	
	var renderFireWorks;
	function FireWorksAnimation(){
		var myIndex = 0;			
		var FireWorksImage = document.getElementsByClassName("fireworks");		
		loopFireWorks();
		
		function loopFireWorks(){
			var i;
			for (i=0;i < FireWorksImage.length;i++)
			{
				FireWorksImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > FireWorksImage.length){}
			FireWorksImage[myIndex-1].style.display = "block";
			renderFireWorks = setTimeout(loopFireWorks,40);			
			 
			if (myIndex === 4){
				myIndex = 0;
			}		
		}
	} 	
		
	//咒符数量
    var AmountArray = [
	                    'M3.png',
						'M2.png',
						'M1.png',
						'M0.png'
	                  ];	
		for(i=0; i < AmountArray.length; i++)
	    {	 
		    if(i < AmountArray.length)
		    {
			     var amountImage = document.createElement("IMG");
			     amountImage.setAttribute("src", AmountArray[i]);	
			     amountImage.setAttribute("class","amount");
			     amount.appendChild(amountImage);
		    }
	    }	
	var renderAmount;
	function AmountAnimation(){
		var myIndex = 0;			
		var amountImage = document.getElementsByClassName("amount");		
		loopAmount();
		
		function loopAmount(){
			var i;
			for (i=0;i < amountImage.length;i++)
			{
				amountImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > amountImage.length){}
			amountImage[myIndex-1].style.display = "block";
			renderAmount = setTimeout(loopAmount,40);			
			 
			if (myIndex === 4){
				myIndex = 0;
			}		
		}
	} 	
	
    //召唤阵
    var callArray = [
	                   'zhz1.png',
					   'zhz2.png',
					   'zhz3.png',
					   'zhz4.png',
					   'zhz5.png',
					   'zhz6.png',
					   'zhz7.png',
					   'zhz8.png',
					   'zhz9.png',
					   'zhz10.png', 
					   
					   'zhz11.png',
					   'zhz12.png',
					   'zhz13.png',
					   'zhz14.png',
					   'zhz15.png',
					   'zhz16.png',
					   'zhz17.png',
					   'zhz18.png',
					   'zhz19.png',
					   'zhz20.png',
					   
					   'zhz21.png',
					   'zhz22.png',
					   'zhz23.png',
					   'zhz24.png',
					   'zhz25.png',
					   'zhz26.png',
					   'zhz27.png',
					   'zhz28.png',
					   'zhz29.png',
					   'zhz30.png',
					   
					   'zhz31.png',
					   'zhz32.png',
					   'zhz33.png',
					   'zhz34.png',
					   'zhz35.png',
					   'zhz36.png',
					   'zhz37.png',
					   'zhz38.png',
					   'zhz39.png',
					   'zhz40.png',
					   
					   'zhz41.png',
					   'zhz42.png',
					   'zhz43.png',
					   'zhz44.png',
					   'zhz45.png',
					   'zhz46.png',
					   'zhz47.png',
					   'zhz48.png',
					   'zhz49.png',
					   'zhz50.png',
					   
					   'zhz51.png',
					   'zhz52.png',
					   'zhz53.png',
					   'zhz54.png',
					   'zhz55.png',
					   'zhz56.png',
					   'zhz57.png',
					   'zhz58.png',
					   'zhz59.png',
					   'zhz60.png', 
					   
					   'zhz61.png',
					   'zhz62.png',
					   'zhz63.png',
					   'zhz64.png',
					   'zhz65.png',
					   'zhz66.png',
					   'zhz67.png',
					   'zhz68.png',
					   'zhz69.png',
					   'zhz70.png', 
					   
					   'zhz71.png',
					   'zhz72.png',
					   'zhz73.png',
					   'zhz74.png',
					   'zhz75.png',
					   'zhz76.png',
					   'zhz77.png',
					   'zhz78.png',
					   'zhz79.png',
					   'zhz80.png',
					   
					   'zhz81.png',
					   'zhz82.png',
					   'zhz83.png',
					   'zhz84.png',
					   'zhz85.png',
					   'zhz86.png',
					   'zhz87.png',
					   'zhz88.png',
					   'zhz89.png',
					   'zhz90.png',
					   
					   'zhz91.png',
					   'zhz92.png',
					   'zhz93.png',
					   'zhz94.png',
					   'zhz95.png',
					   'zhz96.png',
					   'zhz97.png',
					   'zhz98.png',
					   'zhz99.png',
					   'zhz100.png',
					   
					   'zhz101.png',
					   'zhz102.png',
					   'zhz103.png',
					   'zhz104.png',
					   'zhz105.png',
					   'zhz106.png',
					   'zhz107.png',
					   'zhz108.png',
					   'zhz109.png'
	                ];	
		for(i=0; i < callArray.length; i++)
	    {	 
		    if(i < callArray.length)
		    {
			     var callImage = document.createElement("IMG");
			     callImage.setAttribute("src", callArray[i]);	
			     callImage.setAttribute("class","call");
			     call.appendChild(callImage);
		    }
	    }
	var renderCall;
	function callAnimation(){
		var myIndex = 0;			
		var callImage = document.getElementsByClassName("call");		
		loopCall();
		
		function loopCall(){
			var i;
			for (i=0;i < callImage.length;i++)
			{
				callImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > callImage.length){}
			callImage[myIndex-1].style.display = "block";
			renderCall = setTimeout(loopCall,40);			
			 
			if (myIndex === 109){
				myIndex = 0;
			}		
		}
	} 	
		
	//amount
    var amountArray = [  
                       	'M2.png',
						'M1.png',
						'M0.png'                    
	];	