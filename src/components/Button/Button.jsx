import React from "react"
import PropTypes from 'prop-types'
import "./button.css"
import clsx from 'clsx'
import {LuLoader2} from "react-icons/lu"

export default function Button({children, loader=false, variant="primary", type="label", className, ...otherProps}) {

  let labelTypeClass = type === "label" ? "label-btn" : `${type}`
  let variantClass = variant && `${variant}`
  if (loader) {
    labelTypeClass = type === "label"? "loader label-btn" : `loader ${type}`
    children = <LuLoader2/>
  }

  const allClasses = clsx(className, variantClass, labelTypeClass, "button")

  return(
    <button className={allClasses} {...otherProps}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.elementType,
  type: PropTypes.oneOf(["label", "label-icon", "icon", "icon-circle"]),
  loader: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "primary-white", "secondary", "secondary-white", "flat", "flat-white"]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}