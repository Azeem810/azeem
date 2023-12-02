import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Link,
  Box,
  Text,
  useDisclosure,
  List,
  ListItem,
  Collapse,
  IconButton,
} from "@chakra-ui/react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import {AiOutlineMenu} from 'react-icons/ai'
import NextLink from "next/link";
import { nav } from "./menuJson";
const Menus = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  
  // State to manage the open/close state of submenus
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (index) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleLinkClick = () => {
    onClose(); // Close the drawer
  };
  return (
    <>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Link
        as={NextLink}
        href={"/signup" ?? ""}
        color="white"
        mr="20px"
        fontFamily="Poppins,sans-serif"
        fontWeight="bold" 
        style={{ textDecoration: "none" }}
      >
        SignUp
      </Link>
      <Button
        ref={btnRef}
        as={IconButton}
        icon={<AiOutlineMenu />}
         bg={'none'}
         mt={[0,2,0]}
        onClick={onOpen}
        fontSize="28px"
        color="white"
        fontWeight={'bold'}
        _hover={{background:'none'}}
      ></Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />

          <DrawerBody mt={10}>
            <List spacing={3}>
              {nav.map((item, index) => (
                <ListItem key={index}>
                  {item.submenu ? (
                    <>
                      <Button
                        onClick={() => toggleSubmenu(index)}
                        fontWeight="bold"
                        display="flex"
                        alignItems="center"
                        justifyContent="start"
                        as={Text}
                        bg={'white'}
                        _hover={{background:'white'}}
                        cursor={'pointer'}
                        m={0}
                        p={0}
                        gap={1}
                      >
                        
                        {item.label}
                        {openSubmenus[index] ? <BiChevronDown /> : <BiChevronRight />}
                      </Button>
                      <Collapse in={openSubmenus[index]}>
                        <List mt={2}>
                          {item.submenu.map((subItem, subIndex) => (
                            <ListItem key={subIndex} ml={4}>
                              <Link
                                as={NextLink}
                                href={subItem.path}
                                p={2}
                                style={{
                                  textDecoration: "none",
                                  marginLeft: "8px",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 10,
                                  
                                }}
                                onClick={handleLinkClick}
                              >
                                <span style={{ color: "#00004a" }}>
                                  {subItem.icon}
                                </span>
                                {subItem.label}
                              </Link>
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </>
                  ) : (
                    <Link
                      as={NextLink}
                      href={item.path}
                      style={{ textDecoration: "none", fontWeight: "bold" }}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  )}
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menus;
