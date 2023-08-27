const express = require('express');
const bodyParser = require('body-parser');
const { dbconfig} = require('./dbconfig');
const products = require('./models/products');
const myapp = express();
const PORT = 3002;
dbconfig();
myapp.use(bodyParser.json());
myapp.use(bodyParser.urlencoded({extended: false}));

// ----------------------mysql------------------

// myapp.get('/getproduct',(req,res)=>{
//     let sql='SELECT *FROM product';
//     let query=connection.query(sql,(err,result)=>{
//         res.json(result);
//     });
// });

// myapp.get('/addproduct',(req,res)=>{
//     let record = {
//         name:'hen'
//     }
//     let sql='INSERT INTO product set ?';
//     let query=connection.query(sql,record,(err,result)=>{
//         res.json(result);
//     })
// });
// myapp.get('/deleteproduct',(req,res)=>{
//     let sql='DELETE FROM product where name="mango"';
//     let query=connection.query(sql,(err,result)=>{
//         res.json(result);
//     })
// });
// myapp.get('/updateproduct',(req,res)=>{
//     let sql='UPDATE product Set name="bugar" where name="lemon2"';
//     let query=connection.query(sql,(err,result)=>{
//         res.json(result);
//     })
// });


// ---------------end mysql---------------
 

//-------------mongo------------------

myapp.post('/addproduct', async (req, res) => {
    try {
        console.log(req.body);
      let newRecord = await products.create(req.body);
      res.json({
        'status': 200
      });
    } catch (error) {
      console.error(error);
    }
  });
  


myapp.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});