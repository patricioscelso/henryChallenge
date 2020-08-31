import React , {useState} from 'react'
import './Navigation.css'


export default function Navigation({search}){
   
    const [busqueda, setBusqueda] = useState({});

   function buscar(e){
    e.preventDefault()
    search(busqueda)
   }
   function change(e){
    setBusqueda({...busqueda, busqueda: e.target.value})
   }
   
    return(
    <div>
        <nav class="navbar navbar-dark bg-dark">
            
           { /*<img src='C:\Users\patri\Desktop\henryChallenge\client\public\henrylogo.png'></img>*/}
            
            <a class="navbar-brand" href='/'>HenryLibre</a>
            <form class="form-inline" onSubmit={buscar}>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={change} ></input>
                <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </nav>
    </div>
    )
}