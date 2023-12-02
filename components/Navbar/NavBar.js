import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Link,
  Flex,
  SimpleGrid,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Text,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import { nav } from "./menuJson";
const Menus = dynamic(() => import("./Menus"));
import style from "../../styles/navbar.module.css";

const Header = () => {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const handleSubmenuOpen = (index) => {
    setOpenSubmenuIndex(index);
  };

  const handleSubmenuClose = () => {
    setOpenSubmenuIndex(null);
  };

  return (
      <Box position={"fixed"} top={0} zIndex={100} width={"100%"}>
        <Flex
          bg={"white"}
          padding="1.5"
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
        >
          <Image src="/graphics/offer/lamp.webp" height={7} width={7} />

          <Text
            textAlign={"center"}
            fontSize={17}
            color={"#ff4800"}
            fontWeight={500}
          >
            {" "}
             Signup now and get Rs.2000* cashback | Limited Period Offer.  {" "}
          </Text>
          <Image src="/graphics/offer/lamp.webp" height={7} width={7}/>
          <Image src="/graphics/offer/offer2.gif" height={10} width={10} />
        </Flex>

        <SimpleGrid maxW="100vw" bg="#00004a">
          <Flex
            justifyContent={{ base: "space-between" }}
            alignItems={"center"}
            gap={{ base: "3rem" }}
          >
            <Box>
              <Link as={NextLink} href={"/" ?? ""}>
                <Image
                  src="/graphics/logo/quixgo-logo.webp"
                  alt="quixgo Logo image"
                  ml={{ base: ".4rem", md: "4rem" }}
                  width={["30vw", "20vw", "13vw"]}
                  height="auto"
                />
              </Link>
            </Box>
            <Box
              fontFamily="Poppins,sans-serif"
              // color="white"
              fontWeight="bold"
              fontSize="1rem"
              display={["none", "none", "none", "block"]}
            >
              <Flex gap={{ base: "1rem" }} mr="2.5rem" my="1.4rem">
                {nav.map((item, index) => {
                  return (
                    <Box key={index}>
                      {item.submenu ? (
                          <Box
                            onMouseEnter={() => handleSubmenuOpen(index)}
                            onMouseLeave={handleSubmenuClose}
                            
                          >
                            <Menu isOpen={openSubmenuIndex === index}>
                              <MenuButton
                                as={IconButton}
                                className={`${style.labelColor} `}
                                style={{ textDecoration: "none" }}
                                variant="link"
                                rightIcon={<ChevronDownIcon />}
                                fontWeight="bold"
                                fontSize="1rem"
                              >
                                {item.label}
                              </MenuButton>
                              <MenuList
                                p="6"
                                bg="#fdfdfe"
                                boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"
                              >
                                <Box className={style.menuArrow} />
                                {item.submenu.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.path}
                                    as={NextLink}
                                    style={{ textDecoration: "none" }}
                                  >
                                    <MenuItem
                                      color="black"
                                      fontWeight="bold"
                                      fontSize="1rem"
                                      _hover={{
                                        border: "none",
                                        color: "#00004a",
                                      }}
                                      bg="#fdfdfe"
                                      icon={subItem.icon}
                                    >
                                      {subItem.label}
                                    </MenuItem>
                                  </Link>
                                ))}
                              </MenuList>
                            </Menu>
                          </Box>
                      ) : (
                        <Link
                          as={NextLink}
                          href={item.path ?? ""}
                          className={style.labelColor}
                          style={{ textDecoration: "none" }}
                        >
                          {item.label}
                        </Link>
                      )}
                    </Box>
                  );
                })}
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
