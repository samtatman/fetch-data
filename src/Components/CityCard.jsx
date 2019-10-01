import React from 'react'
import * as api from '../fetchFunctions'

class CityCard extends React.Component {
    state = {
        weather: ''
    }
componentDidMount () {
    const {city} = this.props
     api.getWeather(city).then(({data}) => {
    this.setState({weather:`${data.name}, ${Math.round(data.main.temp - 273)} ºC, ${data.weather[0].main} `})
     
})
}

render () {
    const {index} = this.props
    const ref = ['middle-left', 'middle-centre', 'middle-right', 'bottom-left', 'bottom-centre', 'bottom-right']
    return (<li className='main' id={ref[index]}>{this.state.weather}</li>)

}
}

export default CityCard