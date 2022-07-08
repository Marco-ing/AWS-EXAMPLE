const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('<h1>Hello word con express</h1>')
})




app.listen(13999);
console.log('Server on port 13999');