import React from "react";
import { Box, SimpleGrid, Heading, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
const APiIntegration = () => {
  const router = useRouter();
  const handleIntegration = () => {
    router.push("/signup");
  };
  return (
    <>
    <Head>
        <title>
          Api Integration 
        </title>
        
        <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. Hassle-free  shipments and courier deliveries .
                  Easy Courier Tracking, COD and Prepaid feature on more than 25000 Pincodes. try Quixgo free!"
        />
        </Head>
        
      <Box w="100vw" mt={[28,35,18,18]} overflow={"hidden"}>
        <Box  p={10}> {/* bgGradient="linear(to-tl, #000068, white ) " */}
          <SimpleGrid
            columns={[1, 1, 1, 2]}
            columnGap={0}
            mx={5}
            my={10}

          >
            <Box>
              <Heading
                as="h1"
                mt={[5,5,5,20]}
                textAlign={["center", "center", "start"]}
                fontSize={{ base: "28", md: "40" }}
                mb={6}
                color={"#00004a"}
              >
                API INTEGRATION
              </Heading>
              <Text textAlign={["center", "center", "start"]}>
                Quick and easy process to integrate your website or store !
              </Text>
              <Button
                px={5}
                py={3}
                bg={"#00004a"}
                color={"white"}
                mx={[30, 45, 0, 0]}
                width={["80%", "80%", "30%", "30%"]}
                my={6}
                _hover={{ background: "#00004a"}}
                onClick={handleIntegration}
              >
                {" "}
                Proceed Now
              </Button>
            </Box>

          <Image
              src={"/graphics/channel-images/channel-integrat.webp"}
              alt="quixgo Front Image"
              outline="none"
              width={'1800'}
              height='0'
              style={{marginleft:'100px'}}
              border={'2px solid red'}
              // objectFit="cover"  
              priority="high"
              
            />
         
          </SimpleGrid>
        </Box>
        <Box
          mt={-6}
          h={20}
          overflowY={"hidden"}
          width={"full"}
          bg={"white"}
          style={{
            transform: "rotate(2deg)",
          }}
        ></Box>
      </Box>
    </>
  );
};

export default APiIntegration;
