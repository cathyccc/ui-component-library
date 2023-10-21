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
              <Button variant="primary" size="sm" type="label" onClick={() => console.log("clicked")}>
                Register
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Disabled</p>
              <Button variant="primary" size="sm" type="label" disabled>
                Submit
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Label Icon</p>
              <Button variant="primary" size="sm" type="label-icon">
                <LuPlus/>
                Add Item
              </Button>
            </span>
          </div>

          <div>
            <span className="btn-container">
              <p className="btn-label">Icon</p>
              <Button variant="primary" size="md" type="icon">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Icon Circle</p>
              <Button variant="primary" size="md" type="icon-circle">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Loader</p>
              <Button variant="primary" size="md" type="icon" loader={true}/>
            </span>
          </div>
        </div>

        <div className="section-item">
          <h6>Secondary</h6>
          <div>
            <span className="btn-container">
              <p className="btn-label">Label</p>
              <Button variant="secondary" size="md" type="label" onClick={() => console.log("clicked")}>
                Register
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Disabled</p>
              <Button variant="secondary" size="md" type="label" disabled>
                Submit
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Label Icon</p>
              <Button variant="secondary" size="md" type="label-icon">
                <LuPlus/>
                Add Item
              </Button>
            </span>
          </div>

          <div>
            <span className="btn-container">
              <p className="btn-label">Icon</p>
              <Button variant="secondary" size="md" type="icon">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Icon Circle</p>
              <Button variant="secondary" size="md" type="icon-circle">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Loader</p>
              <Button variant="secondary" size="md" type="icon" loader={true}/>
            </span>
          </div>
        </div>

        <div className="section-item">
        <h6>Secondary-Gray</h6>
          <div>
            <span className="btn-container">
              <p className="btn-label">Label</p>
              <Button variant="secondary-gray" size="md" type="label" onClick={() => console.log("clicked")}>
                Get Started
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Disabled</p>
              <Button variant="secondary-gray" size="md" type="label" disabled>
                Continue
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Label Icon</p>
              <Button variant="secondary-gray" size="md" type="label-icon">
                <LuPlus/>
                Add Note
              </Button>
            </span>
          </div>

          <div>
            <span className="btn-container">
              <p className="btn-label">Icon</p>
              <Button variant="secondary-gray" size="md" type="icon">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Icon Circle</p>
              <Button variant="secondary-gray" size="md" type="icon-circle">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Loader</p>
              <Button variant="secondary-gray" size="md" type="icon" loader={true}/>
            </span>
          </div>
        </div>

        <div className="section-item">
          <h6>Tertiary</h6>
          <div>
            <span className="btn-container">
              <p className="btn-label">Label</p>
              <Button variant="tertiary" size="md" type="label" onClick={() => console.log("clicked")}>
                Get Started
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Disabled</p>
              <Button variant="tertiary" size="md" type="label" disabled>
                Continue
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Label Icon</p>
              <Button variant="tertiary" size="md" type="label-icon">
                <LuPlus/>
                Add Note
              </Button>
            </span>
          </div>

          <div>
            <span className="btn-container">
              <p className="btn-label">Icon</p>
              <Button variant="tertiary" size="md" type="icon">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Icon Circle</p>
              <Button variant="tertiary" size="md" type="icon-circle">
                <LuPlus/>
              </Button>
            </span>

            <span className="btn-container">
              <p className="btn-label">Loader</p>
              <Button variant="tertiary" size="md" type="icon" loader={true}/>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}