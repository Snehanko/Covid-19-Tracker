import Home from './Pages/Home';
import State from './Pages/State';
import District from './Pages/District';
import DataProvider from './Pages/Home Components/Context';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import HomeImage from "./Images/Home.png";

function App() {
  return (

    <DataProvider>
      <Router>
        <div className="main-header">
          <Link className="home-link" to="/" ><img src={HomeImage} alt="home" className="home-image" /></Link>
          <h1 className="header-title">COVID-19 Tracker</h1>
        </div>
        <div className="main-container">

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:state" exact component={State} />
            <Route path="/:state/:district" exact component={District} />
          </Switch>
        </div>
      </Router>
    </DataProvider>

  );
}

export default App;
