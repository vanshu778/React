import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  //let counter = 15

  const limitedValue = (value) => {
    if (value < 0) {
      console.log('Counter cannot go below 0.');
    } else if (value > 20) {
      console.log('Counter has reached the maximum limit of 20.');
    } else {
      setCounter(value);
    }
  }

  const addValue=()=>{
    // counter = counter+1
    // setCounter(counter)
    // console.log("clicked", counter); 
    limitedValue(counter+1)

  }

  const removeValue=()=>{
    //setCounter(counter-1)
    limitedValue(counter-1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}
 
export default App
