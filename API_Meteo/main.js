const api = {
    key: "4a6499fa7e0311dda7fdd31673209c0d",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keycode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
}

function dateBuilder (d) {
    let months = ["Jannuary", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonths()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}