import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import SignupForm from './components/SignupForm'
import SigninForm from './components/SigninForm'
import CreateProfile from './components/CreateProfile'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <Navigation/>
        <div>
        <p>
          GENUINFLUENCE
        </p>
        <Router>
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/signup" component={SignupForm}/>
            <Route path="/sigin" component={SigninForm}/>
            <Route path="/create-profile" component={CreateProfile}/>
          </Routes>
        </Router>
        </div>
    </div>
  );
}

export default App;
