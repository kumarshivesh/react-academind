import React from 'react'
// The error is subtle but this example does NOT use object destructuring. So here, the "priority" prop is not pulled out of the props object. Instead, it's now the entire props object that's named "priority". This wouldn't be a problem since the name is up to you. But it's now the entire object that's output in the paragraph, not the "priority" property. Therefore, the output would not be "Priority: 5" but instead "Priority: [Object object]" (or something like that).
export default function MyComponent4(priority) {
  return (
    <p>Priority: {priority}</p>
  )
}
