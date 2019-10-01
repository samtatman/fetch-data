import React from 'react'
import CityCard from './CityCard'

class List extends React.Component {

    



    render() {
        const {cities} = this.props
        return (
            <ul>
          {cities.map((city, i) => {
              return (
    <CityCard key= {city} city = {city} index={i}/> )
})}  
</ul>
            )
    }
}

export default List