import { useState } from 'react'
import './App.css'

function App() {
  const [showBox, setShowBox] = useState(false)
  const handleDelete = () => {
      setShowBox(true)
  }
  const handleProceed = () => {
      setShowBox(false)
  }
  return (
    /*
    // `ternary expression` approach
    <div>
      {showBox ? <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={handleProceed}>Proceed</button>
      </div> : ''}
      {!showBox ? <button onClick={handleDelete}>Delete</button> : ''}
    </div>    
    */
    
    // `double ampersand (&&) shortchut` approach
    <div>
      {showBox && <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={handleProceed}>Proceed</button>
      </div>}
      {!showBox && <button onClick={handleDelete}>Delete</button>}
    </div>
    
  );
}

export default App
