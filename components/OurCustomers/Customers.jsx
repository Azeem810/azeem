import React from "react";
import Slider from "react-slick";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
const Customers = () => {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    pauseOnHover: true,
    rtl: true,
    arrows: false,
  };

  return (
    <Box bg="gray.50" py={2}>
      <Heading
        as="h1"
        textAlign="center"
        mt={8}
        fontSize={{ base: "24px", md: "33px" }}
        color={'#00004a'}
      >
        OUR CLIENTS
      </Heading>
      <Box
        mt={1}
        width="100vw"
        // height={["25vh", "32vh", "38vh", "40vh"]}
        p={10}
        mb={3}
        
      >
        <Box width={["97vw", "80vw"]} margin="auto" >
        <Flex flexDir="column" > 
        <Slider {...settings} >
              <Box >
                <Image
                
                  src="graphics/our-customers/electro-store.webp"
                  alt="Electro store customer of Quixgo"
                  width="17vw"
                  borderRadius="xl"
                  height='auto'
                  
                />
              </Box>

              <Box >
                <Image
                  src="graphics/our-customers/lal-sweet.webp"
                  alt="Lal sweet customer of Quixgo"
                  width="17vw"
                  borderRadius="xl"
                  height='auto'
                />
              </Box>
              <Box>
                <Image
                  src="graphics/our-customers/mouachi.webp"
                  alt="Moumachi customer of Quixgo"
                  width="17vw"
                  borderRadius="xl"
                  height='auto'
                />
              </Box>
              <Box>
                <Image
                  src="graphics/our-customers/otovon.webp"
                  alt="Otovon customer of Quixgo"
                  width="17vw"
                  borderRadius="xl"
                  height='auto'
                />
              </Box>
          
              <Box>
            <Image
              src="graphics/our-customers/paraman.webp"
              alt="Paraman customer of Quixgo"
              width="17vw"
              borderRadius="xl"
              height='auto'
            />
              </Box>
              <Box>
            <Image
              src="graphics/our-customers/avykuta.webp"
              alt="Avyukta customer of Quixgo"
              width="17vw"
              borderRadius="xl"
              height='auto'
            />
              </Box>

              
          </Slider>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Customers;
