import React from "react";
import {
  Flex,
  Spacer,
  Box,
  VStack,
  Heading,
  Text,
  Icon,
  HStack,
  
} from "@chakra-ui/react";
import Image from "next/image";
import { RiSettingsFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaMobileAlt, FaRoute } from "react-icons/fa";
import "./chooseUs.module.scss";
import Head from "next/head";

const Choose = () => {
  return (
    <>
     <Head>
       
        <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. Hassle-free  shipments and courier deliveries .
                  Easy Courier Tracking, COD and Prepaid feature on more than 25000 Pincodes. try Quixgo free!"
        />
        </Head>
      <Heading
        as="h1"
        className="choose-header"
        mt={24}
        mb={4}
        textAlign="center"
        fontSize={{ base: "25px", md: "33px" }}
        color={'#00004a'}
      >
        WHY CHOOSE US?
      </Heading>
      <Box>
      
      <picture>
          <source srcSet="graphics/home-images/chooseus-641.webp" media="(max-width: 600px)" />
          <Image
              src={"/graphics/home-images/chooseus.webp"}
              alt="quixgo Choose us image"
              outline="none"
              width='1290'
              height='0'
              style={{height:'auto', width:'auto'}}
              
            />         
          </picture>     
      </Box>
      
      <Box>
        <Flex display={["block", "block", "flex"]}>
          <VStack w={["100%", "100%", "30%"]} marginLeft={["1", "1", "130"]}>
            <Box p={3}>
              <HStack>
                <Icon as={RiSettingsFill} w={8} h={12} color="blue.800" />
                <Heading p={2} as="h2" size={"sm"} className="box-header"
                  color={'#00004a'}>
                  {" "}
                  Quick Setup
                </Heading>
              </HStack>
              <Text p={4} color={"gray.700"}>
                Just login with your email id and update your store/office
                address, pickup address, shipping address,create and print label
                and paste it on the shipment and handover the shipment to
                courier partner of your choice.
              </Text>
            </Box>
            <Box p={3}>
              <HStack>
                <Icon
                  as={MdOutlineSupportAgent}
                  w={8}
                  h={12}
                  color="blue.800"
                />
                <Heading p={2} as="h2" size={"sm"} className="box-header" >
                  {" "}
                  Quick support for our clients
                </Heading>
              </HStack>

              <Text p={4} color={"gray.700"}>
                We are here to provide support for all your queries with our
                most efficient team so that shipping will become easy and fast
                in competitive world.
              </Text>
            </Box>
          </VStack>
          <Spacer />
          <VStack w={["100%", "100%", "30%"]} mr={["5", "5", "130"]}>
            <Box p={3}>
              <HStack>
                <Icon as={FaMobileAlt} w={8} h={8} color="blue.800" />
                <Heading p={2} as="h2" size={"sm"} className="box-header">
                  {" "}
                  Quick Mobile Access
                </Heading>
              </HStack>
              <Text p={4} color={"gray.700"}>
                Out of your office! no need to worry. Ship your order from
                anywhere you want with mobile access of our shipping platform.
              </Text>
            </Box>
            <Box p={3}>
              <HStack>
                <Icon as={FaRoute} w={8} h={8} color="blue.800" />
                <Heading p={2} as="h2" size={"sm"} className="box-header">
                  {" "}
                  Quick Tracking and Performance Reports
                </Heading>
              </HStack>
              <Text p={4} color={"gray.700"}>
                You can easily track status and performance reports and get
                updated of your multiple orders at once.
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Box>
      ;
    </>
  );
};

export default Choose;
