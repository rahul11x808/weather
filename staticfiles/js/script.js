(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		var map = $(".map");
		var latitude = map.data("latitude");
		var longitude = map.data("longitude");
		if( map.length ){
			
			map.gmap3({
				map:{
					options:{
						center: [latitude,longitude],
						zoom: 15,
						scrollwheel: false
					}
				},
				marker:{
					latLng: [latitude,longitude],
				}
			});
			
		}
	});

	$(window).load(function(){

	});

})(jQuery, document, window);
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');

fetch('/your-url/', {
    method: 'POST',
    headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({your: 'data'})
});


// one type of weather img converter

// document.addEventListener("DOMContentLoaded",()=>{
//     const weatherBox = document.getElementById('weather-info');

//     if (weatherBox) {
//         const weather = weatherBox.dataset.weather.toLowerCase();
//         const temp = parseInt(weatherBox.dataset.temp);

//         if(weather.includes('rain')){
//             document.body.classList.add('rainy');
//         }
//         else if(weather.includes('cloud')){
//             document.body.classList.add('cloudy');
//         }
//         else if(weather.includes('sun')){
//             document.body.classList.add('sunny');
//         }
//         else if(weather.includes('snow')){
//             document.body.classList.add('snowy');
//         }
//         else{
//             document.body.classList.add('clear');
//         }

//         if(temp > 15){
//             document.body.style.backgroundColor = "url('static/images/cold.jpg')";
//         } else if (temp > 15 && temp <= 30) {
//             document.body.style.backgroundImage = "url('/static/images/mild.jpg')";
//         } else {
//             document.body.style.backgroundImage = "url('/static/images/hot.jpg')";
//         }

//     }
//     });


// another type of weather img converter
document.addEventListener("DOMContentLoaded", () => {
    const weatherBox = document.getElementById('weather-info');
    const weatherCondition = document.querySelector(".forecast-content span:last-child")?.textContent?.toLowerCase();
    const hera = document.querySelector(".hera");

    if (hera && weatherCondition) {
        if (weatherCondition.includes("rain")) {
            console.log("Setting rain background");
            hera.style.backgroundImage = "url('/static/images/banner.jpg')";
        } else if (weatherCondition.includes("clear")) {
            console.log("Setting clear background");
            hera.style.backgroundImage = "url('/static/images/banner.jpg')";
        } else if (weatherCondition.includes("cloud")) {
            console.log("Setting cloud background");
            hera.style.backgroundImage = "url('/static/images/banner.jpg')";
        } else if (weatherCondition.includes("snow")) {
            console.log("Setting snow background");
            hera.style.backgroundImage = "url('/static/images/banner.jpg')";
        } else {
            console.log("Setting default background");
            hera.style.backgroundImage = "url('/static/images/banner.png')";
        }
    }

    if (weatherBox) {
        const weather = weatherBox.dataset.weather.toLowerCase();
        const temp = parseInt(weatherBox.dataset.temp);
        const hera = document.querySelector(".hera");

        // Temperature-based background change
        if (temp <= 15) {
            console.log("Setting cold background");
            document.body.style.backgroundImage = "url('/static/images/banner.jpg')";
        } else if (temp > 15 && temp <= 30) {
            console.log("Setting warm background");
            hera.style.backgroundImage = "url('/static/images/warm.jpg')";
        } else {
            console.log("Setting hot background");
            document.body.style.backgroundImage = "url('/static/images/banner.jpg')";
        }
    }
});


// document.addEventListener("DOMContentLoaded", () => {
//     const tempText = document.querySelector(".forecast-content .degree h2")?.textContent;

//     if (tempText) {
//         // Extract number from something like "28°C"
//         const temp = parseFloat(tempText);

//         const hera = document.querySelector(".hera");

//         if (hera && !isNaN(temp)) {
//             if (temp <= 15) {
//                 hera.style.backgroundImage = "url('/static/images/cold.jpg')";
//             } else if (temp > 15 && temp <= 30) {
//                 hera.style.backgroundImage = "url('/static/images/mild.jpg')";
//             } else {
//                 hera.style.backgroundImage = "url('/static/images/hot.jpg')";
//             }
//         }
//     }
// });

