import React from "react";
import { Box, SimpleGrid, Heading } from "@chakra-ui/react"
import Image from "next/image";
const About = () => {
  return (
    
      <Box w="100vw" bg="white">
        <SimpleGrid
          columns={[1, 1, 2]}
          columnGap={0}
          mt={["20px", "25px", "30px"]}
          mx={5}
        >
          <Box my={7} mx={4} 
          mt={["2px", "4px", "30px", "32px", "140px"]}>
            <Heading
              as="h1"
              textAlign={["center", "center", "start"]}
              fontSize={{ base: "23", md: "28" }}
              mb={3}
            >
              WE ARE QUIXGO
            </Heading>
            We are delighted to say that QUIXGO is made to provide you with the
            best service experience in the Indian eCommerce industry. Our team
            is here to help you to get the best commercial rates from multiple
            courier partners, automated reports, reduce the stress of delivering
            shipments with the help of NDR feature, service for COD & Prepaid
            shipments on more than 25000+ Pincodes.
          </Box>
          
          <picture>
          <source srcSet="/graphics/home-images/about-641.webp" media="(max-width: 600px)" />
          <Image
              src={"/graphics/home-images/aboutQuixgo.webp"}
              alt="quixgo Front Image"
              outline="none"
              width={'1028'}
              mt={["240", "20", "16", "20"]}
              height='50'
              priority="high"
              
            />
         
          </picture>
        </SimpleGrid>
      </Box>
   
  );
};

export default About;
