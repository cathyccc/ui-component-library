import "./avatar.css"
import PropTypes from "prop-types"
import { BsPersonFill } from "react-icons/bs"
import clsx from 'clsx'

const colorOptions = ["pink", "red", "blue", "green"]
const randomizeBgColor = () => {
  return `${colorOptions[Math.floor(Math.random()*colorOptions.length)]}-icon-bg`
}

export default function Avatar ({children, color="purple", src, alt="profile-picture"}) {
  let avatarClass
  let randomBgColor
  let isInitials = typeof children === "string"
  let isAnonymous = !src && !children
  let isWhiteBorder = color === "white"

  if (src) children = <img src={src} alt={alt}/>
  if (isAnonymous) {
    children = <BsPersonFill/>
    avatarClass = "avatar-icon"
    randomBgColor = isWhiteBorder && randomizeBgColor()
  }
  if (isInitials) {
    avatarClass = "avatar-letters"
    randomBgColor = isWhiteBorder && randomizeBgColor()
  }
  let borderColor = isWhiteBorder ? "white-border" : "purple-border"

  const allClasses = clsx(avatarClass, randomBgColor, borderColor, "avatar")

  return (
    <div className={allClasses}>
      {children}
    </div>
  )
}

Avatar.propTypes = {
  children: PropTypes.node,
  alt: PropTypes.string,
  src: PropTypes.string,
  color: PropTypes.oneOf["purple", "white"]
}