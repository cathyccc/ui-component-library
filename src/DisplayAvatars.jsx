import Avatar from "./components/Avatar/Avatar"
import profile from "../public/man_profilepic.jpg"

export default function DisplayAvatars () {
  return (
    <>
      <h5>Avatars</h5>
      <section className="section-purple white section-2">
        <div className="section-item">
          <p>With Image</p>
          <Avatar color="white" src={profile} alt="Chester Morrison"/>
        </div>

        <div className="section-item">
          <p>With Initials</p>
          <Avatar color="white">CC</Avatar>
        </div>

        <div className="section-item">
          <p>Anonymous</p>
          <Avatar color="white"/>
        </div>
      </section>
      <section className="section-2">
        <div className="section-item">
          <p>With Image</p>
          <Avatar color="purple" src={profile} alt="Chester Morrison"/>
        </div>

        <div className="section-item">
          <p>With Initials</p>
          <Avatar color="purple">CC</Avatar>
        </div>

        <div className="section-item">
          <p>Anonymous</p>
          <Avatar color="purple"/>
        </div>
      </section>
    </>
  )
}