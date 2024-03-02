`use strict`


const container = document.querySelector('.container');
const search = document.querySelector('.search_box button');
const weatherBox = document.querySelector('.weather_box');
const weatherDetails = document.querySelector('.weather_details');
const image = document.querySelector('.weather_box img');
const temperature = document.querySelector('.temprature');
const describtion = document.querySelector('.weather_box .describtion');
const humidity = document.querySelector(' .humidity');
const wind = document.querySelector('.wind'); 

const APIkey = '8b50bb88133ad6fda215d17d779ea295'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=nigeria`;

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${APIkey}`);
    let data = await response.json();

   
   

console.log(data)

    // temperature.innerHTML = Math.round(data.main.temp) ;
    humidity.innerHTML = data.main.humidity;
    wind.innerHTML = data.main.speed;
}
