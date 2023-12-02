import { Box } from '@chakra-ui/react'
import dynamic from "next/dynamic";
import React from 'react'
const Loader = dynamic(()=>import('../../components/Loader/Loader'))
const PrivacyPolicy = dynamic(() => import('../../components/Footer/PrivatePolicy'), {
  loading: () => <Box mt={40}><Loader/></Box>,
})
const index = () => {
  return (
    <Box mt={[62,20,20,20]}>
      <PrivacyPolicy />
    </Box>
  )
}

export default index