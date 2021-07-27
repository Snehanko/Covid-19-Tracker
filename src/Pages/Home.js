import React,{useState,useEffect,useContext} from 'react';
import {DataContext} from './Home Components/Context';
import axios from 'axios';
import { useHistory } from "react-router-dom";


export default function Home() {

    const [countryData,setCountryData]=useState([]);
    const [stateData]=useContext(DataContext);

    const history = useHistory();

    const getCovidUpdate = async()=>{
               try{  const res=await axios.get('https://api.covid19india.org/data.json');
               setCountryData(res.data.statewise[0]);
                }catch(err){
                    console.log(err);
                }
    }

    useEffect(() => {
            getCovidUpdate();  
    },[])

    function onClick(state){
        history.push(`/${state}`);//Sending Data of District to State.js page 
        
    }

    return (
        <div>
            <h2>India's Current Situation</h2>
            <ul>   
                <li> 
                    <h5>Active Cases</h5>
                    <p>{countryData.active}</p>          
                </li>
                <li> 
                    <h5>Confirmed Cases</h5>
                    <p>{countryData.confirmed}</p>          
                </li>
                <li> 
                    <h5>Deaths Recorded till Date</h5>
                    <p>{countryData.deaths}</p>          
                </li>
                <li> 
                    <h5>Recovered</h5>
                    <p>{countryData.recovered}</p>          
                </li>
                <li> 
                    <h5>Updated On</h5>
                    <p>{countryData.lastupdatedtime}</p>          
                </li>
            </ul>
            <div>
                <h2>State Wise Distribution</h2>
                <table>
                    <thead>
                    <th>State</th>
                    <th>View More</th>
                    </thead>
                    <tbody>
                        {Object.keys(stateData).map(state=> 
                        <tr key={state}>
                            <td>{state}</td>
                            <td><a href="#" onClick={()=>onClick(state)}>View</a></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>    
        </div>
    )
}

