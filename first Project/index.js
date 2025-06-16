const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.json())     //for json data send and read
app.use(express.urlencoded({extended: false}))

app.listen(port, () => {
  console.log(`Port is running at ${port}`);
});

// app.get("/", (req, res) => {
//   res.send("<h1>This is home page</h1>");
// });

// app.get("/user/:userName/age/:age", (req, res) => {
//   res.send(req.params.userName);
// });

// app.get("/search", (req, res) => {
//   const name = req.query.name;
//   const age = req.query.Age;
//   res.send(`Name : ${name} ,  Age : ${age}`);
// });

// app.get("/about", (req, res) => {
//   res.render("user");
// });

app.post("/contact", (req, res) => {
  res.send(req.body);
});

app.post('/senddata',(req,res)=>{
    res.send(req.body)
})