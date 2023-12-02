import { Box } from "@chakra-ui/react";
import React,{useState} from "react";
import style from "./MediaIcons.module.css";
import {MdClose,MdKeyboardArrowRight} from 'react-icons/md'
import { FaFacebook, FaTwitter, FaLinkedin,FaInstagram } from "react-icons/fa";
const MediaIcons = () => {
    const [toggle,setToggle] = useState(false)
  const handleShow = () => {
    setToggle(!toggle)
  }

  return (
    <Box className={style.media_icons}>
        <Box onClick={handleShow} cursor={'pointer'}>{toggle==false ? <Box ml={1}><MdClose size={23} /></Box> : <MdKeyboardArrowRight size={25}/>}</Box>
      { toggle == false ? <ul>
        <a
          href={"https://www.facebook.com/Quixgo/" ?? ""}
          target="_blank"
          rel="noreferrer"
          
        >
          <li className={style.facebook}>
            <FaFacebook />
          </li>
        </a>
        <a
          href={"https://twitter.com/QUIXGO1" ?? ""}
          target="_blank"
          rel="noreferrer"
        >
          <li className={style.twitter}>
            <FaTwitter  />
          </li>
        </a>
        <a
          href={"https://www.linkedin.com/company/quixgo-infotech-pvt-ltd" ?? ""}
          target="_blank"
          rel="noreferrer"
        >
          <li className={style.linkedin}>
            <FaLinkedin  />
          </li>
        </a>
        <a
          href={"https://www.instagram.com/quixgo/" ?? ""}
          target="_blank"
          rel="noreferrer"
        >
          <li className={style.instagram}> <FaInstagram  /></li>
        </a>
      </ul> : ''}
    </Box>
  );
};

export default MediaIcons;
