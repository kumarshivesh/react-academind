import Input from './Input'
import Input2 from './Input2'
import './App.css'

function App() {
  return (
    <div id="content">
      {/* <Input type="text" placeholder="Your name" />
      <Input richText placeholder="Your message" /> */}
      <Input2 type="text" placeholder="Your name" />
      <Input2 richText placeholder="Your message" />
    </div>
  )
}

export default App
