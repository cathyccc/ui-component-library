import PropTypes from 'prop-types'
import "./button.css"
import clsx from 'clsx'
import {LuLoader2} from "react-icons/lu"

export default function Button({children, size="md", loader=false, variant="primary", type="label", className, ...otherProps}) {

  let labelTypeClass = type === "label" ? "label-btn" : `${type}`
  let variantClass = variant && `${variant}`
  if (loader) {
    labelTypeClass = type === "label"? "loader label-btn" : `loader ${type}`
    children = <LuLoader2/>
  }

  const allClasses = clsx(className, variantClass, labelTypeClass, size, "button")

  return(
    <button className={allClasses} {...otherProps}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["label", "icon-circle", "label-icon", "icon"]),
  loader: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]).isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "secondary-gray", "tertiary"]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}