import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./components/Nav/Nav"
import Port from "./pages/Port/Port";
import Home from "./pages/Home/Home";
import Activity from "./pages/Activity/Activity"
import Aboutme from "./pages/Aboutme/Aboutme"

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        
        <Switch>
          <Route path="/activity">
            <Activity/>
          </Route>
          <Route path="/port">
            <Port/>
          </Route>
          <Route path="/aboutme">
            <Aboutme/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
