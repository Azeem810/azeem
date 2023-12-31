import React, { useState, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  Button,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";

// const CountUpNumber = ({ endNumber }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let animationFrameId;

//     const animateCount = () => {
//       if (count < endNumber) {
//         setCount((prevCount) => prevCount + 1);
//         animationFrameId = requestAnimationFrame(animateCount);
//       }
//     };

//     animateCount();

//     return () => cancelAnimationFrame(animationFrameId);
//   }, [count, endNumber]);

//   return <span>{count}</span>;
// };

const About = () => {

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/images/2023-CV.pdf'; 
    link.download = 'Azeem-CV.pdf'; // Specify the desired filename for the downloaded PDF
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Box w="100%" my={130} id="about" >
        <Flex
          flexDir={["column", "row", "row", "row"]}
          justifyContent={["center"]}
          alignItems={"center"}
          gap={[10, 30, 40, 60]}
          mx={[5, 10, 20, 20]}
        >
     
         <Image
            src={"/images/about.jpg"}
            alt="Portfolio About Image"
            outline="none"
            width={"200"}
            radious="50%"
            mt={["240", "20", "16", "60px"]}
            height="0"
            priority="high"
            style={{ borderRadius: "50%", height: "200px" }}
            
            
          />
      

          <Box >
            <Heading
              as="h1"
              textAlign={["center", "center", "start"]}
              fontSize={{ base: "23", md: "28" }}
              color={"white"}
              mb={3}
              mx={5}
            >
              About Me..
            </Heading>
            <Text color={"white"} mx={5} fontSize={{ base: "15", md: "18" }}> 
              Hi I am Azeem, a Web Developer, living in Delhi
              India. I have a background in Computer Science engineering,
              currently working with awesome folks at Quixgo Infotech Pvt. Ltd.
              As a React Js developer, I enjoy crafting and implementing
              intricate code to bring ideas to life and create smooth online
              experiences.
            </Text>
            <Button
              mt={7}
              boxShadow={"2px 2px 3px white"}
              _hover={{ boxShadow: "2px 2px 30px white" }}
              mx={["20",5, 5, 5]}
              onClick={downloadPDF}
            >
              Download CV
            </Button>
          </Box>
        </Flex>
      </Box>

      <SimpleGrid columns={[1, 3, 3, 3]} mx={16} gap={10}>
        <Card
          maxW="sm"
          _hover={{ boxShadow: "9px 4px 20px #61dafb" }}
          boxShadow={"2px 2px 30px black"}
        >
          <CardBody>
            <Flex
              flexDir={"column"}
              gap={4}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FaCode fontSize={30} color="#61dafb" />
              <Heading size="md" textAlign={"center"}>
                16000+
              </Heading>
              <Text textAlign={"center"}>Lines of Codes</Text>
            </Flex>
          </CardBody>
        </Card>
        <Card
          maxW="sm"
          _hover={{ boxShadow: "9px 4px 20px #F4EF05" }}
          boxShadow={"2px 2px 30px black"}
        >
          <CardBody>
            <Flex
              flexDir={"column"}
              gap={4}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <i
                className="fa-solid fa-mug-saucer"
                style={{ fontSize: "30px", color: "#F4EF05" }}
              ></i>
              <Heading size="md" textAlign={"center"}>
                624
              </Heading>
              <Text textAlign={"center"}>Cups of coffee drunk</Text>
            </Flex>
          </CardBody>
        </Card>
        <Card
          maxW="sm"
          _hover={{ boxShadow: "9px 4px 20px #38FB4C" }}
          boxShadow={"2px 2px 30px black"}
        >
          <CardBody>
            <Flex
              flexDir={"column"}
              gap={4}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <i
                className="fa-solid fa-rocket"
                style={{ fontSize: "30px", color: "#38FB4C" }}
              ></i>
              <Heading size="md" textAlign={"center"}>
                4{/* <CountUpNumber endNumber={4} /> */}
              </Heading>

              <Text textAlign={"center"}>Projects Completed</Text>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default About;
