import profilePicture from '../assets/profile-picture.png'
import { TfiInstagram } from "react-icons/tfi";
import '../styles/Header.css'
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture} />
            <h3>Arules WJK</h3>
            <p>Programmer - Otaku - Colikiawan</p>
            <div className='socialMedia'>
                <a href=""><TfiInstagram /></a>
                <a href=""><FaTiktok /></a>
                <a href=""><BsTwitterX /></a>
                <a href=""><ImFacebook /></a>
            </div>
        </div>
    </header>
  )
}

export default Header