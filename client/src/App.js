import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Catalogo from './components/Catalogo.jsx';

function App() {
  return (
    <div className="App">
     <Route exact path = '/' render = {() => < Catalogo /> }/>
     
     <Route exact path = '/api/search' render = {() => < Catalogo /> }/>

     <Route exact path = '/page/:page' render = {({match}) => < Catalogo page={match.params.page} />  }/>
    
    </div>

  );
}

export default App;
