import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './Filter.css';

export default function Filter({productos}){

    const [filter, setFilter] = useState('');

    useEffect(()=>{
   
        function isFiltered(filter) {
           
           if (filter  ==="up"){
                productos.sort(function (a, b){
                   return b.price- a.price ;
               })
           }
           if (filter ==="down"){
                productos.sort(function (a, b){
                   return a.price - b.price;
               })
           }
           
           if (filter ==="used"){
                productos.filter((prod)=>prod.condition ==='used')
           }
           
           if (filter ==="new"){
                productos.filter((prod)=>prod.condition ==='new')
           }
       }
       isFiltered(filter);
   }, [filter])

   return(
   
    <div className='filter' class='justify-content-center'>  
        <button className='filterButtons' type="button" class="btn btn-secondary" onClick={()=> setFilter("up")}>Precio Ascendente</button>
        <button className='filterButtons' type="button" class="btn btn-secondary" onClick={()=> setFilter("down")}>Precio Descendente</button>
        <button className='filterButtons' type="button" class="btn btn-secondary" onClick={()=> setFilter("used")}>Usados</button>   
        <button className='filterButtons' type="button" class="btn btn-secondary" onClick={()=> setFilter("new")}>Nuevos</button>
    </div> 
   
   )
}