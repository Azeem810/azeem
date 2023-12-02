import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
const OrderStatus = ({ userData,margin }) => {

  return (
    <>
      <Box mt="70px" mx={margin==='yes' ? 70 : ''}>
        <TableContainer borderRadius={5}>
          <Table colorScheme="blue" >
            <TableCaption>Powered By Quixgo Infotech</TableCaption>
            <Thead bgColor="#002060">
              <Tr  >                
                <Th color="white" borderBottom={'none'} textAlign={'center'} >Date</Th>
                <Th color="white" borderBottom={'none'} textAlign={'center'}>Status</Th>
                <Th color="white" borderBottom={'none'} textAlign={'center'}>Comment</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userData
                ? userData.map((item,index) => (
                  
                      <Tr key={index}  > 
                          <Td textAlign={'center'}>{item.updateDate}</Td>
                          <Td textAlign={'center'}>{item.statusName}</Td>
                          <Td textAlign={'center'}>{item.comment}</Td>
                      </Tr>                   
                   
                ))
                : <Tr><Td colSpan={3} textAlign='center'>No Data Available</Td></Tr>}
                </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default OrderStatus;
