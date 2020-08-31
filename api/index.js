const express = require('express');
const server = express();
const cors = require("cors");
const axios = require ('axios');

server.use(cors());
server.listen(3080, () => {
    console.log('%s listening at 3080'); 
});


server.get('/api/search/:query', function(req, res) {
    const query = req.params.query;
    const array = [];
    
    
        
         axios.get('https://api.mercadolibre.com/sites/MLA/search', {
            params: {
              q: query
            }
          }).then(response => {
              response.data.results.forEach((producto)=>{
                           let objeto = {
                               "id": producto.id,
                               "title": producto.title,
                               "price": producto.price,
                               "currency_id": producto.currency_id,
                               "available_quantity": producto.available_quantity,
                               "thumbnail": producto.thumbnail,
                               "condition": producto.condition
                           }
                           array.push(objeto);
          
        
        })}).then(()=>{
            res.json(array);
        }).catch(error => {
             console.log(error)
          })
        })
      
        
        




module.exports = server;