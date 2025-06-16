const express = require('express')
const app = express()
const port = 3000

const mongoose = require("mongoose")
const {User}  = require('./modle.js')
const connetDB = async ()=>{
    await mongoose.connect(`mongodb+srv://youtubeinfo:yJdNvgcTxPsJzfT1
@youtube.tbf2m.mongodb.net/mydb`)

console.log(`Db is connect with ${mongoose.connection.host}`)
}
connetDB()
app.get('/', async (req, res) => {
  const cat = new User({
    username : "Anurag"
  })
  const data = await cat.save();
  res.send(data)
}) 

app.listen(port , ()=>{
    console.log(`Sever is running at ${port}`)
})