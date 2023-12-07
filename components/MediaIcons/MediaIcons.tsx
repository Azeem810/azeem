<<<<<<< HEAD
import { Box,useToast  } from "@chakra-ui/react";
import React,{useState} from "react";
import style from "./MediaIcons.module.css";
import {MdKeyboardArrowRight,MdClose} from 'react-icons/md'
import { FaFacebook, FaTwitter, FaLinkedin,FaInstagram } from "react-icons/fa";
const MediaIcons = () => {
    const [toggle,setToggle] = useState(false)
    const toast = useToast()
=======
import { Box } from "@chakra-ui/react";
import React,{useState} from "react";
import style from "./MediaIcons.module.css";
import {MdClose,MdKeyboardArrowRight} from 'react-icons/md'
import { FaFacebook, FaTwitter, FaLinkedin,FaInstagram } from "react-icons/fa";
const MediaIcons = () => {
    const [toggle,setToggle] = useState(false)
>>>>>>> 41cebc7c852b53c23d613b4e6bc31e0a005f6233
  const handleShow = () => {
    setToggle(!toggle)
  }

<<<<<<< HEAD
  // React.useEffect(()=>{
  // setTimeout(()=>{
  //   handleShow()
  // },8000)
  // },[])

 function handleIcons(e,message){
  e.preventDefault();
    toast({
          title:message,
          description: 'Contact me on Linkedin and Twitter',
          status: 'info',
          duration: 3000,
          isClosable: true,
          position:'top-right'
    })
    
  }

  return (
    <Box className={style.media_icons} >
        <Box onClick={handleShow}
        
         cursor={'pointer'}>{toggle==false ? <MdClose size={22} style={{marginLeft:'7px'}} color="white"/> : <MdKeyboardArrowRight size={30} color="white"/>}</Box>
      { toggle == false ? <ul>
        
        <a
          href={"https://twitter.com/ErAzeem7" ?? ""}
=======
  return (
    <Box className={style.media_icons}>
        <Box onClick={handleShow} cursor={'pointer'}>{toggle==false ? <Box ml={1}><MdClose size={23} /></Box> : <MdKeyboardArrowRight size={25}/>}</Box>
      { toggle == false ? <ul>
        <a
          href={"https://www.facebook.com/Quixgo/" ?? ""}
>>>>>>> 41cebc7c852b53c23d613b4e6bc31e0a005f6233
          target="_blank"
          rel="noreferrer"
          
        >
<<<<<<< HEAD
          <li className={style.twitter} style={{ border:'1px solid gray' }}>
            <FaTwitter  />
          </li>
        </a>
        <a
          href={"https://www.linkedin.com/in/mo-azeem-1306a7228/" ?? ""}
          target="_blank"
          rel="noreferrer"
        >
          <li className={style.linkedin} style={{ border:'1px solid gray' }}>
            <FaLinkedin  />
          </li>
        </a>
        <a
          href={""}
          // target="_blank"
          rel="noreferrer"
          onClick={(e)=>handleIcons(e,'Opps I am not on facebook')}
          
        >
          <li className={style.facebook} style={{ border:'1px solid gray' }}>
=======
          <li className={style.facebook}>
>>>>>>> 41cebc7c852b53c23d613b4e6bc31e0a005f6233
            <FaFacebook />
          </li>
        </a>
        <a
<<<<<<< HEAD
          href={""}
          // target="_blank"
          rel="noreferrer"
          onClick={(e)=>handleIcons(e,'Opps I am not on Instagram')}

        >
          <li className={style.instagram} style={{ border:'1px solid gray' }}> <FaInstagram  /></li>
=======
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
>>>>>>> 41cebc7c852b53c23d613b4e6bc31e0a005f6233
        </a>
      </ul> : ''}
    </Box>
  );
};

export default MediaIcons;
