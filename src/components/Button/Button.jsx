import React from "react"
import PropTypes from 'prop-types'
import "./button.css"
import clsx from 'clsx'

export default function Button({children, variant, type, className, ...otherProps}) {
  let labelTypeClass = type === "label" ? "label-btn" : `${type}`
  let variantClass = variant && `${variant}`

  const allClasses = clsx(className, variantClass, labelTypeClass, "button")

  return(
    <div className={allClasses} {...otherProps}>
      {children}
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.elementType,
  type: PropTypes.oneOf(["label", "label-icon", "icon", "icon-circle"]),
  variant: PropTypes.oneOf(["primary", "primary-white", "secondary", "secondary-white", "flat", "flat-white"]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}