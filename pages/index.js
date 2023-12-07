<<<<<<< HEAD
import dynamic from "next/dynamic";
import Skills from "../components/Skills/Skills";
const Loader = dynamic(() => import("../components/Loader/Loader"));
const HeroSection = dynamic(() =>
  import("../components/HeroSection/HeroSection")
);
const MediaIcons = dynamic(() => import("../components/MediaIcons/MediaIcons"));
const Quotes = dynamic(() => import("../components/Quotes/Quotes"), {
=======
import { Box, Flex, Heading,  Text, VStack,Image } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("../components/Loader/Loader"));
const Choose = dynamic(() => import("../components/chooseus/choose"));
const ChannelCarousel = dynamic(() => import("../components/Partners/ChannelCarousel"));
const MediaIcons = dynamic(() => import("../components/MediaIcons/MediaIcons"));
const Customers = dynamic(()=>import("../components/OurCustomers/Customers"))
const Carousel = dynamic(() => import("../components/Partners/carousel"),{
>>>>>>> 41cebc7c852b53c23d613b4e6bc31e0a005f6233
  ssr: false,
  loading: () => <Loader />,
});
const About = dynamic(() => import("../components/About"));
<<<<<<< HEAD
=======
const CombineAll = dynamic(() => import("../components/contactUs/combineAll"),
 {
  ssr: false,
  loading: () => <Loader />,
}
);
>>>>>>> 41cebc7c852b53c23d613b4e6bc31e0a005f6233
const Footer = dynamic(() => import("../components/Footer/Footer"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function Home() {
<<<<<<< HEAD
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Quotes />
      <Footer />
      <MediaIcons />
=======
 
  return (
    <>
      <Flex
        flexDir={["column", "column", "cloumn", "row"]}
        justifyContent={["space-between"]}
      >
        <VStack>
          <Box mt={24}>
          <picture>
          <source srcSet="graphics/home-images/front-image_641.webp" media="(max-width: 600px)" />
          <Image
              src={"/graphics/home-images/front-image.webp"}
              alt="quixgo Front Image"
              outline="none"
              width={'100%'}
              mt={["16", "5", "5", "10"]}
              height='50'
              priority= 'true'
              style={{width:'auto', height:'auto'}}
            />
         
          </picture>
          </Box>
        </VStack>
        <VStack>
          <Box
            fontWeight="extrabold"
            width={["93vw", "90", "89", "37vw"]}
            mt={["5", "10", "11", "150px", "200Px"]}
            ml={{ base: "20px", md: "0" }}
            mr={{ base: "10px", md: "15px" }}
          >
            <Heading
              fontSize={["19px", "20px", "22px", "30px"]}
              fontWeight="600"
              color={'#00004a'}
              as="h1"
            >
              Quick & Easy Delivery
            </Heading>
            <Text
             
              fontSize={["13px", "14px", "16px", "17px"]}
              fontWeight="500"
            >
              Get your shipment delivered easily and quickly.
            </Text>
            <Heading
              fontSize={["19px", "20px", "22px", "30px"]}
              color={'#00004a'}
              fontWeight="600"
              as="h2"
              mt={5}
            >
              Ship And Manage Your Order With QUIXGO...
            </Heading>
            <Text
              
              fontSize={["13px", "14px", "16px", "17px"]}
              fontWeight="600"
            >
              The popular choice of Indian online sellers. We deliver your
              product on time with safety
            </Text>
          </Box>
        </VStack>
      </Flex>
       <Choose />
       <About />
       <ChannelCarousel/>
       <Carousel />
       <Customers/>
       <CombineAll />
       <Footer />
       <MediaIcons/>
>>>>>>> 41cebc7c852b53c23d613b4e6bc31e0a005f6233
    </>
  );
}
