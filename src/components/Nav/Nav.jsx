import Toggle from "../Toggle"
import PropTypes from "prop-types"

export default function Nav ({children}) {
  return (
    <Toggle>
      <div className="nav">
        {children}
      </div>
    </Toggle>
  )
}

Nav.propTypes = {
  children: PropTypes.element.isRequired
}