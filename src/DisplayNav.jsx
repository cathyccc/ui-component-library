import Nav from "./components/Nav/Nav"
import { PiPencilLine, PiFolderLight } from "react-icons/pi"
import { RxLightningBolt } from "react-icons/rx"
import { MdOutlineSlowMotionVideo } from "react-icons/md"
import { IoFlagOutline } from "react-icons/io5"
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2"
import { GoPeople } from "react-icons/go"
import NavButton from "./components/Nav/NavButton"
import NavSubgroup from "./components/Nav/NavSubGroup"
import NavDropdown from "./components/Nav/NavDropdown"

const subgroup1 = {
    subtitle: "Resources",
    items: [
      {name: "Blog", icon: <PiPencilLine/> },
      {name: "Customer Stories", icon: <RxLightningBolt/> },
      {name: "Video Tutorials", icon: <MdOutlineSlowMotionVideo/> }
    ]
  }

const subgroup2 = {
    subtitle: "Company",
    items:[
      {name: "About Us", icon: <IoFlagOutline/> },
      {name: "Press", icon: <HiOutlineChatBubbleOvalLeft/> },
      {name: "Careers", icon: <GoPeople/> },
      {name: "Legal", icon: <PiFolderLight/> }
    ]
  }

export default function DisplayNav () {
  return (
    <>
      <h5>Navigation</h5>
      <section className="nav-section">
        <Nav>
          <NavButton>Resources</NavButton>
          <NavDropdown>
            <NavSubgroup details={subgroup1}/>
            <NavSubgroup details={subgroup2}/>
          </NavDropdown>
        </Nav>
      </section>
    </>
  )
}