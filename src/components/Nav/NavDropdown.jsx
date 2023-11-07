import Toggle from "../Toggle"
import PropTypes from "prop-types"

export default function NavDropdown ({children}) {
  return (
    <Toggle.On>
      <div className="nav-dropdown">
        {children}
      </div>
    </Toggle.On>
  )
}

NavDropdown.propTypes = {
  children: PropTypes.element.isRequired
}