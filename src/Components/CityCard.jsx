import React from 'react'
import * as api from '../fetchFunctions'

class CityCard extends React.Component {
    state = {
        city: '',
        temp: 0,
        weather: ''
    }
componentDidMount () {
    const {city} = this.props
     api.getWeather(city).then(({data}) => {
    this.setState({city: data.name, temp: Math.round(data.main.temp - 273), weather: data.weather[0].main})
     
})
}

render () {
    const {index} = this.props
    const ref = ['middle-left', 'middle-centre', 'middle-right', 'bottom-left', 'bottom-centre', 'bottom-right']
    return (<li className='main' id={ref[index]}>
    <div className={this.state.weather}> <p className='top'>{this.state.city}</p> <p>{this.state.temp} ºC</p>  <p className='bottom'>{this.state.weather}</p></div>
    </li>)

}
}

export default CityCard