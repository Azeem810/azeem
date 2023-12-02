import dynamic from "next/dynamic";
import { Box ,Text} from "@chakra-ui/react";
const Loader = dynamic(()=>import('../../components/Loader/Loader'))
const Integration = dynamic(() => import('../../components/ApiIntegration/ApiIntegration'), {
  loading: () => <Box mt={40}><Loader/></Box>,
})
const ApiIntegrationContainer = () => {
  return (
    <>
    <Box>
    <Integration />
    </Box>
      
    </>
  );
};

export default ApiIntegrationContainer;
