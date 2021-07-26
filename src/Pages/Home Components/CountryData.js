import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function CountryData() {

    const [data,setData]=useState([]);

    const getCovidUpdate = async()=>{
        try{
            const res=await axios.get('https://api.covid19india.org/data.json')
            //console.log(res.data.statewise[0]);
            
            setData(res.data.statewise[0]);

        }catch(err){
            console.log(err);
        }
        
    }

    useEffect(() => {
            getCovidUpdate();
    }, [])

    return (
        <div>
            <h1>India's Current Situation</h1>
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
                <h1>Digramitic Graph</h1>
            </div>    
        </div>
    )
}

