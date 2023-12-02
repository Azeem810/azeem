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
    
  ];