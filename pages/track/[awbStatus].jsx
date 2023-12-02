import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Heading, SimpleGrid,  Tag, Text} from '@chakra-ui/react';
import { trackItem } from '../../components/AllFunctions';
import OrderStatus from '../../components/TrackItem/OrderStatus';

const UserStatus = () => {
  const [getAwbStatus,setAwbStatus] = useState([])
  const [loading, setLoading] = useState(true);
 const router = useRouter()
 const {awbStatus} = router.query;
 useEffect(()=>{
  if(awbStatus){
    getResponse()
  }
  
 },[awbStatus])

 async function getResponse(){
 
    const awbData = {
      awbNumber: awbStatus,
      serviceProvider: "QUIXGO",
    }; 

   let awbStatusDetails = await trackItem(awbData,setLoading)
   setAwbStatus(awbStatusDetails?.shipmentInfo)
   

 }
 const pickUpAddress = getAwbStatus?.address
 const deliveryAddress = getAwbStatus
  ? JSON.parse(getAwbStatus.deliveryAddress || '{}')
  : {};

 
  return (
    <>
     
    { loading ? <Text fontSize={20} fontWeight={700} textAlign={'center'} mt={'22%'}>Status is Loading ...</Text>
     : (
  <Box  mt={[44,36,32,40]} mb={10} mx={10}>
  <Box>
    <Heading as="h1" size={"lg"} mt={10} color="#002060">
    STATUS OF {awbStatus}
    </Heading>
  </Box>
  <OrderStatus userData={getAwbStatus?.statusHistory} margin={'no'}/>

</Box>
      ) 
    }
    </>
   
   
  )
}

export default UserStatus
