import PropTypes from 'prop-types'
import Avatar  from "./Avatar"

export default function AvatarGroup ({size, list}) {
  let limitTenAvatars = [];
  for (var i=0; i<10; i++) {
    if (list[i]) {
      limitTenAvatars.push(
        <Avatar className="avatar-group-item" size={size} src={list[i].img} alt={list[i].name} key={list[i].name.replace(' ','-')}/>
      )
    }
  }

  return (
    <div className="avatar-group">
      {limitTenAvatars}
      {list.length > 10 && <Avatar className="avatar-group-item" size={size}>{`+${list.length-10}`}</Avatar>}
    </div>
  )
}

AvatarGroup.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md"]).isRequired,
  list: PropTypes.array.isRequired
}
