import React,{useState,useContext} from 'react'
import { useHistory } from 'react-router-dom';



export default function State(props) {

    const [district,setDistrict] = useState([]);

    setDistrict(props);//But here its is recieveing an [object object] arr
    console.log(district);
    const history = useHistory();

    // console.log(district);

    return (
        <div>
            <h2>Statewise Distribution</h2>
               
                {/* <table>
                    <thead>
                    <th>State</th>
                    <th>View More</th>
                    </thead>
                    <tbody>
                        {statelist.map(district=> 
                        <tr key={state}>
                            <td>{state}</td>
                            <td><a href="#" onClick={()=>history.push(`/${d}`)}>View</a></td>
                        </tr>)
                        }
                    </tbody>
                </table> */}
        </div>
    )
}

