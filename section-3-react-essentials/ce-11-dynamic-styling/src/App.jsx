import { useState } from 'react'
import './App.css'

function App() {
  /*
  const [isActive, setIsActive] = useState('')
  const handleClick = () => {
    setIsActive((prevStatus) => prevStatus==='active' ? '' : 'active')
  }
  return (
    <div>
      <p className={isActive}>Style me!</p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
  */
  const [isActive, setIsActive] = useState(false)
  // const handleClick = () => {
  //   setIsActive((isActive) => !isActive)
  // }
  const handleClick = () => {
    setIsActive((isActive) => {
      // The parameter 'isActive' represents the current value of the state
      // The arrow function returns the negation of the current value, effectively toggling it
     return !isActive
    })
  }
  return (
    <div>
      <p className={isActive ? 'active' : undefined}>Style me!</p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
}

export default App
