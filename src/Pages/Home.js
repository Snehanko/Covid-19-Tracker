import React, { Component } from 'react'
import CountryData from './Home Components/CountryData';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>  
                <CountryData />
            </div>
        )
    }
}

export default Home;
