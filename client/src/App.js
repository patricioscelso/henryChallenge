import React from 'react';
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

useEffect(()=>{
    
    paginar(currentPage);
    setearProductos();

},[productos]);

useEffect(()=>{
    
  
  setearProductos();

},[currentPage]);
  


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
  

function isFiltered(filter) {
        let newCurrentProds = [];
        let newConditionedCurrentProds = [];           
  if (filter  === "up"){
      newCurrentProds = currentProds.slice().sort(function (a, b){
          return a.price - b.price;
      })
      
      setCurrentProds(()=>newCurrentProds)
    }
  if (filter ==="down"){
    newCurrentProds = currentProds.slice().sort(function (a, b){
          return b.price - a.price;
      })

      setCurrentProds(()=>newCurrentProds)
  }
  
  if (filter ==="used"){
    newConditionedCurrentProds = currentProds.filter((prod)=>prod.condition ==='used')
    console.log(newCurrentProds)
    setCurrentProds(()=>newConditionedCurrentProds)
  }
  
  if (filter ==="new"){
    newConditionedCurrentProds  = currentProds.filter((prod)=>prod.condition ==='new')
    console.log(newCurrentProds)
    setCurrentProds(()=>newConditionedCurrentProds)
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
