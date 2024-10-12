import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  var [jokes,setJokes] = useState([])

  useEffect( ()=>{
    //axios.get('http://localhost:3000/api/jokes')
    //no need to write http://localhost:3000
    //advantage: now we are serving on localhost ,later will use server , later our application name may change-- we cant always keep changing url so :-/api/jokes
    axios.get('/api/jokes')
    .then( (response)=>{
      if(Array.isArray(response.data)){

        setJokes(response.data) 
      }else{
        console.error('Api response is not array',response.data)
      }
       //response.data mai hi actual data h array ke format mai
      //**no need to do json.parse bcz it is handles by axios 
    } )
    .catch( (error)=>{
      console.log(error);
    }  )

  })

  return (
    //jokes:0 bcz request not sent to get jokes array SO---
    //to send api request -fetch , axios , reactQuery
    //we are using axios , still cors error aya 
    <>
      <h1>HELLOOO</h1>
      <p>JOKES:{jokes.length}</p>

      {
        jokes.map( (joke,index)=>
          (<div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>)
         )
      }

    </>
  )
}

export default App
