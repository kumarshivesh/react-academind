import React from 'react'

export default function Input2({richText, ...props}) {
  if(richText){
    return <textarea {...props}/>
  } 
  return <input {...props}/>
}
