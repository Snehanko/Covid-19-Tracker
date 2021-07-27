import { useHistory } from "react-router-dom";

const TableContainer = (props) => {
  const {data,name,stateName} = props;
  const history = useHistory();
return (
  <table className="styled-table">
    <thead>
    <th>{name}</th>
    <th>View More</th>
    </thead>
    <tbody>
        {Object.keys(data).map(elem => 
        {
          return elem === "State Unassigned" ? null :<tr key={elem}>
            <td>{elem}</td>
            <td><a href="#" onClick={()=> stateName!== undefined ? history.push(`/${stateName}/${elem}`) : history.push(`/${elem}`)}>View</a></td>
        </tr>
        })
        }
    </tbody>
    </table>
)};

export default TableContainer;