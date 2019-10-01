import React from 'react'
import CityCard from './CityCard'

class List extends React.Component {

    



    render() {
        const {cities} = this.props
        return (
            <ul>
          {cities.map(city => {
              return (
    <CityCard key= {city} city = {city}/> )
})}  
</ul>
            )
    }
}

export default List