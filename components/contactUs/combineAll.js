import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import dynamic from "next/dynamic";
const VisitOffice = dynamic(()=> import("./VisitOffice"))
const ContactDetails = dynamic(() => import("./contactDetails"));


const CombineAll = () => {
  return (
    
      <Box width="100%" height={["69vh", "70vh", "43vh"]} bg="gray.50" pb={10}>
        <SimpleGrid columns={[1, 1, 2]}>
          <Box mt={4} mx={4}>
           <VisitOffice/>
          </Box>
          <Box mt={["10px", "10px", "30px"]} p={2}>
            <ContactDetails />
          </Box>
        </SimpleGrid>
      </Box>
    
  );
};

export default CombineAll;
