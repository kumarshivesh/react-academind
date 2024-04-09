import './App.css'
import MyComponent1 from './components/MyComponent1'
import MyComponent2 from './components/MyComponent2'
import MyComponent3 from './components/MyComponent3'
import MyComponent4 from './components/MyComponent4'

function App() {
  return (
    <>
      <MyComponent1 priority={5} priority2="Mr."/>
      <MyComponent2 priority={5} priority2="Kumar" />
      <MyComponent3 priority={5} priority2="Shivesh" />
      {/* <MyComponent4 priority={5} /> */}
    </>
  )
}

export default App
