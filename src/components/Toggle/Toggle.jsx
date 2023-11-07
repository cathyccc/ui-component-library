import React from "React"
import PropTypes from "prop-types"

const ToggleContext = React.createContext()

export default function Toggle({children}) {
  const [on, setOn] = React.useState(false)

  const toggle = () => {
    setOn(prevState => !prevState)
  }

  return (
    <ToggleContext.Provider value={{on, toggle}}>
      {children}
    </ToggleContext.Provider>
  )
}

Toggle.propTypes = {
  children: PropTypes.element.is
}

export { ToggleContext }