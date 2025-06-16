import express from 'express';
const app = express();
import { dbconnection } from './config/Database.connection.js';
import ContactRouter from './Routers/router.js'

const port = process.env.PORT
//database Connection
dbconnection()

//Router
app.use('/',ContactRouter)

//Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

