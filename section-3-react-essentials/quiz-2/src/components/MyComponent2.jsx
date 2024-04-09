import React from 'react'
//React automatically passes a "props" object as a first argument to the component function. This object contains all props ("custom attributes") as key-value pairs (i.e., as properties). So accessing "priority" on "props" will work

export default function MyComponent2(props) {
  console.log(props)
  return (
    <>
      <p>Priority: {props.priority}</p>
      <p>Priority2: {props.priority2}</p>
    </>
    
  )
}
