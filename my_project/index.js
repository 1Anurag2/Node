require('dotenv').config()

const express = require('express')
const app = express()

const githubData = {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Tom Preston-Werner",
    "company": "@chatterbugapp, @redwoodjs, @preston-werner-ventures ",
    "blog": "http://tom.preston-werner.com",
    "location": "San Francisco",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "mojombo",
    "public_repos": 66,
    "public_gists": 62,
    "followers": 24010,
    "following": 11,
    "created_at": "2007-10-20T05:24:19Z",
    "updated_at": "2024-09-04T23:40:30Z"
  }

app.get('/',(req,res)=>{
    res.send('<h1>This is home page</h1>')
})

app.get('/home',(req,res)=>{
    res.send("Hello Anurag")
})

app.get('/about',(req,res)=>{
    res.send("About Anurag")
})

// app.get('/api',(req , res)=>{
//     res.json(githubData)
// })
app.get('/github',(req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT,()=>{
    console.log(`Sever is running at port ${process.env.PORT}`);
})

