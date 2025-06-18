import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let counter = 15;

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1;
  }
 
  return (
    <>
   <h1>Varadraj</h1>
   <h2>Counter: {counter}</h2>

   <button
   onClick={addValue}
   >Add Counter {counter}</button>
   <button
   onAbort={removeValue}
   >Remove Counter {counter}</button>

   <p>Footer: {counter}</p>
    </>
  )
}

export default App
