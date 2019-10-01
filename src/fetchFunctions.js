import axios from 'axios'
const APIKEY = '4ddc41225fe319768d3bbc7ffd07412f';


export function getWeather(city) {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)
    
}