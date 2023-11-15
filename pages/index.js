import { useEffect, useRef } from "react";
import { Box, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Typed from "typed.js";
import Skills from "../components/Skills/Skills";
const Loader = dynamic(() => import("../components/Loader/Loader"));
const MediaIcons = dynamic(() => import("../components/MediaIcons/MediaIcons"));
const Quotes = dynamic(() => import("../components/Quotes/Quotes"), {
  ssr: false,
  loading: () => <Loader />,
});
const About = dynamic(() => import("../components/About"));
const Footer = dynamic(() => import("../components/Footer/Footer"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function Home() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "a Frontend Developer",
        "an UI Designer",
        "a Passionate Learner",
        "a Proud Indian",
      ],
      typeSpeed: 50,
      backSpeed: 70,
      loop: true,
      showCursor: false,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <Flex
        flexDir={["column", "column", "cloumn", "row"]}
        justifyContent={["space-around"]}
        id="home"
      >
        <VStack>
          <Box
            width={["93vw", "90", "89", "37vw"]}
            mt={[24, 24, 24, 72]}
            // ml={[10,20,30,'none']}
          >
            <Heading
              fontSize={["40px", "50px", "60px", "60px"]}
              fontWeight="700"
              color={"white"}
              as="h1"
              textAlign={"center"}
            >
              Azeem
            </Heading>
            <Text
              color={"white"}
              fontSize={["25px", "25px", "30px", "40px"]}
              fontWeight="700"
              letterSpacing={1}
              pt={2}
              textAlign={"center"}
            >
              I am <span ref={el}></span> |
            </Text>
          </Box>
        </VStack>
        <VStack>
          <Box>
            <Image
              src={"/images/azeem.png"}
              alt=" Azeem Portfolio Image"
              outline="none"
              width={"100%"}
              mt={["5", "10", "20"]}
              borderBottomRadius={"50%"}
              height="50"
              priority="true"
              
              style={{ width: "auto", height: "auto" }}
            />
          </Box>
        </VStack>
      </Flex>

      <About />
      <Skills />
      <Quotes />
      <Footer />
      <MediaIcons />
    </>
  );
}
