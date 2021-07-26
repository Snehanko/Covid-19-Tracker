import React, { Component } from 'react'
import axios from 'axios';


export default class State extends Component {

    state={
        stateNames:{},
        stateName:'',
        districtNames:{},
        districtName:''
    };

    stateCovidData=async()=>{
        try{
            const res=await axios.get('https://api.covid19india.org/state_district_wise.json')
            
            this.setState({
                stateNames:res.data
            })
            console.log(this.state.stateNames);


        }catch(err){
            console.log(err);
        }
    }


    componentDidMount(){
        this.stateCovidData();
    }

    onStateChange = (e) =>this.setState({stateName:e.target.value});

    onDistrictChange = (e) =>this.setState({districtName:e.target.value});

    onSubmit = (e)=>{
            e.preventDefault();

            console.log(this.state.stateName);
            console.log(this.state.districtName);


    }

    render() {

        const {stateName,districtName}=this.state;
        return (
            <>
                <h1>State Page</h1>
                <div>
                    <form onClick={this.onSubmit}>
                        <label>Enter Your State Name Here-</label>
                        <input type="text" name="stateName" value={stateName} onChange={this.onStateChange} />
                        <label>Enter Your District Name Here-</label>
                        <input type="text" name="districtName" value={districtName} onChange={this.onDistrictChange} />
                        <input type="submit" name="submit" label="Submit" />
                    </form>
                </div>
                <div>

                </div>
            </>
        )
    }
}
