import React from 'react';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/react-bootstrap-v5/lib/dist/react-bootstrap.min.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Navbar from "./Navbar";
const App = () => {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
