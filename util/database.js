const mysql=require('mysql2')
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'raj',
    password:'Raj@3333',

});
module.exports=pool.promise();

