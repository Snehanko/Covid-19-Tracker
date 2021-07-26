import Home from './Pages/Home';
import State from './Pages/State';
import District from './Pages/District';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import './App.css'


function App() {
    return (
      <>
        <div>
          <h1>Covid-19 Tracker</h1>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/:state" exact component={State} />
              <Route path="/district" exact component={District} />
            </Switch> 
          </Router>
        </div>        
    </>
  );
}

export default App;
