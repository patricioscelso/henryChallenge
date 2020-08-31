import React from 'react'
import './Pagination.css'

export default function ({totalProductos, prodxpage, paginar}){


    const pagenumbers = [];
    for (var i=1; i <= Math.ceil(totalProductos/prodxpage); i++ ){

        pagenumbers.push(i);

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