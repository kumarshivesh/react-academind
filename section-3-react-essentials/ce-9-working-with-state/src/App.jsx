import { useState } from 'react'
import './App.css'

function App() {
  // `useState()` hook returns an array with exactly two elements
  const [discountedPrice, setDiscountedPrice] = useState(100); 
  console.log(useState(100))
  // an array destructuring
  /*
  // WAY 1
  const array = [1, 2, 3]
  const [first, second, third] = array
  console.log(`[ ${first}, ${second}, ${third} ]`)
  */

  
  // WAY 2
  const [first, second, third] = [1, 2, 3]
  console.log(`[ ${first}, ${second}, ${third} ]`)
  

  // an object destructuring
  /*
  // WAY 1
  const obj = {fourth: 4, fifth: 5, sixth: 6}
  const {fourth, fifth, sixth} = obj
  console.log(`{ fourth: ${fourth}, fifth: ${fifth}, sixth: ${sixth} }`)
  */

  // WAY 2
  const {fourth, fifth, sixth} = {fourth: 4, fifth: 5, sixth: 6}
  console.log(`{ fourth: ${fourth}, fifth: ${fifth}, sixth: ${sixth} }`)

  const handleClick = () => {
    setDiscountedPrice(75)
  } 
  
  return (
    <div>
      <p data-testid="price">${discountedPrice}</p>
      <button onClick={handleClick}>Apply Discount</button>
    </div>
  );
}

export default App
