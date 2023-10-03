import Button from "./components/Button/Button"
import {LuPlus} from "react-icons/lu"

export default function DisplayButtons () {
  return (
    <>
      <h5>Button</h5>
      <section>
        <div className="section-item">
          <h6>Primary</h6>
          <div>
            <span className="btn-container">
              <p className="btn-label">Label</p>
              <Button variant="primary" type="label" onClick={() => console.log("clicked")}>
                Register
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
                Get Started
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Disabled</p>
              <Button variant="primary-white" type="label" disabled>
                Continue
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Label Icon</p>
              <Button variant="primary-white" type="label-icon">
                <LuPlus/>
                Add Note
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

        <div className="section-item">
          <h6>Secondary</h6>
          <div>
            <span className="btn-container">
              <p className="btn-label">Label</p>
              <Button variant="secondary" type="label" onClick={() => console.log("clicked")}>
                Register
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Disabled</p>
              <Button variant="secondary" type="label" disabled>
                Submit
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Label Icon</p>
              <Button variant="secondary" type="label-icon">
                <LuPlus/>
                Add Item
              </Button>
            </span>
          </div>

          <div>
            <span className="btn-container">
              <p className="btn-label">Icon</p>
              <Button variant="secondary" type="icon">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Icon Circle</p>
              <Button variant="secondary" type="icon-circle">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Loader</p>
              <Button variant="secondary" type="label" loader={true}/>
            </span>
          </div>
        </div>

        <div className="section-item purple white">
        <h6>Secondary-White</h6>
          <div>
            <span className="btn-container">
              <p className="btn-label">Label</p>
              <Button variant="secondary-white" type="label" onClick={() => console.log("clicked")}>
                Get Started
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Disabled</p>
              <Button variant="secondary-white" type="label" disabled>
                Continue
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Label Icon</p>
              <Button variant="secondary-white" type="label-icon">
                <LuPlus/>
                Add Note
              </Button>
            </span>
          </div>

          <div>
            <span className="btn-container">
              <p className="btn-label">Icon</p>
              <Button variant="secondary-white" type="icon">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Icon Circle</p>
              <Button variant="secondary-white" type="icon-circle">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Loader</p>
              <Button variant="secondary-white" type="label" loader={true}/>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}