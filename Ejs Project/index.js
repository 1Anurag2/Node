import express, { urlencoded } from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

app.listen(3000, () => {
  console.log(`Server is running at 3000`);
});

app.get("/form", (req, res) => {
  res.render("form", {
    // tittle: "EJS Project",
    // message: "Application Form",
    info: null,
  });
});

app.post("/submit", (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
  const message1 = `Submitted Data --- Email : ${email} , Password : ${pass}`;
  res.render("form", { info: message1 });
  //   res.send(message);
});

app.get("/user", (req, res) => {
  let users = [
    { Name: "Anurag", Age: 22, city: "Gorakhpur" },
    { Name: "Shivam", Age: 23, city: "Maharajganj" },
    { Name: "Harikesh", Age: 25, city: "Deoria" },
    { Name: "Amit", Age: 23, city: "Rudrapur" },
    { Name: "Suresh", Age: 21, city: "Aydhaya" },
  ];
  res.render("user", {
    tittle: "Object Rendering",
    message: "EJS project",
    items: users,
  });
});
