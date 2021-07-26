import React, { Component } from 'react'
import axios from 'axios';

export default class State extends Component {
    constructor(props){
        super(props);
            this.sate={}
    }

    async componentDidMount(){
        try{
            const res= await axios.get(`https://api.covid19india.org/state_district_wise.json`);
        }
        catch(err){console.log(err)}
    }

    render() {
        console.log(this.props.match.params.state);
        return (
            <div>
                <h3>State Data:</h3>
                <p>{this.props.name}</p>
                <div>
                <form>
                        <input type="text" label="Enter State Name" />
                        <input type="submit" name="submit" label="View Districts" />
                </form>
                </div>    
            </div>
        )
    }
}
