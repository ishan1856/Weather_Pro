const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9a76585e72msh8b56832393daa4ep163eb1jsnacb1d298fdc9',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    },
};

const place_name = document.getElementById('place_name'); // Get the place_name div element

const getweather = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);

            

            // Other data rendering
            humidity.innerHTML = response.humidity;
            max_temp.innerHTML = response.max_temp;
            min_temp.innerHTML = response.min_temp;
            temp.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            wind_speed.innerHTML = response.wind_speed;
        })
        .catch(err => console.error(err));
}

const submit = document.getElementById('submit'); // Assuming you have an input element with id 'submit'


submit.addEventListener("click", (e) => {
    e.preventDefault();
    getweather(city.value);
})

// Fetch weather data for the default city when the page loads
getweather("Delhi");
