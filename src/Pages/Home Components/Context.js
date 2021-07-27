import React,{useState,createContext, useEffect} from 'react';
import axios from 'axios';

export const DataContext=createContext();

export default function DataProvider(props) {
    const [state,setState] = useState([]);

    useEffect(()=>{

            async function getDataUpdate(){
                const req=await axios.get('https://api.covid19india.org/state_district_wise.json');
                setState(Object.keys(req.data));
                return req.data;
            } 
            getDataUpdate();
    },['https://api.covid19india.org/state_district_wise.json'])

    return (
        <>
         <DataContext.Provider value={[state,setState]}>
             {props.children}
        </DataContext.Provider>   
        </>
    )
}
