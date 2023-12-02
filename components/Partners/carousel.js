import React from "react";
import Slider from "react-slick";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
const Carousel = () => {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Box bg="gray.50" py={2}>
      <Heading
        as="h1"
        textAlign="center"
        mt={5}
        fontSize={{ base: "24px", md: "33px" }}
        color={'#00004a'}
      >
        COURIER PARTNERS
      </Heading>
      <Box
        mt={1}
        width="100vw"
        height={["25vh", "32vh", "38vh", "40vh"]}
        p={10}
        mb={3}
        
      >
        <Box width={["97vw", "80vw"]} margin="auto" >
          <Flex flexDir="column" >
            <Slider {...settings} >
              <Box >
                <Image
                
                  src="graphics/partners/delhivery.webp"
                  alt="Delhivery partner with Quixgo"
                  width="17vw"
                  borderRadius="xl"
                  height='auto'
                  
                />
              </Box>

              <Box >
                <Image
                  src="graphics/partners/ekart.webp"
                  alt="EKART partner with Quixgo"
                  width="17vw"
                  borderRadius="xl"
                  height='auto'
                />
              </Box>
              <Box>
                <Image
                  src="graphics/partners/xpressbees.webp"
                  alt="xpress Bees partner with Quixgo"
                  width="17vw"
                  borderRadius="xl"
                  height='auto'
                />
              </Box>
              <Box>
                <Image
                  src="graphics/partners/shadowfax.webp"
                  alt="Shadowfax partner with Quixgo"
                  width="17vw"
                  borderRadius="xl"
                  height='auto'
                />
              </Box>
          
            <Box>
            <Image
              src="graphics/partners/Ecom-express.webp"
              alt="Shadowfax partner with Quixgo"
              width="17vw"
              borderRadius="xl"
              height='auto'
            />
          </Box>
              <Box>
                <Image
                  src="graphics/partners/shreemaruti.webp"
                  alt="Shree maruti partner with Quixgo"
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

export default Carousel;
