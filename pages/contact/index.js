import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
const Loader = dynamic(()=>import('../../components/Loader/Loader'))
const MainContact = dynamic(() => import('../../components/contactUs/contactPage'), {
  loading: () => <Box mt={40}><Loader/></Box>,
})
const ContactUsContainer = () => {
  return (
    <>
      <Box mt={[48,32,32,32]} mx={5}>
        <MainContact />
      </Box>
    </>
  );
};

export default ContactUsContainer;
