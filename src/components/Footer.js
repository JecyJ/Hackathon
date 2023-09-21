import { Link } from "react-router-dom";
import {RiTwitterXFill} from 'react-icons/ri'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoLinkedin, BiPhoneCall} from 'react-icons/bi'
import {FaFacebookF} from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'

const Footer = () => {
  return (
    <section className="w-full h-full my-10 p-20 px-10 bg-black/30 space-y-10">
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">      
        <div className="space-y-12 max-w-[600px]">
          <div className="space-y-2">      
            <Link to={'/'}>
              <h1 className='text-white text-3xl font-semibold'>get<span className='text-purple'>linked</span></h1>
            </Link>
            <p className="text-white">Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
          </div>
          <p className="text-white">Terms of use <span className="text-purple">|</span> Privacy Policy</p>
        </div>
        <div>
          <h3 className="text-purple">Useful Links</h3>
          <ul className="text-white">
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
            <li className="flex space-x-3 mt-12">
              <p className="text-purple">Follow Us</p>
              <AiOutlineInstagram size={20} />
              <RiTwitterXFill size={20} />
              <FaFacebookF size={20} />
              <BiLogoLinkedin size={20} />
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-purple">Contact Us</h3>
          <ul className="text-white">
            <li className="flex items-center space-x-4">
              <BiPhoneCall size={20} />
              <p>+234 6707653444</p>
            </li>
            <li className="flex items-center space-x-4">
              <FaLocationDot size={20} />
              <p>27,Alara Street Yaba 100012 Lagos State</p>
            </li>          
          </ul>
        </div>
      </div>
      <p className="text-white text-lg text-center">All rights reserved. © getlinked Ltd.</p>
    </section>
  )
}

export default Footer;