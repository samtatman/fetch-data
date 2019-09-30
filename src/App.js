import React from 'react';
import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'
import * as api from './fetchFunctions'


class App extends React.Component {
  state = {
    cities: []
  }
  addCity = (city) => {
    this.setState(currentState => {
      return [city, ...currentState.cities]
    })
  }
  componentDidMount() {
    api.getWeather()
      .then(res => this.setState({ res }))
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <Form addCity={this.addCity} />
      </div>
    )

  }

}

export default App;
