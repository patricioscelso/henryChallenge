import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Producto from './Producto';
import './Catalogo.css'

export default function Catalogo(search){
    
    const [productos, setProducts] = useState(undefined);
    async function getProducts(){

       const products  = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone').then((response)=>{                 //http://localhost:3080/api/search?q=
        return response.json();
       })

        setProducts(products);
        
        
    }

    useEffect(()=>{   
        getProducts();
    },[search])
    
    return(
        
        <div className= 'productsContainer'>
            {
                productos !== undefined && productos.results.map((producto,index)=><Producto key={index} item={producto}></Producto>)
            }
        </div>
    )
}