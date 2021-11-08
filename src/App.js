import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
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
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/join" component={SignupForm}/>
              <Route path="/login" component={SigninForm}/>
              <Route path="/create-profile" component={CreateProfile}/>
            </Routes>
          </Router>

        </div>
    </div>
  );
}

export default App;
