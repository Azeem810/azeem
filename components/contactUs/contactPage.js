import React from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { CiMail, CiPhone } from "react-icons/ci";
import Head from "next/head";
const MainContact = () => {
  return (
    <>
<Head>
        
        <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. Hassle-free  shipments and courier deliveries .
                  Easy Courier Tracking, COD and Prepaid feature on more than 25000 Pincodes. try Quixgo free!"
        />
        </Head>

      <Box
        my="10px"
        borderRadius="lg"
        mx="10px"
      >
        <Flex color="black" width="100%" justifyContent="space-around">
          <Box>
            <Icon as={CiMail} w={8} h={12} textAlign="center" ml={6} />
            <Text fontSize={[12, 14, 17]} ml={4}>
              Mail us: info@quixgo.com 
            </Text>
          </Box>
          <Box>
            <Icon as={CiPhone} w={8} h={12} textAlign="center" ml={6} />
            <Text ml={2} fontSize={[12, 14, 17]}>
              Call us:  +91 7678465154
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9574270166945!2d77.32486941438542!3d28.571041093613644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44c03ffffff%3A0x3caed564cebaaa62!2sQUIXGO!5e0!3m2!1sen!2sin!4v1674545813318!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ color: "black" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Quixgo address map"
          
        ></iframe>
      </Box>
    </>
  );
};

export default MainContact;
