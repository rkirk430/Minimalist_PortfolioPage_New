import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import { AiOutlineFilePdf } from 'react-icons/ai'
import './social/social.css'


const Social = () => {
  return (
    <div className = "header__socials">
        <a href = "https://www.linkedin.com/in/robert-kirk1/" target = "_blank" rel = "noreferrer" ><BsLinkedin /></a>
        <a href = "https://github.com/rkirk430" target = "_blank" rel = "noreferrer"><FaGithub /></a>
        <a href = "https://dribble.com" target = "_blank" rel = "noreferrer"><FiDribbble /></a>
        <a href = "#" target = "_blank" rel = "noreferrer"><AiOutlineFilePdf /></a>
    </div>
  )
}

export default Social




// const SocialShare = [
//   {
//     iconName: "facebook",
//     link: "https://www.facebook.com/",
//   },
//   { iconName: "twitter", link: "https://twitter.com/" },
//   {
//     iconName: "instagram",
//     link: "https://www.instagram.com/",
//   },
//   { iconName: "dribbble", link: "https://dribbble.com/" },
//   {
//     iconName: "tik-tok",
//     link: "https://www.tiktok.com/",
//   },
// ];
// const Social = () => {
//   return (
//     <>
//       <ul className="social">
//         {SocialShare.map((val, i) => (
//           <li key={i}>
//             <a href={`${val.link}`} target="_blank" rel="noreferrer">
//               <img
//                 className="svg"
//                 src={`/assets/img/svg/social/${val.iconName}.svg`}
//                 alt="social"
//               ></img>
//             </a>
//           </li>
//         ))}
//       </ul>
//       {/* END SOCIAL */}
//     </>
//   );
// };

// export default Social;
