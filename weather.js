  `use strict`


const container = document.querySelector('.container');
const search = document.querySelector('.search_box button');
const weatherBox = document.querySelector('.weather_box');
const weatherDetails = document.querySelector('.weather_details');
const error404 = document.querySelector('.not_found')

search.addEventListener('click',() => {
    const APIkey = '8b50bb88133ad6fda215d17d779ea295'
    const city = document.querySelector('.search_box input').value

    if (city == '')
    return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response => response.json()).then(json => {
        if (json.cod == '404'){
            container.style.height = '400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }
        container.style.height = '555px';
        weatherBox.classList.add('active');
        weatherDetails.classList.add('active');
        error404.classList.remove('active' );

        const image = document.querySelector('.weather_box img');
        const temperature = document.querySelector('.temperature');
        const description = document.querySelector('.weather_box .description');
        const humidity = document.querySelector(' .humidity span');
        const wind = document.querySelector('.wind span'); 

        switch(json.weather[0].main){
                case 'Rain':
                image.src = 'rain.svg';
                break;
                                           
               case 'Cloud':
               image.src = 'cloud.svg';
               break;
                
               case 'Mist':
               image.src = 'mist.svg';
               break;

               case 'Snow':
                image.src = 'snow.svg';
                break;

                case 'Night':
                    image.src = 'nighttime.png';
                    break;

                case 'Haze':
                image.src = 'haze.svg';
                break;

                case 'Clear':
                    image.src = 'clear.svg';
                    break;

                case 'Storm':
                image.src = 'storm.svg';
                break;
        }
        temperature.innerHTML = `${parseInt(json.main.temp)}°C`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`
        
        
    });
});