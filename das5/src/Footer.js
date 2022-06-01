import { SiInstagram} from 'react-icons/si';
import {FaFacebookF } from 'react-icons/fa';
import {BiLinkAlt} from 'react-icons/bi';
function Footer() {
  return (
    <div className="footer">
       <div className="hr"></div>
      <div className="footerdiv">
      <div>
        <li><a>Blog</a></li>
        <li><a>Events</a></li>
        <li><a>Our Story</a></li>
      </div>
      <div>
        <li><a>Guidance Grups</a></li>
        <li><a>what We Do</a></li>
        <li><a>Our Vision</a></li>
      </div>
      <div>
        <li><a>Our Impact</a></li>
        <li><a>Podcast</a></li>
        <li><a>Contact</a></li>
      </div>
        </div>
        <SiInstagram className='icon'/>
        <FaFacebookF className='icon'/>
        <BiLinkAlt className='icon'/>
    </div>
  );
}

export default Footer;