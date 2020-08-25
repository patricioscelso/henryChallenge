const server = require('express').Router();

server.get('/search/?query', function(req, res) {
    const q = req.query.query;
    const array = [];
    
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + q)
        .then((response)=>{
          return response.json()
        })
        .then((response)=>{
            
            response.results.forEach((producto)=>{
                let objeto = {
                    "id": producto.id,
                    "title": producto.title,
                    "price": producto.price,
                    "currency_id": producto.currency_id,
                    "available_quantity": producto.available_quantity,
                    "thumbnail": producto.thumbnail,
                    "condition": producto.condition
                }
                array.push(objeto)
            }) 
        }).then(()=>{  
        res.json(array)
        })}
        
);