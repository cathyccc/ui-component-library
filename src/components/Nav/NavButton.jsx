import React from "react"
import PropTypes from "prop-types"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import Toggle, { ToggleContext } from "../Toggle"
import "./nav.css"

export default function NavButton ({children}) {
  const { on } = React.useContext(ToggleContext)
  return (
    <Toggle.Button>
      <div className="nav-button">
        <span className="nav-btn-text">{children}</span>
        { on ? <BiChevronDown/> :  <BiChevronUp/> }
      </div>
    </Toggle.Button>
  )
}

NavButton.propTypes = {
  children: PropTypes.oneOfType[
    PropTypes.string,
    PropTypes.element
  ]
}