import React from 'react';
import './Producto.css';


export default function Producto({item}){
    return (
<div class="card" className="productCard-container">
    <img className="product-image" src={item.thumbnail}/>
    <div class="card-body">
      <h5 class="card-title">${item.price} {item.currency_id}</h5>
    <h6 class="card-text">{item.title}</h6>
      <span>Estado: {item.condition} </span>|<span> Stock: {item.available_quantity}</span>
      <a href={item.permalink} class="btn btn-warning my-sm-0">Comprar</a>
  </div>
</div>

)
}