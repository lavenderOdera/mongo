// ---------------start mysql--------------


// const mysql      = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database: 'my_db'
// });
 
// const dbconfig=()=>{
    
// connection.connect(function(err) {
//     if (err) {
//         connection.query(function(err,result,fields){
//             if(err){

//             }
//             console.log(result);
//         })
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as id ' + connection.threadId);
//   });
// }

// ---------------end mysql-----------------------

const mongoose = require('mongoose');

const dbconfig = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/products');
    console.log('Connected successfully');
  } catch (error) {
    console.error(error);
  }
};

module.exports = { dbconfig };
