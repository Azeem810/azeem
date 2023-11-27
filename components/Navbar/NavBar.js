import React from "react";
import { Box, Image, Flex, SimpleGrid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
const Menus = dynamic(() => import("./Menus"));
import style from "../../styles/navbar.module.css";
import { nav } from "./menuJson";
const Header = () => {
  return (
    <Box
      position={"fixed"}
      top={0}
      zIndex={1000}
      width={"100%"}
      boxShadow="0px 1px 17px white"
      // bgGradient="linear(to-tb, #5d4157,#a8caba)"
      // style={{ backdropFilter: "blur(200px)" }}
      bg={'#222426'}
    >
      <SimpleGrid maxW="100vw" mx={[1,1,2,5]}>
        <Flex
          justifyContent={{ base: "space-between" }}
          alignItems={"center"}
          gap={{ base: "7rem" }}
        >
          <Box>
          <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
                
              >
              <Image
                src="/images/loog.png"
                width={["16", "14", "14", "14"]}
                alt="Portfolio Logo"
              />
            </ScrollLink>
          </Box>
          <Box
            fontFamily="Poppins,sans-serif"
            fontWeight="bold"
            fontSize="1rem"
            display={["none", "none", "none", "block"]}
          >
            <Flex gap={{ base: "4rem" }} mr="2.5rem" my="1.4rem">
              {nav.map((item, index) => (
                <Box key={index}>
                  <ScrollLink
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-100} // Adjust this offset based on your header height
                    duration={500}
                    className={style.labelColor}
                    style={{ textDecoration: "none",cursor:'pointer' }}
                  >
                    {item.label}
                  </ScrollLink>
                </Box>
              ))}
            </Flex>
          </Box>
          <Box
            mt=".5rem"
            mb=".5rem"
            mr="1rem"
            display={["block", "block", "block", "none"]}
          >
            <Menus />
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Header;
