import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { CiMail, CiPhone } from "react-icons/ci";
const ContactDetails = () => {
  return (
    
      <Flex color="black" width="100%" justifyContent="space-evenly" >
        <Box>
          <Icon as={CiMail} w={8} h={12} textAlign="center" ml={6} />
          <Text fontSize={[12, 14, 17]}>
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
    
  );
};

export default ContactDetails;
