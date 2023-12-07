import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
<<<<<<< HEAD
import dynamic from "next/dynamic";
const Main = dynamic(()=> import('../components/Navbar/Main'))
import { Box, ChakraProvider } from "@chakra-ui/react";
const Whatsapp = dynamic(()=> import("../components/WhatsappApi/Whatsapp")) ;
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
=======
import { ChakraProvider,Box } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Whatsapp from '../components/WhatsappApi/Whatsapp';
import Main from '../components/Navbar/Main';
import ContextProvider from "../components/ContextApi/ContextProvider";

>>>>>>> 41cebc7c852b53c23d613b4e6bc31e0a005f6233
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
<<<<<<< HEAD
         I am Azeem a React js Developer.
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="shortcut icon" href={"images/loog.png" ?? ''} /> */}
        <link rel="icon" href="images/loog.png" type="image/png" />

        
        <meta
          name="description"
          content="Hi I am Azeem, a Web Developer and living in Delhi,
          India. I have a background in Computer Science engineering,
          currently working with awesome folks at Quixgo Infotech Pvt. Ltd.
          As a React Js developer, I enjoy crafting and implementing
          intricate code to bring ideas to life and create smooth online
          experiences."
        />

<meta
          name="description"
          content="Hi I am Azeem, a Web Developer and from Bareilly,
          India. I have a background in Computer Science engineering,
          currently working with awesome folks at Quixgo Infotech Pvt. Ltd.
          As a React Js developer, I enjoy crafting and implementing
          intricate code to bring ideas to life and create smooth online
          experiences."
        />

<meta
          name="description"
          content="Hi I am Azeem, a Web Developer and from Noida,
          India. I have a background in Computer Science engineering,
          currently working with awesome folks at Quixgo Infotech Pvt. Ltd.
          As a React Js developer, I enjoy crafting and implementing
          intricate code to bring ideas to life and create smooth online
          experiences."
        />

        <meta
          name="keywords"
          content="azeemportfolio, azeem portfolio, Azeem portfolio, Azeem Portfolio"
        />
        <meta
          name="keywords"
          content="React js developer, frontend developer, ui developer, ui designer"
        />
        <meta
          name="keywords"
          content="azeem delhi, azeem bareilly, fortend developer in delhi , forntend developer in bareilly, forntend developer in bangalore, forntend developer in mohali punjab"
        />
=======
          QUIXGO-eCommerce Logistics Solution: Courier Aggregator India
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={"graphics/favicon.ico" ?? ''} />
        
        <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. Hassle-free  shipments and courier deliveries .
                  Easy Courier Tracking, COD and Prepaid feature on more than 25000 Pincodes. try Quixgo free!"
        />
        
         <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. The courier aggregator India , Try Quixgo now"
        />
        <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. The best free multi-carrier shipping provider for your eCommerce , Try Quixgo now"
        />

       <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. The best shipping provider in noida, delhi,bangalore (bengaluru) or pan India , Try Quixgo now"
        />
         <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. We are providing best courier service in india and all over the world , Try Quixgo now"
        />
        <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. We are the best courier aggregator in india and all over the world , Try Quixgo now"
        />

        <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. We are the best courier aggregator in india and we are charging minimum price to provide you best service, Try Quixgo now"
        />
        
        <meta
          name="keywords"
          content="Send courier,Courier Service Near Me,send parcel,Check courier Price"
        />
        <meta
          name="keywords"
          content="Courier Price Calculator,Shipment Price Calculator,Price Calculator"
        />
        <meta
          name="keywords"
          content="Maruti Courier,Delhivery,xpressbees,shadowfax,Ekart,courier app,courier Website"
        />
        <meta
          name="keywords"
          content="Delhi to Mumbai Courier,Delhi to Kolkata courier,Noida to Delhi courier,Delhi to Noida courier"
        />
        <meta
          name="keywords"
          content="Noida to Delhi courier,Delhi to Noida courier,Noida to Gurgaon courier,Gurgaon to Delhi Courier,bangalore to Delhi Courier"
        />
        <meta
          name="keywords"
          content="pune to mumbai courier,mumbai to pune Courier,hyderabad to mumbai courier,mumbai to hyderabad courier,Courier Agency"
        />
        <meta
          name="keywords"
          content="API Integration,Channel Integration,Courier API,Shipping API,Logistics Integration,E-commerce Integration,Multi-channel Integration"
        />
        <meta
          name="keywords"
          content="Order Fulfillment API,Tracking API,Shipping and Delivery Integration,Third-party API Integration,Carrier Integration,Shipping Management System,Dispatch API"
        />
         <meta
          name="keywords"
          content="Real-time Tracking,Inventory Sync,Parcel Management,Warehouse Integration,Order Processing API,Shipping Automation,Carrier Services Integration"
        />
         <meta
          name="keywords"
          content="Delivery Notification API,Route Optimization,Shipping Labels API,Shipping Rate Calculation API"
        />
        <meta name="keywords" content="professional courier tracking" />
>>>>>>> 41cebc7c852b53c23d613b4e6bc31e0a005f6233

        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />

        <meta
          property="og:title"
<<<<<<< HEAD
          content="Azeem a React js Developer"
=======
          content="QUIXGO-eCommerce Logistics Solution: Courier Aggregator India"
>>>>>>> 41cebc7c852b53c23d613b4e6bc31e0a005f6233
        ></meta>
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:type" content="website"></meta>
        <meta name="google-site-verification" content="zpjKSaYfi7oXmYuzGKM_kKkjy8lZCCSDXAQ0c1KBeUQ" />
      </Head>

      <ChakraProvider>
<<<<<<< HEAD
        <ToastContainer />
        <Whatsapp />
        <Main />
        <Box bgGradient='linear(to-b, #232526,gray.900)' >
        <Component {...pageProps} />
        </Box> 
=======

        <ToastContainer />
        <Whatsapp />
       <Box mb={30}> <Main /></Box>
        <ContextProvider>
        <Component {...pageProps} />
        </ContextProvider>
        
>>>>>>> 41cebc7c852b53c23d613b4e6bc31e0a005f6233
      </ChakraProvider>
    </>
  );
}
