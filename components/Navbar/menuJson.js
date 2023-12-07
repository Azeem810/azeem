<<<<<<< HEAD

export const nav = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "about",
      label: "About",
    },

    {
      id: "skills",
      label: "Skills",
    },
    
    {
      id: "contact",
      label: "Contact",
    },
   
    
=======
import { MdLocalShipping } from "react-icons/md";
import { AiFillRocket } from "react-icons/ai";
import {BsFillInfoCircleFill} from 'react-icons/bs'

export const nav = [
    {
      path: "/",
      label: "Home",
    },
    {
      label: "Features",
      submenu: [
        {
          path: "/service",
          label: "Services",
          icon: <MdLocalShipping />,
        },
        {
          path: "/integration",
          label: "API Integration",
          icon: <AiFillRocket />,
        },
        {
          path: "/about",
          label: "About Us",
          icon:<BsFillInfoCircleFill/>
        },
      ],
    },
    
    
    {
      path: "/contact",
      label: "Contact",
    },
    {
      path: "/track",
      label: "Track Order",
    },
    {
      path: "/signup",
      label: "Sign Up",
    },

    {
      path: process.env.NEXT_PUBLIC_LOGIN_URL,
      label: "Sign In",
    },
    
>>>>>>> 41cebc7c852b53c23d613b4e6bc31e0a005f6233
  ];