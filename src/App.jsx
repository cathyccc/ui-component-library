import './App.css'
import Button from "./components/Button/Button"
import {LuPlus} from "react-icons/lu"

function App() {
  return (
    <>
      <h3>UI Components</h3>
      <h5>Button</h5>
      <section>
        <div className="section-item">
          <h6>Primary</h6>
          <div>
            <span className="btn-container">
              <p className="btn-label">Label</p>
              <Button variant="primary" type="label" onClick={() => console.log("clicked")}>
                Submit
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Disabled</p>
              <Button variant="primary" type="label" disabled>
                Submit
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Label Icon</p>
              <Button variant="primary" type="label-icon">
                <LuPlus/>
                Add Item
              </Button>
            </span>
          </div>

          <div>
            <span className="btn-container">
              <p className="btn-label">Icon</p>
              <Button variant="primary" type="icon">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Icon Circle</p>
              <Button variant="primary" type="icon-circle">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Loader</p>
              <Button variant="primary" type="label" loader={true}/>
            </span>
          </div>
        </div>

        <div className="section-item purple white">
          <h6>Primary-White</h6>
          <div>
            <span className="btn-container">
              <p className="btn-label">Label</p>
              <Button variant="primary-white" type="label" onClick={() => console.log("clicked")}>
                Submit
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Disabled</p>
              <Button variant="primary-white" type="label" disabled>
                Submit
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Label Icon</p>
              <Button variant="primary-white" type="label-icon">
                <LuPlus/>
                Add Item
              </Button>
            </span>
          </div>

          <div>
            <span className="btn-container">
              <p className="btn-label">Icon</p>
              <Button variant="primary-white" type="icon">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Icon Circle</p>
              <Button variant="primary-white" type="icon-circle">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Loader</p>
              <Button variant="primary-white" type="label" loader={true}/>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
