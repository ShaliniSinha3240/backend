const express= require("express");
const mysql= require("mysql");
const app = express();
const port = process.env.port || 3000;

const connection= mysql.createConnection({
      host:"localhost",
      user:"root",
      password:'',
      database:"rkkingmatka"
})

connection.connect(err=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('connected');
    }
})

app.get('/',(req,res)=>{
    connection.query('SELECT `content` FROM  static_page WHERE id=48;', (error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            res.json(results);
        }
    })
})


app.listen(port, ()=>{
    console.log('server is running')
})