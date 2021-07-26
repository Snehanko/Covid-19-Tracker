import { useState } from 'react';
import CountryData from './Home Components/CountryData';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import State from './State';


const Home=()=>{

    // const [stateNames,setStateNames] = useState({});
    const [inputName, setInputName] = useState('');


    const stateChange = (e) =>setInputName({inputName:e.target.value});

    const onSubmit = (e)=>{
        e.preventDefault();

    console.log(inputName);


}
        return (
            <div>
                <h1>Home Page</h1>  
                <CountryData />
                <div>
                    <h1>States :</h1>
                    <form onSubmit={onSubmit}>
                        <input type="text" label="Enter State Name" onChange={stateChange} />
                        <input type="submit" name="submit" label="Submit" />
                    </form>
                </div>
            </div>
        )
}

export default Home;
