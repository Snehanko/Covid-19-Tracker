import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";


export default function Home() {

    const [data,setData]=useState([]);
    const [state_list,setStateList] = useState([]);
    const history = useHistory();

    const getCovidUpdate = async()=>{
        try{
            const res=await axios.get('https://api.covid19india.org/data.json')
            const res_1=await axios.get('https://api.covid19india.org/state_district_wise.json')
            setStateList(Object.keys(res_1.data)); //making a list of states
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
                        {state_list.map(country=> 
                        <tr key={country}>
                            <td>{country}</td>
                            <td><a href="#" onClick={()=>history.push(`/${country}`)}>View</a></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>    
        </div>
    )
}

