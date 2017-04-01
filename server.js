const express = require('express');
var app = express();
app.use(express.static('public'));
const morgan = require('morgan'); 



// app.get('*', function (req, res) {
// 	res.json({
// 		message: 'Hello'
// 	})
// });

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});