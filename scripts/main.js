		 

		 window.onload = function() {
		 	console.log(document.getElementById("current-time").style.animation );
            gettime();


            function gettime(){
                var c = document.getElementById("current-time");
				var d = new Date ();

			

			setInterval(updateTime,1000);

			function updateTime(){

				function roundOfTime(time){

				if (time<10){
				time = '0' + time;
				}

				return time;
			}

				var d = new Date ();
				var hours = d.getHours();
				var minutes = roundOfTime(d.getMinutes());
				var seconds = roundOfTime(d.getSeconds());

				if(hours >= 23 && hours <=6){

					document.getElementById("message").innerHTML = "Good night 🌙";
				}else{
					document.getElementById("message").innerHTML = "Seize the day ☀️";
				}

				c.innerHTML = hours + ":" + minutes+":" + seconds;
			}

				
			};
		}

var value = 1;

function changeColor(){

if(value==1){
	document.getElementById("current-time").style.animation ="glowGreen 2s ease-in-out infinite alternate";
	value=2;
	return value;
}else{

	document.getElementById("current-time").style.animation ="glowPink 2s ease-in-out infinite alternate";
	value=1;
}	
   return value;
}

var stars = document.querySelectorAll(".star");
 
for (var i = 0; i < 8; i++) {
  var star = stars[i];
 
  star.keyframes = [{
    opacity: 0,
  }, {
    opacity: 1,
  }, {
    opacity: 0,
  }];
 
  star.animProps = {
    duration: 2000 + 500 * i,
    easing: "ease-in-out",
    iterations: Infinity
  }
 
  var animationPlayer = star.animate(star.keyframes, star.animProps);
}

