import Home from './Pages/Home';
import Country from './Pages/Country';
import State from './Pages/State';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <div>
        <h1>Covid-19 Tracker</h1>
        {/* <Router>
          <Switch>
            <Route to="/state" component={State} />
            <Route to="/country" component={Country} />
          </Switch> 
        </Router> */}
        <State />
    </div>
  );
}

export default App;
