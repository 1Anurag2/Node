
import express from 'express';
const app = express()
const port = 3000

app.get('/' , (req , res) => {
    res.send("<h1>HOME PAGE</h1>")
})

app.get('/api/jokes',(req,res) => {
    const jokes =  [
          {
            "id": 1,
            "setup": "Why don't skeletons fight each other?",
            "punchline": "Because they don't have the guts!"
          },
          {
            "id": 2,
            "setup": "Why did the scarecrow win an award?",
            "punchline": "Because he was outstanding in his field!"
          },
          {
            "id": 3,
            "setup": "What do you call fake spaghetti?",
            "punchline": "An impasta!"
          }
        ];
    res.send(jokes);
});


app.listen(port,()=>{
    console.log(`Sever is running https://localhost:${port}`);   
})