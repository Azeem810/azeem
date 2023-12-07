import NextLink from "next/link";
import { Container, Button,VStack,Box } from "@chakra-ui/react";
import Image from "next/image";
const errorPage = () => {
  return (
<<<<<<< HEAD
    <>
      <Box >
      
         
        
      
        <VStack >
          {/* <Button
=======
    
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
>>>>>>> 41cebc7c852b53c23d613b4e6bc31e0a005f6233
            as={NextLink}
            href={"/" ?? ''}
            w={{ base: "190px", md: "md" }}
            color="white"
            colorScheme="blue"
          >
            Back To Home
<<<<<<< HEAD
          </Button> */}
        </VStack>

      </Box>
    </>
=======
          </Button>
        </VStack>
      </Container>
      </Box>
    
>>>>>>> 41cebc7c852b53c23d613b4e6bc31e0a005f6233
  );
};

export default errorPage;
