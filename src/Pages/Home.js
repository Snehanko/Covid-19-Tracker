import React,{useState,useEffect,useContext} from 'react';
import {DataContext} from './Home Components/Context';
import axios from 'axios';
import {getFormattedNumber} from "../Utility/utility";
import TableContainer from "../Components/Table";
import mask from "../Images/mask-2.png";
import './Home.css';



export default function Home() {

    const [countryData,setCountryData]=useState([]);
    const [stateData]=useContext(DataContext);

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

    const {active,confirmed,deaths,recovered,lastupdatedtime} = countryData;
    return (
            <div>
                <div className="header-container"><h2>India's COVID crisis</h2><img className ="mask-image" src={mask} alt="mask"/></div>
                <div className="container">
                                <div className="card-box">
                                    <h4 className="card-name">Active Cases</h4>
                                    <p className="card-data">{getFormattedNumber(active)}</p>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-name">Confirmed Cases</h4>
                                    <p className="card-data">{getFormattedNumber(confirmed)}</p>   
                                </div>
                                <div className="card-box">
                                    <h4 className="card-name">Deaths Recorded</h4>
                                    <p className="card-data">{getFormattedNumber(deaths)}</p> 
                                </div>
                                <div className="card-box">
                                    <h4 className="card-name">Recovered</h4>
                                    <p className="card-data">{getFormattedNumber(recovered)}</p>   
                                </div> 
                                <div className="card-box">
                                    <h4 className="card-name">Last Updated On</h4>
                                    <p className="card-data">{lastupdatedtime}</p>   
                </div>
            </div>

            <div className="table-container">
                <h2>State Wise Distribution</h2>
                <TableContainer data={stateData} name={"State"}/>
            </div>   
            </div>     
    )
}