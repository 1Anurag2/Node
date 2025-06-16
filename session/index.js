const express = require("express");
const session = require("express-session");
const mongostore = require("connect-mongo");

const app = express();
const port = 3000;

app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    store : mongostore.create({
        mongoUrl : 'mongodb://127.0.0.1:27017/sessiondb',
        collectionName : 'session'
    })
    // cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

app.get("/create_session", (req, res) => {
  req.session.username = "Anurag";
  res.send("Session create ....!");
});

app.get("/get_session", (req, res) => {
  if (req.session.username) {
    res.send(`Session data is : ${req.session.username}`);
  } else {
    res.status(500).send("Failed to create the session...");
  }
});

app.get("/destroy_session", (req, res) => {
  req.session.destroy();
  res.send("Session Destroyed Successfully ...");
});

app.listen(port, (req, res) => {
  console.log(`Server is running at ${port}`);
});
