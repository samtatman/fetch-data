import React from 'react';
import Header from './Components/Header'
import Form from './Components/Form'
import List from './Components/List'
import './App.css';


class App extends React.Component {
  state = {
    cities: []
  }
  addCity = (city) => {
    this.setState(currentState => {
      return {cities: [...currentState.cities, city]}
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className='grid-container'>
        <div className='title'>
        <Header/>
        <Form addCity={this.addCity} />
        </div>
        <List cities ={this.state.cities} />
      </div>
    )

  }

}

export default App;
