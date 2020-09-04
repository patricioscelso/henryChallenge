import React from 'react'


import Producto from './Producto';

import './Catalogo.css'


export default function Catalogo({currentProds}){               //props de busqueda(?)
    
    
    

    return(
        <div>
     
        <div className= 'catalogueContainer'>
            {
                currentProds !== undefined && currentProds.map((producto,index)=><Producto key={index} item={producto}></Producto>)
                
            }
        </div>

            
      

        </div>    
    )
}