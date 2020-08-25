import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Producto from './Producto'

export default function Catalogo(){
    
    const [productos, setProducts] = useState(undefined);
    async function getProducts(){

       const products  = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=G-COMMERCE%20SA').then((response)=>{
        return response.json();
       })

        setProducts(products);
        
    }

    useEffect(()=>{   
        getProducts();
    },[])
    
    // console.log(productos.results)
    return(
        
        <div>
            {
                productos !== undefined && productos.results.map((producto,index)=><Producto key={index} item={producto}></Producto>)
            }
        </div>
    )
}