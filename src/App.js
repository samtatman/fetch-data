import React from 'react';
import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'
import List from './Components/List'


class App extends React.Component {
  state = {
    cities: []
  }
  addCity = (city) => {
    this.setState(currentState => {
      return {cities: [city, ...currentState.cities]}
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <Form addCity={this.addCity} />
        <List cities ={this.state.cities} />
      </div>
    )

  }

}

export default App;
