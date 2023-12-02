import {
  Box,
  Select,
  Heading,
  Button,
  Flex,
  Input,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { trackItem,getUserDetails } from "../AllFunctions";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import UserDetails from "./UserDetails";
// import { useContext } from "react";
// import { awbDetailsContext } from "../ContextApi/Context";
import { useRouter } from "next/router";

const OrderStatus = dynamic(() => import("./OrderStatus"));

const Track = () => {
  const [orderStatus1, setOrderStatus] = useState([]);
  const [loading, setLoading] = useState(false);
  // let awbContext  = useContext(awbDetailsContext)
  const router  = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const itemFun = async (values, e) => {

    e.preventDefault();

  //   let data1  = [{name:"Azeem", age:24}]
  //  await awbContext.setUserData(data1)
    const data = {
      awbNumber: values.awbNumber,
      serviceProvider: values.serviceProvider,
    };

    let res = await trackItem(data,setLoading);
    setOrderStatus(res?.status);
   
  };
  return (
    <>
    <Head>
        <title>
          Track Your order with Quixgo 
        </title>
        
        <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. Hassle-free  shipments and courier deliveries .
                  Easy Courier Tracking, COD and Prepaid feature on more than 25000 Pincodes. try Quixgo free!"
        />
        </Head>
      <Box
        border="2px solid gray"
        mt={20}
        width="90%"
        m={'auto'}
        py={10}
        px={5}
        borderRadius="10px" 
        fontFamily="Poppins,sans-serif"
      >
        <form onSubmit={handleSubmit(itemFun)}>
          <FormControl isInvalid={errors.serviceProvider} >
            <Select
              placeholder="Select Service Provider"
              width={["95%", "90%", "30%"]}
              mb="40px"
              borderColor="white"
              color={'black'}
              id="serviceProvider"
              {...register("serviceProvider", {
                required: "This is Required",
              })}
              border={'1px solid #EDE6EA'}
            >
              <FormErrorMessage>
                {errors?.serviceProvider && errors?.serviceProvider?.message}
              </FormErrorMessage>
              <option value="QUIXGO">QUIXGO</option>
              <option value="EKART">EKART</option>
              <option value="SHADOWFAX">SHADOWFAX</option>
              <option value="DELHIVERY">DELHIVERY</option>
            </Select>
          </FormControl>
          <Heading as="h1" fontSize="20px" py={2}>
            Track your shipments created in Quixgo.com
          </Heading>
          <Flex flexDir={["column", "column", "row"]}>
            <Box width="100%" mr={4} py={[5, 5, 0]}>
              <FormControl isInvalid={errors.awbNumber}>
                <Input
                  placeholder="Tracking number"
                  p={7}
                  id="awbNumber"
                  {...register("awbNumber", {
                    required: "This is Required",
                  })}
                />
                <FormErrorMessage>
                  {errors?.awbNumber && errors?.awbNumber?.message}
                </FormErrorMessage>
              </FormControl>
            </Box>
            <Box width="18%">
              <Button
                p={7}
                width="130px"
                colorScheme="#002060"
                bgGradient='linear(to-r,blue.800, teal.600)'
                _hover = {{bgGradient:'linear(#002060, #002060)'}}
                color="white"
                ml={[12, 170, 0]}
                type="submit"
                letterSpacing = {1}
              >
                Track Item
              </Button>
            </Box>
          </Flex>
        </form>
      </Box>
  
      <Box mt={5}>
        <OrderStatus userData={orderStatus1} margin={'yes'} />
      </Box>
    </>
  );
};

export default Track;
