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
import Skills from "./pages/Skills/Skills"
import Aboutme from "./pages/Aboutme/Aboutme"

export default function App() {
  return (
    <Router>
      <div>
        <Nav/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/skills">
            <Skills/>
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

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
  
}