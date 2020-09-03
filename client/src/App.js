import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Catalogo from './components/Catalogo.jsx';
import Navigation from './components/Navigation';
import Pagination from './components/Pagination'
import Filter from './components/Filter'

function App({setSearch}, {productos}, {paginar}, {prodxpage}) {
 console.log(paginar)
  return (
    <div className="App">
     <Navigation search = {setSearch}/>
     <Filter/>
     <Catalogo/>
    <Pagination totalProductos= {productos.length} prodxpage= {prodxpage} paginar={paginar}/>
    </div>

  );
}

export default App;
