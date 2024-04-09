import './App.css'
import Button2 from './Button2'
import PlusIcon from './PlusIcon'
import HomeIcon from './HomeIcon'

function App2() {
  return (
    <div id="app">
      <section>
        <h2>Filled Button (Default)</h2>
        <p>
          <Button2>Default</Button2>
        </p>
        <p>
          <Button2 mode="filled">Filled (Default)</Button2>
        </p>
      </section>
      <section>
        <h2>Button with Outline</h2>
        <p>
          <Button2 mode="outline">Outline</Button2>
        </p>
      </section>
      <section>
        <h2>Text-only Button</h2>
        <p>
          <Button2 mode="text">Text</Button2>
        </p>
      </section>
      <section>
        <h2>Button with Icon</h2>
        <p>
          <Button2 Icon={HomeIcon}>Home</Button2>
        </p>
        <p>
          <Button2 Icon={PlusIcon} mode="text">
            Add
          </Button2>
        </p>
      </section>
      <section>
        <h2>Buttons Should Support Any Props</h2>
        <p>
          <Button2 mode="filled" disabled>
            Disabled
          </Button2>
        </p>
        <p>
          <Button2 onClick={() => console.log('Clicked!')}>Click me</Button2>
        </p>
      </section>
    </div>
  )
}

export default App2
