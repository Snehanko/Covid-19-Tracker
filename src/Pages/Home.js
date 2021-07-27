import React,{useState,useEffect,useContext} from 'react';
import {DataContext} from './Home Components/Context';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './Home.css'



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
        <>
            <div>
                <h1>🔴LIVE</h1>
                <h2>India's Current Situation</h2>
                <div className="container">
                    <ul className="list"> 
                        <li className="list-item"> 
                            <div className="card">  
                                <div className="card-box">
                                    <h5 className="card-name">Active Cases</h5>
                                    <p className="card-data">{countryData.active}</p>
                                </div>
                            </div>          
                        </li>
                        <li className="list-item">  
                            <div className="card">  
                                <div className="card-box">
                                    <h5 className="card-name">Confirmed Cases</h5>
                                    <p className="card-data">{countryData.confirmed}</p>   
                                </div>
                            </div>       
                        </li>
                        <li className="list-item"> 
                            <div className="card">  
                                <div className="card-box">
                                    <h5 className="card-name">Deaths Recorded till Date</h5>
                                    <p className="card-data">{countryData.deaths}</p> 
                                </div>
                            </div>         
                        </li>
                        <li className="list-item"> 
                            <div className="card">  
                                <div className="card-box">
                                    <h5 className="card-name">Recovered</h5>
                                    <p className="card-data">{countryData.recovered}</p>   
                                </div> 
                            </div>      
                        </li>
                        <li className="list-item"> 
                            <div className="card">  
                                <div className="card-box">
                                    <h5 className="card-name">Updated On</h5>
                                    <p className="card-data">{countryData.lastupdatedtime}</p>   
                                </div>
                            </div>           
                        </li>
                    </ul>
                </div>
               
            </div>

            <div>
                <h2>State Wise Distribution</h2>
                <table className="styled-table">
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
      </>       
    )
}