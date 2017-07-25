$(document).ready(function(){
	var x=$(".header-img").height() + $("#countdownSection").height();
	$(".navbar").affix({
        offset: { 
           top: $(".header-img").outerHeight(true) + $("#countdownSection").outerHeight(true)
        }
    });

	//Countdown js
	// Set the date we're counting down to
	var countDownDate = new Date("Sep 5, 2017 15:37:25").getTime();
	// Update the count down every 1 second
	var x = setInterval(function() {
	 // Get todays date and time
	 var now = new Date().getTime();
	 // Find the distance between now an the count down date
	 var distance = countDownDate - now;
	 // Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	$(".cd-timer #cDays").text(days);
	$(".cd-timer #cHours").text(hours);
	$(".cd-timer #cMins").text(minutes);
	$(".cd-timer #cSecs").text(seconds);

	// If the count down is finished, write some text 
	if (distance < 0) {
	    clearInterval(x);
	    document.getElementById("demo").innerHTML = "EXPIRED";
	}
	}, 1000);
});