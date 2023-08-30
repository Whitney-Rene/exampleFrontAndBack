import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [myName, setMyName] = useState('');
  const [message, setMessage] = useState('');

  const callBackEnd = async () => {
  //myName and the function that will change mynName
  //in beginning app will not know my name, only after I call the back end

    const response = await fetch ('http://localhost:5000/myname');
    const data = await response.json();
    console.log(data); //we will see this in the console
    setMyName(data.name);
  }

  const callForMessage = () => {
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMessage(data.message);
      })
  }    

    //function that takes an anynmous function and a what data we are watching-if that data changes, the page will rerender (but we are not watching anything, so [])
    //the hook (second parameter of useEffect) tells react when to rerender, don't rerendder every single time there is a change in the network, only when user tells
    useEffect(() => {
      //what we want to happen once page is rendered, call this function
      callBackEnd();
      callForMessage();
    }, []);

  return (
    <>
    <h1>Hello Techtonica</h1>
    {myName}
    <h2>Message from backend: {message} </h2>
    </>
  )
}

export default App
