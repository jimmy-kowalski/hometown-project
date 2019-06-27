$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://api.apixu.com/v1/forecast.json?key=c2e17dea92a24ed1991223719180903&q=Belgrade&days=7",
        dataType: 'json',
        success: function (details, status, xhr) {
            console.log(details);
            var weatherInfo = ['Temperatura: ', '°C', 'Pritisak: ', 'mb', 'Vlažnost: ', '%', 'Vetar: ', 'km/h', 'Padavine: ', 'mm'];
            var values = [details.current.temp_c, details.current.pressure_mb, details.current.humidity, details.current.wind_kph, details.current.precip_mm];
            var currentIcon = "https://" + details.current.condition.icon;
            // console.log(currentIcon);

            var i = 0;
            for (var j = 2; j < weatherInfo.length; j += 2) {
                var a = weatherInfo[j] + values[i + 1] + weatherInfo[j + 1];
                i++;
                // console.log(a);

                $('#weather-data').append(`<p class='weather-details'> ${a}</p>`);
            } //end for

            // current weather
            $(".current-weather-icon").attr("src", currentIcon);
            $(".current-temp").text(`${values[0] + weatherInfo[1]}`);
            $(".current-wind").text(`${weatherInfo[6] + values[3] + weatherInfo[7]}`);
            $(".current-precip").text(`${weatherInfo[8] + values[4] + weatherInfo[9]}`);
            $(".current-humidity").text(`${weatherInfo[4] + values[2] + weatherInfo[5]}`);
            $(".current-pressure").text(`${weatherInfo[2] + values[1] + weatherInfo[3]}`);

            // forecast
            var b = 0;
            for (var x = 0; x < Object.keys(details.forecast.forecastday).length; x++) {

                var $date = $(".date");
                var $icon = $(".forecast-icon");
                var $min = $(".min-temp");
                var $max = $(".max-temp");

                $date.eq(b).text(`${Object.values(details.forecast.forecastday)[x+1].date}`);
                $icon.eq(b).attr('src', `https://${Object.values(details.forecast.forecastday)[x + 1].day.condition.icon}`);
                $min.eq(b).text(`min: ${Object.values(details.forecast.forecastday)[x+1].day.mintemp_c}°C`);
                $max.eq(b).text(`max: ${Object.values(details.forecast.forecastday)[x+1].day.maxtemp_c}°C`);
                b++;

            }
        },
        error: function (xhr, status, error) {
            alert('Desila se greška: ' + status);
        }

    });

    // 
    $("#button0").on('click', function () {
        $("#details0").addClass("wow bounceIn").toggleClass("hidden");
    });
    $("#button1").on('click', function () {
        $("#details1").addClass("wow bounceIn").toggleClass("hidden");
    });

});