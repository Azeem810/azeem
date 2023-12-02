import dynamic from "next/dynamic";
const Loader = dynamic(()=>import('../../components/Loader/Loader'))
const About = dynamic(() => import('../../components/About'), {
  loading: () => <Box mt={40}><Loader/></Box>,
})
import { Box } from "@chakra-ui/react";
const AboutUsContainer = () => {
  return (
    <>
      <Box mt={[44,44,32,32]}>
        <About />
      </Box>
    </>
  );
};

export default AboutUsContainer;
