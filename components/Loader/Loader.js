import React from 'react'
import{Box,Skeleton, SimpleGrid} from  '@chakra-ui/react';
const Loader = () => {
  return (
   <Box>
   <SimpleGrid columns={3} spacing={10} m={20}>
   <Skeleton height='150px' />
   <Skeleton height='150px' />
   <Skeleton height='150px' />
 
   <Skeleton height='150px' />
   <Skeleton height='150px' />
   <Skeleton height='150px' />
 </SimpleGrid>
   </Box>
  )
}

export default Loader;