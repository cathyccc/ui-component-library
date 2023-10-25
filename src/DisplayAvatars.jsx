import Avatar from "./components/Avatar/Avatar"
import AvatarGroup from "./components/Avatar/AvatarGroup"
import profile1 from "../public/profile1.jpg"
import profile2 from "../public/profile2.jpg"
import profile3 from "../public/profile3.jpg"
import profile4 from "../public/profile4.jpg"
import profile5 from "../public/profile5.jpg"
import profile6 from "../public/profile6.jpg"
import profile7 from "../public/profile7.jpg"
import profile8 from "../public/profile8.jpg"
import profile9 from "../public/profile9.jpg"
import profile10 from "../public/profile10.jpg"

const arrayOfPeople = [
  {img: profile2, name: "Andi Lane"},
  {img: profile5, name: "Candice Wu"},
  {img: profile4, name: "Drew Cano"},
  {img: profile3, name: "Demi Wilkinson"},
  {img: profile1, name: "Chester Morrison"},
  {img: profile8, name: "Lana Steiner"},
  {img: profile9, name: "Phoenix Lee"},
  {img: profile6, name: "Natalie Craig"},
  {img: profile7, name: "Orlando Baker"},
  {img: profile10, name: "Marcus Ross"},
  {img: profile1, name: "Jules Butler"},
  {img: profile6, name: "Jessie Lewis"},
]

export default function DisplayAvatars () {
  return (
    <>
      <h5>Avatars</h5>
      <p>Profile Pictures</p>
      <div className="section-2">
        <div className="section-item">
          <div className="avatars-show-sizes">
            <Avatar className="profile-pic" size="md" src={profile1} alt="Chester Morrison"/>
            <Avatar className="profile-pic" size="lg" src={profile1} alt="Chester Morrison"/>
            <Avatar className="profile-pic" size="md">CM</Avatar>
            <Avatar className="profile-pic" size="lg">CM</Avatar>
            <Avatar className="profile-pic" size="md"/>
            <Avatar className="profile-pic" size="lg"/>
          </div>
        </div>
      </div>
      <section className="section-2">
        <div className="section-item">
          <p>With Image</p>
          <div className="avatars-show-sizes">
            <Avatar size="xs" src={profile1} alt="Chester Morrison"/>
            <Avatar size="sm" src={profile1} alt="Chester Morrison"/>
            <Avatar size="md" src={profile1} alt="Chester Morrison"/>
            <Avatar size="lg" src={profile1} alt="Chester Morrison"/>
            <Avatar size="xl" src={profile1} alt="Chester Morrison"/>
            <Avatar size="xxl" src={profile1} alt="Chester Morrison"/>
          </div>
          <div className="avatars-show-sizes">
            <Avatar size="xs" src={profile1} alt="Chester Morrison" isOnline={true} showIndicator={true}/>
            <Avatar size="sm" src={profile1} alt="Chester Morrison" isOnline={true} showIndicator={true}/>
            <Avatar size="md" src={profile1} alt="Chester Morrison" isOnline={true} showIndicator={true}/>
            <Avatar size="lg" src={profile1} alt="Chester Morrison" isOnline={true} showIndicator={true}/>
            <Avatar size="xl" src={profile1} alt="Chester Morrison" isOnline={true} showIndicator={true}/>
            <Avatar size="xxl" src={profile1} alt="Chester Morrison" isOnline={true} showIndicator={true}/>
          </div>
        </div>

        <div className="section-item">
          <p>With Initials</p>
          <div className="avatars-show-sizes">
            <Avatar size="xs">CM</Avatar>
            <Avatar size="sm">CM</Avatar>
            <Avatar size="md">CM</Avatar>
            <Avatar size="lg">CM</Avatar>
            <Avatar size="xl">CM</Avatar>
            <Avatar size="xxl">CM</Avatar>
          </div>
          <div className="avatars-show-sizes">
            <Avatar size="xs" isOnline={false} showIndicator={true}>CM</Avatar>
            <Avatar size="sm" isOnline={false} showIndicator={true}>CM</Avatar>
            <Avatar size="md" isOnline={false} showIndicator={true}>CM</Avatar>
            <Avatar size="lg" isOnline={false} showIndicator={true}>CM</Avatar>
            <Avatar size="xl" isOnline={false} showIndicator={true}>CM</Avatar>
            <Avatar size="xxl" isOnline={false} showIndicator={true}>CM</Avatar>
          </div>
        </div>

        <div className="section-item">
          <p>Anonymous</p>
          <div className="avatars-show-sizes">
            <Avatar size="xs"/>
            <Avatar size="sm"/>
            <Avatar size="md"/>
            <Avatar size="lg"/>
            <Avatar size="xl"/>
            <Avatar size="xxl"/>
          </div>
          <div className="avatars-show-sizes">
            <Avatar size="xs" isOnline={true} showIndicator={true}/>
            <Avatar size="sm" isOnline={true} showIndicator={true}/>
            <Avatar size="md" isOnline={true} showIndicator={true}/>
            <Avatar size="lg" isOnline={true} showIndicator={true}/>
            <Avatar size="xl" isOnline={true} showIndicator={true}/>
            <Avatar size="xxl" isOnline={true} showIndicator={true}/>
          </div>
        </div>
      </section>
      <p>Avatar Group</p>
      <div className="section-2">
        <div className="section-item">
          <AvatarGroup size="xs" list={arrayOfPeople}/>
          <AvatarGroup size="sm" list={arrayOfPeople}/>
          <AvatarGroup size="md" list={arrayOfPeople}/>
        </div>
      </div>
    </>
  )
}