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
              <Route exact path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/join" element={<SignupForm/>}/>
              <Route path="/login" element={<SigninForm/>}/>
              <Route path="/create-profile" element={<CreateProfile/>}/>
            </Routes>
          </Router>

        </div>
    </div>
  );
}

export default App;
