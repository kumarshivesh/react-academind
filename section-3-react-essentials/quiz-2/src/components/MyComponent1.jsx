import React from 'react'
//This syntax might look weird (and indeed also is unnecessarily complicated) but it would work. You can use "Rest properties" to group properties that have not been "pulled out" via destructuring into a new object ("props" in this case). So the "priority" prop could be extracted from the props object as shown.

export default function MyComponent1({...props}) {
  console.log(props)
  return (
    <>
      <p>Priority: {props.priority}</p>
      <p>Priority2: {props.priority2}</p>
    </>
  )
}
