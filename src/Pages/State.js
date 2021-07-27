import React,{useContext} from 'react'
import {DataContext} from './Home Components/Context';
import {Redirect} from "react-router-dom";
import TableContainer from "../Components/Table";
import './State.css'

export default function State(props) {
    const [stateData]=useContext(DataContext);

    if(stateData.length === 0){ // If user is trying to refresh the page redirect him to the home page
        return <Redirect to="/" />
    }
    const stateName = props.match.params.state;
    const district_list = stateData[stateName].districtData;
    

    return (
        <div className="table-container">
            <h2>{`District Wise Distribution for ${stateName}`}</h2>
               
            <TableContainer data={district_list} name={"District"} stateName ={stateName} />
        </div>
    )
}