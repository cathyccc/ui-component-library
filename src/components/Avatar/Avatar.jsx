import "./avatar.css"
import PropTypes from "prop-types"
import { BsPerson } from "react-icons/bs"
import clsx from 'clsx'

export default function Avatar ({children, size="md", src, alt="profile-picture", showIndicator=false, isOnline, className}) {
  let avatarClass
  let isInitials = typeof children === "string"
  let isAnonymous = !src && !children

  if (src) children = <img src={src} alt={alt}/>
  if (isAnonymous) {
    children = <BsPerson/>
    avatarClass = "avatar-anonymous"
  }
  if (isInitials) {
    avatarClass = "avatar-letters"
  }

  const avatarClasses = clsx(avatarClass, size, "avatar")
  const indicatorClasses = clsx(size, isOnline? 'online':'offline', "online-indicator")

  return (
    <div className={`${className} avatar-icon`}>
      {showIndicator && 
      <div className={indicatorClasses}/>}
      <div className={avatarClasses}>
        {children}
      </div>
    </div>
  )
}

Avatar.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]).isRequired,
  alt: PropTypes.string,
  src: PropTypes.string,
  isOnline: PropTypes.bool,
  showIndicator: PropTypes.bool,
  className: PropTypes.string
}