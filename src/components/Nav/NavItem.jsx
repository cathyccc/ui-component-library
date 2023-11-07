import PropTypes from "prop-types"

export default function NavItem ({icon, name}) {
  return (
    <div className="nav-item">
      <span className="nav-item-icon">{icon}</span>
      <span className="nav-item-title">{name}</span>
    </div>
  )
}

NavItem.propTypes = {
  icon: PropTypes.element,
  name: PropTypes.string.isRequired
}
