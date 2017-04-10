const bodyParser = require('body-parser');
const express = require('express');
var app = express();
app.use(express.static('public'));
const morgan = require('morgan'); 
app.use(bodyParser.json());  //to accept json data coming in our express app...
//makes accessible to request body property 



app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});


// app.use(req,res,next) = > {
// 	console.log("first piece of middleware")
// 	next(); 
// }; 



app.get('/all_materials', (req, res) => {
  Restaurant
    .find()
    .limit(20)  
    .exec()
    .then(restaurants => {
      res.json({
        materials: materials.map( //.map js method on an array. 
          (materials) => material.apiRepr())
      });
    })
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
    });
});
