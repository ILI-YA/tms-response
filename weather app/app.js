

async function getWeather({
    city, country
}) {
    const YOUR_ACCESS_KEY = '1a586478fdd3974a3746ab47ee1b48da';
    
    const res = await fetch(`http://api.weatherstack.com/current?access_key=${YOUR_ACCESS_KEY}&query="${city} ${country}"`);
    const data = await res.json();
    const { temperature, weather_descriptions, weather_icons, observation_time, wind_dir, wind_speed, pressure } = data.current;
    const { query } = data.request;


    let icon = document.getElementById("icon");
    icon.src = weather_icons;

    document.querySelector(".temperature").textContent = temperature;
    document.querySelector(".location-timezone").textContent = query;
    document.querySelector(".time").textContent = `Time: ${observation_time}`;
    document.querySelector(".temperature-degree").textContent = `Feels like: ${temperature}`;
    document.querySelector(".temperature-description").textContent = `Today is ${weather_descriptions}`;
    document.querySelector(".wind").textContent = `Wind: ${wind_dir}`;
    document.querySelector(".speed").textContent = `Speed: ${wind_speed}`;
    document.querySelector(".pressure").textContent = `Pressure: ${pressure}`;
    
}

btn.onclick = function() {
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    
    getWeather({
    city: city,
    country:  country
    });
}
