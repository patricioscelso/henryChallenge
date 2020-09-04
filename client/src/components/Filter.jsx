import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './Filter.css';

export default function Filter({isFiltered}){

   return(
   
    <div className='filter' class='justify-content-center'>  
        <button className='filterButtons' type="button" class="btn btn-secondary" onClick={()=> isFiltered("up")}>Precio Ascendente</button>
        <button className='filterButtons' type="button" class="btn btn-secondary" onClick={()=> isFiltered("down")}>Precio Descendente</button>
        <button className='filterButtons' type="button" class="btn btn-secondary" onClick={()=> isFiltered("used")}>Usados</button>   
        <button className='filterButtons' type="button" class="btn btn-secondary" onClick={()=> isFiltered("new")}>Nuevos</button>
    </div> 
   
   )
}