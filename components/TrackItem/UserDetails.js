"use client"
import {useContext} from 'react'
import {
    Box,
    Heading,
    Flex,
    Text,
    SimpleGrid,
    VStack,
    HStack
  } from "@chakra-ui/react";
import { awbDetailsContext } from '../ContextApi/Context';
 
const UserDetails = ({userDetailsData}) => {
    let res  = useContext(awbDetailsContext)
    console.warn('res----', res.getUserData)
  return (
    <>
      <Text mx={70}>Hello User</Text>
    </>
  )
}

export default UserDetails
