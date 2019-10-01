import axios from 'axios'
const APIKEY = '0f57a1f3c5014cc4b254f888f22c32b9';


export function getWeather(city) {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)
    
}