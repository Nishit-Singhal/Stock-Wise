import "./Profile-Page.css"
import { Link } from "react-router-dom"
export default function ProfileNav(){
  return(
    <div className="profile">
      <img className="profile-page-profile-photo"src="src/assets/profile-photo-icon.png" />
      <div>
      <h1 className="Profile-Name">John Doe</h1>
      <p>Web Developer</p>
      </div>
    </div>
  )
}