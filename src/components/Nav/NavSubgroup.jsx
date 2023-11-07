import NavItem from "./NavItem"
import PropTypes from "prop-types"

export default function NavSubgroup ({details}) {
  const {subtitle, items} = details
  let subItems = items.map(({name, icon}) => {
    return <NavItem key={name} name={name} icon={icon}/>
  })

  return (
    <div className="nav-subgroup">
      <div className="nav-group-subtitle">{subtitle}</div>
      {subItems}
    </div>
  )
}

NavSubgroup.propTypes = {
  details: PropTypes.object.isRequired
}