import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Loader = dynamic(()=>import('../../components/Loader/Loader'))
const Track = dynamic(() => import('../../components/TrackItem/Track'), {
  loading: () => <Box mt={40}><Loader/></Box>,
})
const TrackContainer = () => {
  return (
     <Box mt={[44,36,32,40]}>
        <Track />
      </Box>
    
  );
};

export default TrackContainer;
