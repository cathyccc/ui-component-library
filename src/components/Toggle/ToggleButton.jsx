import React from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleButton({children}) {
  const { toggle } = React.useContext(ToggleContext)
  return (
    <span className="toggle-btn" onClick={toggle}>
      {children}
    </span>
  )
}