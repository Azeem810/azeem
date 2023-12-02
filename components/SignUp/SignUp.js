import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Input,
  SimpleGrid,
  Image,
  Heading,
  Button,
  Link,
  InputRightElement,
  Icon,
  InputGroup,
  Text,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { userCreated } from "../AllFunctions";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useRouter } from "next/router";
import Head from "next/head";

const SignUp = ({ handleUser, user }) => {
  const [show, setShow] = useState(false);
  const myFun = async (values, e) => {
    e.preventDefault();

    const data1 = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      mobile: values.mobile,
      refralCode: values.refralCode,
      password: values.password,
    };
    const res = await userCreated(data1);
    handleUser(res.success);
    user(res.data);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL;

  const router = useRouter();

  const handleTermNavigation = () => {
    // router.push('/term&conditions');
    window.open('/term&conditions', "_blank");  
  };

  const handlePrivatePolicy = () => {
    window.open('/privatepolicy', "_blank");  
  };
  const handleRefundPolicy = () => {
    window.open('/refundpolicy', "_blank");  
  };

  return (
    <>
    <Head>
        <title>
          Signup form of Quixgo infotech
        </title>
        
        <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. Hassle-free  shipments and courier deliveries .
                  Easy Courier Tracking, COD and Prepaid feature on more than 25000 Pincodes. try Quixgo free!"
        />
        </Head>
      <Box>
        <SimpleGrid columns={[1, 1, 2]}>
          <Box>
            <picture>
              <source
                srcSet="graphics/home-images/signup-641.webp"
                media="(max-width: 600px)"
              />
              <Image
                src={"graphics/home-images/signup.webp"}
                alt="Quixgo Sign Up image"
                outline="none"
                width="100%"
                mt={["10px", "12px", "120px"]}
                height="auto"
                colSpan={1}
              />
            </picture>
            <Heading as="h1" fontSize="22px" mx="70px" mt="30px">
              Already Have Account ?{" "}
              <Link as={NextLink} href={loginUrl ?? ""} color="tomato">
                Log In
              </Link>
            </Heading>
          </Box>

          <Box
            mt={5}
            width="80%"
            ml={[5, 12, 30, 55]}
            py={0}
            px={5}
            borderRadius="30px"
            fontFamily="Poppins,sans-serif"
            colSpan={1}
          >
            <Heading as={"h2"} mb={9} ml={-1}>Fill this form to Signup</Heading>
            <form onSubmit={handleSubmit(myFun)}>
              <FormControl
                isInvalid={errors.firstName}
                
              >
                <FormLabel htmlFor="firstName" color="gray">
                  First Name
                </FormLabel>
                <Input
                  autoFocus
                  type="text"
                  variant="filled"
                  {...register("firstName", {
                    required: "This is required",
                    minLength: {
                      value: 2,
                      message: "Name must be greater than  2 letters ",
                    },
                    pattern: {
                      value: /^[A-Za-z][A-Za-z-\s]+$/,
                      message: "Only alphabets are allowed",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors?.firstName && errors?.firstName?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.lastName} 
              
              >
                <FormLabel htmlFor="lastName" color="gray" mt="15px">
                  Last Name
                </FormLabel>
                <Input
                  type="text"
                  variant="filled"
                  {...register("lastName", {
                    required: "This is required",
                    minLength: {
                      value: 3,
                      message: "Name must be greater than  3 letters ",
                    },
                    pattern: {
                      value: /^[A-Za-z][A-Za-z-\s]+$/,
                      message: "Only alphabets are allowed",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors?.lastName && errors?.lastName?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.email} 
              
              >
                <FormLabel htmlFor="email" color="gray" mt="15px">
                  Email address
                </FormLabel>
                <Input
                  type="text"
                  variant="filled"
                  {...register("email", {
                    required: "This is required",
                    pattern: {
                      value: /^[a-z0-9+_.-]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Invalid email address",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors?.email && errors?.email?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.mobile} 
              
              >
                <FormLabel htmlFor="mobile" color="gray" mt="15px">
                  Mobile
                </FormLabel>
                <Input
                  type="text"
                  variant="filled"
                  {...register("mobile", {
                    required: "This is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Mobile number is not valid",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors?.mobile && errors?.mobile?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={errors.refralCode}
                
              >
                <FormLabel htmlFor="refralCode" color="gray" mt="15px">
                  Referal Code
                </FormLabel>
                <Input
                  type="text"
                  variant="filled"
                  {...register("refralCode")}
                />
                <FormErrorMessage>
                  {errors?.refralCode && errors?.refralCode?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.password} 
              
              >
                <FormLabel htmlFor="password" color="gray" mt="15px">
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    variant="filled"
                    {...register("password", {
                      required: "No password provided.",
                      pattern: {
                        value:
                          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                        message:
                          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character.",
                      },
                    })}
                  />
                  <InputRightElement onClick={() => setShow(!show)}>
                    <Icon
                      as={show ? AiFillEye : AiFillEyeInvisible}
                      w={5}
                      h={5}
                      color="#002060"
                    />
                  </InputRightElement>
                </InputGroup>

                <FormErrorMessage>
                  {errors?.password && errors?.password?.message}
                </FormErrorMessage>
              </FormControl>
              <Box display="flex" justifyContent="center" pt={4}>
                <Text fontSize={13}>By continuing, you agree to Quixgo's</Text>
              </Box>

              <Box display="flex" justifyContent="center">
                <Stack direction="row" ml="10%" mr="10%">
                  <Text
                    onClick={handleTermNavigation}
                    cursor={"pointer"}
                    color={"blue"}
                    fontSize={14}
                  >
                    Terms and Conditions
                  </Text>
                  <Text
                    onClick={handlePrivatePolicy}
                    cursor={"pointer"}
                    color={"blue"}
                    fontSize={14}
                  >
                    Privacy Policy
                  </Text>
                  <Text fontSize={13}>&</Text>
                  <Text
                    onClick={handleRefundPolicy}
                    cursor={"pointer"}
                    color={"blue"}
                    fontSize={14}
                  >
                    Refund Policy
                  </Text>
                  
                </Stack>
              </Box>
              <Button
                type="submit"
                colorScheme="#002060"
                bg="#002060"
                my="15px"
                width="100%"
                
              >
                Create Account
              </Button>
            </form>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default SignUp;
