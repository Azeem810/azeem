import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import dynamic from "next/dynamic";
const Main = dynamic(()=> import('../components/Navbar/Main'))
import { Box, ChakraProvider } from "@chakra-ui/react";
const Whatsapp = dynamic(()=> import("../components/WhatsappApi/Whatsapp")) ;
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
         I am Azeem a React js Developer.
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={"images/loog.png" ?? ''} />
        
        <meta
          name="description"
          content="Hi I am Azeem, a 24 year old Web Developer and living in Delhi,
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

        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />

        <meta
          property="og:title"
          content="Azeem a React js Developer"
        ></meta>
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:type" content="website"></meta>
        <meta name="google-site-verification" content="zpjKSaYfi7oXmYuzGKM_kKkjy8lZCCSDXAQ0c1KBeUQ" />
      </Head>

      <ChakraProvider>
        <ToastContainer />
        <Whatsapp />
        <Main />
        <Box bgGradient='linear(to-b, #232526,gray.400)' >
        <Component {...pageProps} />
        </Box> 
      </ChakraProvider>
    </>
  );
}
