import React from "react";
import {
  Box,
  Heading,
  Card,
  CardBody,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaHtml5, FaGitlab, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiChakraui, SiRedux, SiJavascript } from "react-icons/si";

const Skills = () => {
  let data = [
    {
      name: "REACT",
      icon: <FaReact />,
      color: "aqua",
    },
    {
      name: "JAVASCRIPT",
      icon: <SiJavascript />,
      color: "orange",
    },
    {
      name: "REDUX",
      icon: <SiRedux />,
      color: "blue",
    },

    {
      name: "NEXT JS",
      icon: <FaHtml5 />,
      color: "black",
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
      color: "blue",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "yellow",
    },
    {
      name: "CHAKRA UI",
      icon: <SiChakraui />,
      color: "aqua",
    },
    {
      name: "GIT",
      icon: <FaGitlab />,
      color: "orange",
    },
  ];

  return (
    <Box
      bg="white"
      width={"90%"}
      margin={"auto"}
      borderRadius={"md"}
      boxShadow={"2px 2px 30px black"}
      pt={2}
      mt={24}
      id="skills"
    >
      <Heading
        as="h1"
        textAlign="center"
        mt={5}
        fontSize={{ base: "24px", md: "33px" }}
      >
        Skills
      </Heading>

      <SimpleGrid
        columns={[2, 2, 3, 3, 4]}
        spacing={[8, 12, 14, 14, 20]}
        py={20}
      >
        {data.map((card) => (
          <Card
            key={card}
            width={[24, 28, 32, 32, 40]}
            boxShadow={"2px 2px 20px black"}
            m={"auto"}
            _hover={{
              boxShadow: `1px 10px 10px  ${card.color}`,
            }}
          >
            <CardBody>
              <Stack spacing="3" alignItems={"center"}>
                <Box color={card.color} fontSize={[30, 30, 40]}>
                  {card.icon}
                </Box>
                <Heading size={[12, 16, 20]} textAlign={"center"}>
                  {card.name}
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
