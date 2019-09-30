const APIKEY = '4ddc41225fe319768d3bbc7ffd07412f';

export function getWeather(city) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)
    .then(res => res.json())
}