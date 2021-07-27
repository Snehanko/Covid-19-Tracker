import React,{useState,useEffect,useContext} from 'react';
import {DataContext} from './Home Components/Context';
import axios from 'axios';
import { useHistory } from "react-router-dom";


export default function Home() {

    const [data,setData]=useState([]);
    const [stateData,setStateData]=useContext(DataContext);
    const [stateList,setSateList]=useState([]);
    

    const history = useHistory();

    const getCovidUpdate = async()=>{
               try{  const res=await axios.get('https://api.covid19india.org/data.json');
                     setData(res.data.statewise[0]);
                }catch(err){
                    console.log(err);
                }
                
            //    console.log(stateData);
        
    }

    const getSateList = async()=>{
        try{
                const res_2=await axios.get('https://api.covid19india.org/state_district_wise.json');
                console.log(res_2.data);
                setSateList(res_2.data);
        }catch(err)
        {
            console.log(err);
        }
    }

    useEffect(() => {
            getCovidUpdate();  
            getSateList();
    },[])

    function onClick(state){
        
        history.push(`/${stateList[state]}`);//Sending Data of District to State.js page 
        console.log(stateList[state]);
    }

    return (
        <div>
            <h2>India's Current Situation</h2>
            <ul>   
                <li> 
                    <h5>Active Cases</h5>
                    <p>{data.active}</p>          
                </li>
                <li> 
                    <h5>Confirmed Cases</h5>
                    <p>{data.confirmed}</p>          
                </li>
                <li> 
                    <h5>Deaths Recorded till Date</h5>
                    <p>{data.deaths}</p>          
                </li>
                <li> 
                    <h5>Recovered</h5>
                    <p>{data.recovered}</p>          
                </li>
                <li> 
                    <h5>Updated On</h5>
                    <p>{data.lastupdatedtime}</p>          
                </li>
            </ul>
            <div>
                <h2>Statewise Distribution</h2>
                <table>
                    <thead>
                    <th>State</th>
                    <th>View More</th>
                    </thead>
                    <tbody>
                        {stateData.map(state=> 
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

