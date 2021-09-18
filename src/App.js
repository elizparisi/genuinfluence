import './App.css';
import React from 'react';
import Navigation from './components/Navigation'
import Home from './components/Home'
import SignupForm from './components/SignupForm'
import SigninForm from './components/SigninForm'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <Navigation/>
        <div>
        <p>
          GENUINFLUENCE
        </p>
        <SignupForm/>
        <SigninForm/>
        </div>
    </div>
  );
}

export default App;
