var time1 = 0;
					var time2 = 0;
function hello(){
	console.log("hello");
}
function waves(){
				var canvasNode = document.querySelector("#content > .list > .Team canvas");
				if(canvasNode.getContext('2d')){
					var ctx = canvasNode.getContext("2d");
					//ctx.font="60px sans-serif";
					//ctx.strokeText("s行硅谷",100,100);
					
					
					var flag=0;
					
					var arr=[];
					
					//往arr中注入随机元
					
					
					
					//Create new circle
					time1 = setInterval(function(){
						var r = 2 + 10*Math.random();
						var x = Math.random()*canvasNode.width;
						var y = canvasNode.height - r;
						
						
						var red = Math.round(Math.random()*255);
						var blue = Math.round(Math.random()*255);
						var green = Math.round(Math.random()*255);
						var alp = 1;
						
						var deg = 0;
						var startX = x;
						var startY = y;
						var step = Math.random()*5 +10;
						//console.log(x,y,r);
						arr.push( {x:x, y:y, r:r,
						red:red, blue:blue, green:green, alp:alp,
						deg:deg,
						startX:startX, startY, startY,
						step:step});
					},50);
					
					
					//Render circle
					time2 = setInterval(function(){
						
						ctx.clearRect(0,0, canvasNode.width, canvasNode.height);
						//console.log(arr);
						
						//update coordinates
						for(var i = 0; i < arr.length; i++){
							arr[i].deg += 20;	
							arr[i].y = arr[i].startY - arr[i].step*arr[i].deg*Math.PI/180 ;
							arr[i].x = arr[i].startX + arr[i].step*Math.sin(arr[i].deg*Math.PI/180) ;
							
							if(arr[i].y <= 0){
								arr.splice(i,1);
							}
							
							/*
							if(arr[i].r <= 50){
								arr[i].r++;
							}
							arr[i].alp -= 0.01;
							if(arr[i].alp <= 0){
								arr.splice(i,1);
							}*/
						}
						
						//draw
						for(var i = 0; i < arr.length; i++){
							
							ctx.save();
							ctx.beginPath();
							
							
							ctx.fillStyle="rgba(" + arr[i].red + "," + arr[i].blue + "," + arr[i].green + "," + arr[i].alp + ")";
							ctx.arc(arr[i].x,arr[i].y,arr[i].r,0,360*Math.PI/180);
							ctx.fill();
							
							ctx.restore();
						}
						//ctx.strokeRect(flag, flag, 100,100);
						
						//ctx.restore();
					},1000/60);
				}
			};