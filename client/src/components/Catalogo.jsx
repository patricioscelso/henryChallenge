import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import Producto from './Producto';
import Navigation from './Navigation'
import './Catalogo.css'
import Pagination from './Pagination'

export default function Catalogo({ currentProds}){               //props de busqueda(?)
    
    const [productos, setProducts] = useState([]);
    const [search, setSearch] = useState('');
   

    async function getProducts(){
        const busq = search.busqueda
       const products  = await axios.get('http://localhost:3080/api/search/' + busq)
        setProducts(products.data);
    }

    useEffect(()=>{
        
        getProducts();
        
    },[search]) //renderiza cada vez que cambia de catalogo
    

    return(
        <div>
        {/* <Navigation search = {setSearch}/> */}
        <div className= 'catalogueContainer'>
            {
                currentProds !== undefined && currentProds.map((producto,index)=><Producto key={index} item={producto}></Producto>)
                
            }
        </div>

            
        {/* <Pagination totalProductos= {productos.length} prodxpage= {prodxpage} paginar={paginar}/> */}

        </div>    
    )
}