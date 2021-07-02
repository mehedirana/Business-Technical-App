import React from 'react';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
const App = () => {
  return (
    <>
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
