(function($, document, window){
    $(document).ready(function(){
        // Clone navigation for mobile menu
        $(".mobile-navigation").append($(".main-navigation .menu").clone());

        // Toggle mobile menu
        $(".menu-toggle").click(function(){
            $(".mobile-navigation").slideToggle();
        });

        // Map setup (only if element exists)
        var map = $(".map");
        if(map.length){
            var latitude = map.data("latitude");
            var longitude = map.data("longitude");

            map.gmap3({
                map:{
                    options:{
                        center: [latitude, longitude],
                        zoom: 15,
                        scrollwheel: false
                    }
                },
                marker:{
                    latLng: [latitude, longitude],
                }
            });
        }
    });
})(jQuery, document, window);

// Safe CSRF Token declaration (no duplicate)
if (typeof csrftoken === 'undefined') {
    const csrftoken = getCookie('csrftoken');
}

// Cookie function
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// Safe fetch usage
fetch('/your-url/', {
    method: 'POST',
    headers: {
        'X-CSRFToken': getCookie('csrftoken'),
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({your: 'data'})
});


// Weather Background Image Handler
document.addEventListener("DOMContentLoaded", () => {
    const weatherBox = document.getElementById('weather-info');
    const weatherCondition = document.querySelector(".forecast-content span:last-child")?.textContent?.toLowerCase();
    const hera = document.querySelector(".hera");

    // Weather condition-based image
    if (hera && weatherCondition) {
        if (weatherCondition.includes("rain")) {
            console.log("Setting rain background");
            hera.style.backgroundImage = "url('/static/images/rain.jpg')";
        } else if (weatherCondition.includes("clear")) {
            console.log("Setting clear background");
            hera.style.backgroundImage = "url('/static/images/sunny.jpg')";
        } else if (weatherCondition.includes("cloud")) {
            console.log("Setting cloud background");
            hera.style.backgroundImage = "url('/static/images/cloudy.jpg')";
        } else if (weatherCondition.includes("snow")) {
            console.log("Setting snow background");
            hera.style.backgroundImage = "url('/static/images/snow.jpg')";
        } else {
            console.log("Setting default banner background");
            hera.style.backgroundImage = "url('/static/images/banner.png')";
        }
    }

    // Temperature-based image (fallback or additional logic)
    if (weatherBox) {
        const temp = parseInt(weatherBox.dataset.temp);
        if (!isNaN(temp)) {
            if (temp <= 15) {
                console.log("Setting cold background");
                hera.style.backgroundImage = "url('/static/images/cold.jpg')";
            } else if (temp > 15 && temp <= 30) {
                console.log("Setting warm background");
                hera.style.backgroundImage = "url('/static/images/mild.jpg')";
            } else {
                console.log("Setting hot background");
                hera.style.backgroundImage = "url('/static/images/hot.jpg')";
            }
        }
    }
});
