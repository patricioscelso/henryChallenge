import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Catalogo from './components/Catalogo.jsx';
import Navigation from './components/Navigation';
import Pagination from './components/Pagination'
import Filter from './components/Filter'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

function App() {

  const [productos, setProducts] = useState([]);
  const [currentProds, setCurrentProds] = useState([]); 
  const [prodxpage] = useState(30)
  const [currentPage, setCurrentPage] = useState(1);
  const totalProductos = productos.length;
  
  async function getProducts(search = ''){
    const busq = search.busqueda || '';
   const products  = await axios.get('http://localhost:3080/api/search/' + busq)
    setProducts(products.data);
    paginar(currentPage);
}

useEffect(()=>{
    
    getProducts();
    
},[]);





  const pagenumbers = [];
  for (var i=1; i <= Math.ceil(totalProductos/prodxpage); i++ ){

      pagenumbers.push(i);

  }

  function paginar(number){
      setCurrentPage(number);
      const indexLastProd = currentPage*prodxpage;
    const indexFirstProd = indexLastProd-prodxpage;
    const currentProds = productos.slice(indexFirstProd, indexLastProd);
    setCurrentProds(currentProds);
  }
  
  
  
  
  return (
    <div className="App">
      <Navigation search = {getProducts}/> 
     <Catalogo currentProds= {currentProds}/>
    <Pagination paginar={paginar} pagenumbers= {pagenumbers} />        {/*totalProductos= {productos.length} prodxpage= {prodxpage}*/}
    </div>

  );
}

export default App;
