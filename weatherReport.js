document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

async function fetchWeather(city) {
    const apiKey = 'a291a9bbd67b97c3328886985343db14'; // suman-generated multiple time still shows 401
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = `${data.main.temp}°C`;
    const description = data.weather[0].description;
    //const iconUrl = `./typescript_playground/JS Weather Application/sky-background-video-conferencing_23-2148639325.avif`;

    document.getElementById('cityName').textContent = cityName;
    document.getElementById('temperature').textContent = temperature;
    document.getElementById('description').textContent = description;
}
