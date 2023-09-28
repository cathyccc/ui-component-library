import './App.css'
import Button from "./components/Button/Button"

function App() {
  return (
    <>
      <h1>UI Components</h1>
      <Button variant="primary" type="icon" onClick={() => console.log("clicked")}>
        Button
      </Button>
    </>
  )
}

export default App
