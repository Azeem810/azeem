import NextLink from "next/link";
import { Container, Button,VStack,Box } from "@chakra-ui/react";
import Image from "next/image";
const errorPage = () => {
  return (
    
      <Box mt={[24,20,20,23]}>
      
          <Image
              src={"/graphics/404.webp"}
              alt="404 image not found"
              outline="none"
              width='1360'
              height='0'
              
            />
         
      <Container maxW="container.xl" my={{ base: "5%" }}>
        <VStack>
          <Button
            as={NextLink}
            href={"/" ?? ''}
            w={{ base: "190px", md: "md" }}
            color="white"
            colorScheme="blue"
          >
            Back To Home
          </Button>
        </VStack>
      </Container>
      </Box>
    
  );
};

export default errorPage;
