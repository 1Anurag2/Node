import { useEffect, useState } from 'react'

import './App.css'
import axios, { AxiosError } from 'axios'

function App() { 
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)  
  });
  })

  return (
    <>
      <h1>Welcome to full stack</h1>
      <p>Jokes : {jokes.length}</p>

      {
        jokes.map((joke,index) =>(
          <div key = {joke.id}>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
