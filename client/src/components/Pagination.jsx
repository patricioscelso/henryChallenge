import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './Pagination.css'

export default function ({totalProductos, paginar, productos,  page}){

    const [currentPage, setCurrentPage] = useState(page || 1);
    const [prodxpage] = useState(30)

    const indexLastProd = currentPage*prodxpage;
    const indexFirstProd = indexLastProd-prodxpage;
    const currentProds = productos.slice(indexFirstProd, indexLastProd);


    const pagenumbers = [];
    for (var i=1; i <= Math.ceil(totalProductos/prodxpage); i++ ){

        pagenumbers.push(i);

    }
    
    function paginar(number){
        setCurrentPage(number);
    }


    return(

        <div>
            <ul  class="pagination justify-content-center">
                {pagenumbers.map((number)=>
                    <li class="page-item"><a  class="page-link" href={`/page/${number}`} onClick = {()=> paginar(number)}> {number} </a></li>
                   )}
                </ul>
                    

        </div>
    )


}