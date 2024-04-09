import React from 'react'
//This example will work as React automatically passed an object with all "custom attributes" as a first argument to the component function. Object destructuring can then be used as shown in this example to "pull out" the props the component needs.
export default function MyComponent3({priority, priority2}) {
  console.log(`${priority} ${priority2}`)
  return (
    <>
      <p>Priority: {priority}</p>
      <p>Priority2: {priority2}</p>
    </>
  )
}
