import React from 'react'
import * as api from '../fetchFunctions'

class CityCard extends React.Component {
    state = {
        weather: ''
    }
componentDidMount () {
    const {city} = this.props
     api.getWeather(city).then(({data}) => {
    this.setState({weather:`City: ${data.name}, Temp: ${data.main.temp - 273} oC, Weather: ${data.weather[0].main} `})
     
})
}

render () {
    return (<li>{this.state.weather}</li>)

}
}

export default CityCard