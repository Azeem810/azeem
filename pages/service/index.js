import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
const Loader = dynamic(()=>import('../../components/Loader/Loader'))
const Cards = dynamic(() => import('../../components/cards/cards'), {
  loading: () => <Box mt={40}><Loader/></Box>,
})
const ServicesContainer = () => {
  return (
    <>
    <Box  mt={[52]}>
    <Cards />
    </Box>
      
    </>
  );
};

export default ServicesContainer;
