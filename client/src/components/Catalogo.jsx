import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Producto from './Producto';
import Navigation from './Navigation'
import './Catalogo.css'
import axios from 'axios'
import Pagination from './Pagination'

export default function Catalogo({page}){
    
    const [productos, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(page || 1);
    const [prodxpage] = useState(30)
    const [filter, setFilter] = useState('');

    async function getProducts(){
        const busq = search.busqueda
       const products  = await axios.get('http://localhost:3080/api/search/' + busq)
        setProducts(products.data);
    }

    useEffect(()=>{
        
        getProducts();
        
    },[search]) //renderiza cada vez que cambia de catalogo
    
    
    console.log(filter)
    const indexLastProd = currentPage*prodxpage;
    const indexFirstProd = indexLastProd-prodxpage;
    const currentProds = productos.slice(indexFirstProd, indexLastProd);

    function paginar(number){
        setCurrentPage(number);
    }

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
        <div>
        <Navigation search = {setSearch}/>
         <div className='filter' class='justify-content-center'>  
                <button className='filterButtons' type="button" class="btn btn-secondary" onClick={()=> setFilter("up")}>Precio Ascendente</button>
                <button className='filterButtons' type="button" class="btn btn-secondary" onClick={()=> setFilter("down")}>Precio Descendente</button>
                <button className='filterButtons' type="button" class="btn btn-secondary" onClick={()=> setFilter("used")}>Usados</button>   
                <button className='filterButtons' type="button" class="btn btn-secondary" onClick={()=> setFilter("new")}>Nuevos</button>
            </div> 
        
        


        
        <div className= 'catalogueContainer'>
            {
                currentProds !== undefined && currentProds.map((producto,index)=><Producto key={index} item={producto}></Producto>)
                
            }
        </div>

            
        <Pagination totalProductos= {productos.length} prodxpage= {prodxpage} paginar={paginar}/>

        </div>    
    )
}