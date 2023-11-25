import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  useDisclosure,
  List,
  ListItem,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { nav } from "./menuJson";
import style from "../../styles/navbar.module.css";

const Menus = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleLinkClick = () => {
    onClose(); // Close the drawer
  };

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button
          ref={btnRef}
          as={IconButton}
          icon={<AiOutlineMenu />}
          bg={"none"}
          mt={[0, 2, 0]}
          onClick={onOpen}
          fontSize="28px"
          color="white"
          fontWeight={"bold"}
          _hover={{ background: "none" }}
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgGradient="linear(to-tl, #232526,gray.900)">
          <DrawerCloseButton color={'white'}/>

          <DrawerBody mt={1}>
            <Box>
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
                onClick={handleLinkClick}
              >
                <Image
                  src="/images/loog.png"
                  width={["16", "14", "14", "14"]}
                  alt="Portfolio Logo"
                />
              </ScrollLink>
            </Box>
            <List spacing={7} mt={16}>
              {nav.map((item, index) => (
                <ListItem key={index} >
                  <ScrollLink
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                    style={{ textDecoration: "none", fontWeight: "bold",cursor:'pointer',color:'white' }}
                    onClick={handleLinkClick}
                    className={style.mobile_menu}
                  >
                    {item.label}
                  </ScrollLink>
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
