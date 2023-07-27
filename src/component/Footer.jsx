import React from 'react'
import './Footer.css'
import logo from './../images/logo.png'
import {
    
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
    
} from "@heroicons/react/outline"
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineInbox} from 'react-icons/ai'
import {IoMdLogIn} from 'react-icons/io'
import {HiUsers} from 'react-icons/hi'
import {HiLink} from 'react-icons/hi'

const Footer = () => {
  return (
    <div className="footer_wraper">
        <hr/>
        <div className="footer_container">
            <div className="logo-f">
                <img src={logo}/>
                <span>ForEver</span>
            </div>
            <div className="block">
                <div className="detailes">
                    <span>Contact Us</span>
                    <span className="line">
                        {"  "}
                        <HiOutlineLocationMarker className="icon" />
                        <span>111 north avenue Orlando,FL 32801</span>
                    </span>
                    <span className="line">
                        {"  "}
                        <BsTelephone className="icon" />
                        <span>+971 52 247 1474</span>
                    </span>
                    <span className="line">
                        {"  "}
                        <AiOutlineInbox className="icon" />
                        <span>forever213@gmail.com</span>
                    </span>
                </div>
            </div>


            <div className="block">
                <div className="detailes">
                    <span>Accont</span>
                    <span className="line">
                        {"  "}
                        <IoMdLogIn className="icon" />
                        <span>Sign in </span>
                    </span>
                </div>
            </div>

            

            <div className="block">
                <div className="detailes">
                    <span>Company</span>
                    <span className="line">
                        {"  "}
                        <HiUsers className="icon" />
                        <span>About Us</span>
                    </span>
                </div>
            </div>

            <div className="block">
                <div className="detailes">
                    <span>Resourses</span>
                    <span className="line">
                        {"  "}
                        <HiLink className="icon" />
                        <span>We Reasours</span>
                    </span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer