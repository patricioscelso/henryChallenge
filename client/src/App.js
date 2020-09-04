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
  const [currentPage, setCurrentPage] = useState(1);
  const [prodxpage] = useState(30)
  const totalProductos = productos.length;
  
  async function getProducts(search = 'q='){
    const busq = search.busqueda || 'q=';
   const products  = await axios.get('http://localhost:3080/api/search/' + busq)
   console.log(products.data)
   setProducts(products.data);
    
    
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
    
  }
  function setearProductos(){
    const indexLastProd = currentPage*prodxpage;
    const indexFirstProd = indexLastProd-prodxpage;
    const currentProds = productos.slice(indexFirstProd, indexLastProd);
    setCurrentProds(()=>currentProds);
   
  }
  
  useEffect(()=>{
    
    paginar(currentPage);
    setearProductos();

},[productos]);

useEffect(()=>{
    
  
  setearProductos();

},[currentPage]);

function isFiltered(filter) {
    var newProducts = currentProds;               
  if (filter  ==="up"){
      newProducts.sort(function (a, b){
          return b.price- a.price;
      })
      console.log(newProducts);
      console.log(currentProds)
      setCurrentProds(newProducts)
    }
  if (filter ==="down"){
    currentProds.sort(function (a, b){
          return a.price - b.price;
      })
  }
  
  if (filter ==="used"){
    currentProds.filter((prod)=>prod.condition ==='used')
  }
  
  if (filter ==="new"){
    currentProds.filter((prod)=>prod.condition ==='new')
  }
}

 


  return (
    <div className="App">
      <Navigation search = {getProducts}/> 
      <Filter isFiltered={isFiltered} />
     <Catalogo currentProds= {currentProds}/>
    <Pagination paginar={paginar} pagenumbers= {pagenumbers} />        {/*totalProductos= {productos.length} prodxpage= {prodxpage}*/}
    </div>

  );
}

export default App;
