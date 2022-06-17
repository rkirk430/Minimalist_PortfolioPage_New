import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { AiOutlineFilePdf } from 'react-icons/ai'
import Resume from '../assets/RK_Resume.pdf'
import './social/social.css'


const Social = () => {
  return (
    <div className = "header__socials">
        <a href = "https://www.linkedin.com/in/robert-kirk1/" target = "_blank" rel = "noreferrer" ><BsLinkedin /></a>
        <a href = "https://github.com/rkirk430" target = "_blank" rel = "noreferrer"><FaGithub /></a>
        <a href = {Resume} target = "_blank" rel = "noreferrer"><AiOutlineFilePdf /></a>
    </div>
  )
}

export default Social

