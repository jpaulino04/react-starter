import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/Landing';
import Login from './components/Login';


const App = () =>(

    <Router>
      <Fragment>
      <Navbar/>
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>

)

export default App;
