const express = require('express')
const mysql = require('mysql')
const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password : "",
    database : "anurag",
})

app.get('/information',(req,res)=>{
    const sql = "SELECT * FROM information";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})
app.listen(8000 , ()=>{
    console.log("Listening.....")
})
