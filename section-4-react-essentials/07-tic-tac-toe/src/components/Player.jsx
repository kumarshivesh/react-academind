import { useState } from "react"

export default function Player ({initialName, symbol, isActive, onChangeName}) {
  // Initially I am not editing. So, I set the initial value as `false`.
  const [playerName, setPlayerName] = useState(initialName)
  const [ isEditing, setIsEditing ] = useState(false) 

  const handleEditClick = () => {
    // setIsEditing(true)
    // setIsEditing(isEditing ? false : true)
    // setIsEditing(!isEditing)
    // This function will automatically be called by React and will receive the guaranted latest state value.
    setIsEditing((editing) => !editing)
    
    if(isEditing) {
      onChangeName(symbol, playerName)
    }
  }

  const handleChange = (event) => {
    console.log(event)
    setPlayerName(event.target.value)
  }

  //Show the <span className = 'player-name'> only when `isEditing` is false
  let editablePlayerName = <span className="player-name">{playerName}</span>
  // let btnCaption = 'Edit'

  if(isEditing) {
    //Show an <input> element (which doesn't need to work) if `isEditing` is true
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    // btnCaption = 'Save'  
  } 
    
 

  return (
    <li className={isActive ? 'active' : undefined}>
      <div className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </div>
      {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}