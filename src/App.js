import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import aboutMe from './components/Pages/AboutMe';
import Contact from './components/Pages/Contact';
import Projects from './components/Pages/Projects';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutme' component={aboutMe} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        </Switch>
        <Home />
      </Router>
    </>
  );
}

export default App;
