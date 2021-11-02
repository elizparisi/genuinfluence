import './App.css';
import React from 'react';
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
        <About/>
        <Home/>
        <SignupForm/>
        <SigninForm/>
        <CreateProfile/>
        </div>
    </div>
  );
}

export default App;
