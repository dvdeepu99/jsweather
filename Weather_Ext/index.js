const apiKey="0e90df4aff2ecc394204503893576990";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

function WindDir(deg){
    if (deg>=348){
        return "N";
    }
    else if (deg>326){
        return "NNW"
    }
    else if (deg>303){
        return "NW"
    }
    else if (deg>281){
        return "WNW"
    }
    else if (deg>258){
        return "W"
    }
    else if (deg>236){
        return "WSW"
    }
    else if (deg>213){
        return "SW"
    }
    else if (deg>191){
        return "SSW"
    }
    else if (deg>168){
        return "S"
    }
    else if (deg>146){
        return "SSE"
    }
    else if (deg>123){
        return "SE"
    }
    else if (deg>101){
        return "ESE"
    }
    else if (deg>78){
        return "E"
    }
    else if (deg>56){
        return "ENE"
    }
    else if (deg>33){
        return "NE"
    }
    else if (deg>11){
        return "NNE"
    }
    else if (deg>0){
        return "N"
    }
    else{
        return "Couldn't fetch"
    }
}

async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
        }
        else {
        var data = await response.json();
        var wdir = data.wind.deg;
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "icons/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "icons/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "icons/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "icons/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "icons/mist.png";
        }

        document.querySelector(".weather").style.display = "block"; 
        document.querySelector(".error").style.display = "none";
        document.querySelector(".direct").innerHTML = WindDir(wdir);
    }
    }   
searchbtn.addEventListener("click", ()=>{ 
    checkWeather(searchbox.value);
})