import React from 'react'
import './Pagination.css'


export default function ({paginar, pagenumbers}){

   


    return(

        <div>
            <ul  class="pagination justify-content-center">
                {pagenumbers.map((number)=>
                    <li class="page-item"><a  class="page-link" onClick = {()=> paginar(number)}> {number} </a></li>
                   )}
                </ul>
                    

        </div>
    )


}