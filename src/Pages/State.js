import React,{useContext} from 'react'
import { useHistory } from 'react-router-dom';
import {DataContext} from './Home Components/Context';
import './State.css'

export default function State(props) {

    const [stateData]=useContext(DataContext);
    const stateName = props.match.params.state;
    const district_list = stateData[stateName].districtData;
    const history = useHistory();

    return (
        <div>
            <h2>{`District Wise Distribution for ${stateName}`}</h2>
               
                <table>
                    <thead className="styled-table">
                    <th>District</th>
                    <th>View More</th>
                    </thead>
                    <tbody>
                        {Object.keys(district_list).map(district=> 
                        <tr key={district}>
                            <td>{district}</td>
                            <td><a href="#" onClick={()=>history.push(`/${stateName}/${district}`)}>View</a></td>
                        </tr>)
                        }
                    </tbody>
                </table>
        </div>
    )
}