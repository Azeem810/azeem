import React from "react";
import Slider from "react-slick";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
const ChannelCarousel = () => {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
    pauseOnHover: true,
    arrows: false,
    rtl: true,
    focusOnSelect: true,
  };

  return (
    <Box bg="gray.50"  pt={2}>  
    {/* bgGradient='linear(to-r, green.100, pink.100 ) ' */}
      <Heading
      
        as="h1"
        textAlign="center"
        mt={5}
        fontSize={{ base: "24px", md: "33px" }}
        color={'#00004a'}
      >
        CHANNEL INTEGRATION SERVICES
      </Heading>
      <Box
        mt={1}
       
        width="100vw"
        height={["25vh", "32vh", "38vh", "40vh"]}
        p={10}
        mb={3}
      >
        <Box width={["97vw", "80vw"]} margin="auto">
          <Flex flexDir="column">
            <Slider {...settings}>
              <Box>
                <Image
                  src="graphics/channel-images/carousel-image/woocommerce.webp"
                  alt="Woocommerce channel image"
                  width="17vw"
                  borderRadius="xl"
                  height="auto"
                />
              </Box>

              <Box>
                <Image
                  src="graphics/channel-images/carousel-image/shopify.webp"
                  alt="Shopify cannel image"
                  width="17vw"
                  borderRadius="xl"
                  height="auto"
                />
              </Box>
              <Box>
                <Image
                  src="graphics/channel-images/carousel-image/opencart.webp"
                  alt="Opencart channel image"
                  width="17vw"
                  borderRadius="xl"
                  height="auto"
                />
              </Box>
              <Box>
                <Image
                  src="graphics/channel-images/carousel-image/unbommerce.webp"
                  alt="Unbommerce channel image"
                  width="17vw"
                  borderRadius="xl"
                  height="auto"
                />
              </Box>

              <Box>
                <Image
                  src="graphics/channel-images/carousel-image/wordpress.webp"
                  alt="Wordpress channel image "
                  width="17vw"
                  borderRadius="xl"
                  height="auto"
                />
              </Box>

              <Box>
                <Image
                  src="graphics/channel-images/carousel-image/logo.webp"
                  alt="Logo channel image "
                  width="17vw"
                  borderRadius="xl"
                  height="auto"
                />
              </Box>
             
            </Slider>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelCarousel;
