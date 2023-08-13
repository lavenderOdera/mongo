const express = require('express');
const myapp = express();
const PORT = 3002;
myapp.get('/', (req, res) => {
    res.send('starting....')
});
 
myapp.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});