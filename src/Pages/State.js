import React, { Component } from 'react'
import axios from 'axios';

export default class State extends Component {
    constructor(props){
        super(props);

    }

    render(props) {

        return (
            <div>
                <h3>State Data:</h3>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
