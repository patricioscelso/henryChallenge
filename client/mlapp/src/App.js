import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Catalogo from './components/Catalogo.jsx';

function App() {
  return (
    <div className="App">
     
     <Route exact path = '/' render = {() => < Catalogo /> }/>
     <Route exact path = '/search' render = {() => < Catalogo /> }/>
    
    </div>

  );
}

export default App;
