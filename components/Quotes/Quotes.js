import React, { useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Heading,
  IconButton,
  useBreakpointValue,
  Stack,
  Text,
  Container,
  Avatar,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
const Carousel = () => {
  let settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  
  return (
    <Box mt={16} py={20}>
  
        <Box
          position={"relative"}
          height={["510px","450px","450px","450px"]}
          bg={"white"}
          width={"90%"}
          overflow={"hidden"}
          m={"auto"}
          borderRadius={"md"}
          boxShadow={"2px 2px 30px black"}
          
        >
          <Heading
          mt={5}
        as="h1"
        textAlign="center"
        fontSize={{ base: "24px", md: "33px" }}
      >
        Inspiring Quotes
      </Heading>
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            _hover={{ backgroundColor: "none" }}
            onClick={() => slider?.slickPrev()}
          >
            <BiLeftArrowAlt size="40px" />
          </IconButton>
          {/* Right Icon */}
          <IconButton
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
            _hover={{ backgroundColor: "none" }}
          >
            <BiRightArrowAlt size="40px" />
          </IconButton>
          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            <Box height={"6xl"} position="relative">
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                 
                  position="absolute"
                  top="35%"
                  transform="translate(0, -50%)"
                  justifyContent={"center"}
                  alignItems={"center"}
                  mx={2}
                >
                  <Box textAlign={"center"}>
                    <Avatar
                      src={"/images/quotes/steve-jobs.jpg"}
                      mb={2}
                      size={["lg", "lg", "2xl", "2xl"]}
                      
                    />
                  </Box>

                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    textAlign={"center"}
                    mx={14}
                   
                  >
                    " Because the people who are crazy enough to think they can
                    change the world are the ones who do. "
                  </Text>
                  <Box textAlign={"center"}>
                    <Text fontWeight={600}>Steve Jobs</Text>
                    
                  </Box>
                </Stack>
              </Container>
            </Box>
            <Box height={"6xl"} position="relative">
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                 
                  position="absolute"
                  top="35%"
                  transform="translate(0, -50%)"
                  justifyContent={"center"}
                  alignItems={"center"}
                  mx={2}

                >
                  <Box textAlign={"center"}>
                    <Avatar
                      src={"/images/quotes/elonmusk.jpeg"}
                      mb={2}
                      size={["lg", "lg", "2xl", "2xl"]}
                    />
                  </Box>

                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    textAlign={"center"}
                    mx={14}
                    
                  >
                    " Start with the basics and build from there. You can't
                    master something by overlooking the fundamentals. "
                  </Text>
                  <Box textAlign={"center"}>
                    <Text fontWeight={600}>Elon Musk</Text>
                  </Box>
                </Stack>
              </Container>
            </Box>

            <Box height={"6xl"} position="relative">
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                 
                  position="absolute"
                  top="35%"
                  transform="translate(0, -50%)"
                  justifyContent={"center"}
                  alignItems={"center"}
                  mx={2}

                >
                  <Box textAlign={"center"}>
                    <Avatar
                      src={"/images/quotes/bill-gates.jpeg"}
                      mb={2}
                      size={["lg", "lg", "2xl", "2xl"]}
                    />
                  </Box>

                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    textAlign={"center"}
                    mx={14}
                    
                  >
                    " Success is a lousy teacher. It seduces smart people into
                    thinking they can't lose. "
                  </Text>
                  <Box textAlign={"center"}>
                    <Text fontWeight={600}>Bill Gates</Text>
                    
                  </Box>
                </Stack>
              </Container>
            </Box>

            <Box height={"6xl"} position="relative">
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                 
                  position="absolute"
                  top="35%"
                  transform="translate(0, -50%)"
                  justifyContent={"center"}
                  alignItems={"center"}
                  mx={2}

                >
                  <Box textAlign={"center"}>
                    <Avatar
                      src={"/images/quotes/mark-zuck.jpg"}
                      mb={2}
                      size={["lg", "lg", "2xl", "2xl"]}
                    />
                  </Box>

                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    textAlign={"center"}
                    mx={14}
                    
                  >
                    " Don't discount yourself, no matter what you're doing. "
                    
                    
                  </Text>
                  <Box textAlign={"center"} 
                  >
                    <Text fontWeight={600} >Mark Zuckerberg</Text>
                    
                  </Box>
                </Stack>
              </Container>
            </Box>
          </Slider>
        </Box>
    </Box>
  );
};

export default Carousel;
