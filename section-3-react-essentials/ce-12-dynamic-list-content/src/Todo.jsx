import React from 'react'

export default function Todo({todos}) {
  return (
    <ul>
    {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>
  )
}
