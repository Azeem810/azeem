import {
  Box,
  Link,
  Text,
  Flex,
  Image,
  useToast,
  Input,
  Button,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { Roboto } from "next/font/google";
import style from "../../styles/navbar.module.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
export const roboto = Roboto({
  weight: ["300"],
  display: "swap",
  subsets: ["latin"],
});


export default function LargeWithLogoCentered() {
  const toast = useToast();
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = (e, field) => {
    let value = e.target.value;
    if (field === "name") {
      setName(value);
    } else if (field === "email") {
      setEmail(value);
    } else if (field === "textarea") {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    let nameValidate = name.length > 2;

    if (emailValidate && nameValidate && message !== "") {
     
      toast({
        title: "Message Sent 😊",
        description:`Thank you! I'll contact you shortly.`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      emailjs
        .sendForm(
          "service_f7pwwht",
          "template_47pdcu3",
          form.current,
          "O3R7749dl85_KbhKN"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setEmail("");
      setMessage("");
      setName("");
    } else {
      if (name === "" && email === "" && message === "") {
        return toast({
          title: "Please Fill the form",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        if (emailValidate == false) {
          return toast({
            title: "Please enter valid Email",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
        } else if (nameValidate === false) {
          return toast({
            title: "Please enter valid Name",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
        } else {
          return toast({
            title: "Please enter something in message",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
        }
      }
    }
  };
  
  return (
    <>
      <Heading
        as="h1"
        textAlign="center"
        fontSize={{ base: "24px", md: "33px" }}
        mb={8}
        id="contact"
        color={'white'}
      >
        Contact Me
      </Heading>

      <Box pos={"relative"} width={[300, 400, 500, 600]} m={"auto"}>
        <form ref={form} onSubmit={handleSubmit}>
          {/* <Input type="text"  py={6} borderRadius={50} placeholder="Enter Your Email"  className={style.input_box} onChange={(e)=>handleEmail(e)}/>
          <Text display={'inline-block'} cursor='pointer' onClick={handleSubmit}><CiLocationArrow1 style={{right:0,  top:0,position:'absolute',borderRadius:'50%',background:'black',padding:10}} color="aqua" fontSize={50}/></Text> */}
          <Input
            type="text"
            name="user_name"
            py={6}
            borderRadius={10}
            placeholder="Enter Your Name"
            className={style.input_box}
            onChange={(e) => handleEmail(e, "name")}
            mb={3}
            value={name}
            color={'white'}

          />
          <Input
            type="email"
            name="user_email"
            py={6}
            borderRadius={10}
            placeholder="Enter Your Email"
            className={style.input_box}
            onChange={(e) => handleEmail(e, "email")}
            mb={3}
            value={email}
            color={'white'}

          />
          <Textarea
            rows="4"
            name="message"
            cols="50"
            py={6}
            borderRadius={10}
            placeholder="Enter Your message"
            className={style.input_box}
            onChange={(e) => handleEmail(e, "textarea")}
            mb={3}
            value={message}
            color={'white'}
          />
          <Button
            type="submit"
            width={"100%"}
           
            border={"1px solid white"}
            _hover={{ background: "white", boxShadow: "0px 0px 10px white" }}
            boxShadow="2px 2px 30px black"
          >
            Send
          </Button>
          
        </form>
      </Box>
      <Flex
        align={"center"}
        borderBottom="1px solid"
        borderColor="white"
        mt={10}
        mx={[5, 10, 20]}
      ></Flex>

      <Box>
        <Flex
          flexDir={"row"}
          justifyContent={"center"}
          gap={[16, 24, 60, 60]}
          mt={5}
        >
          <Flex flexDir={["row"]} gap={[4, 7, 7, 7, 7]}>
            
            <ScrollLink
              to="home" 
              spy={true}
              smooth={true}
              duration={500}
              style={{
                textDecoration: "none",
                fontFamily: "Poppins, sans-serif",
                marginBottom: "3px",
                fontWeight: 400,
                color: "white",
                cursor:'pointer'
              }}
             
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about" 
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              style={{
                textDecoration: "none",
                fontFamily: "Poppins, sans-serif",
                marginBottom: "3px",
                fontWeight: 400,
                color: "white",
                cursor:'pointer'
              }}
              
            >
              About
            </ScrollLink>
          </Flex>

          <Flex flexDir={["row"]} gap={[4, 7, 7, 7, 7]}>
            

            <Link
              href={"https://twitter.com/ErAzeem7" ?? ""}
              aria-label="btnFacebook"
              target="_blank"
              _hover={{ boxShadow: "2px 2px 20px white" }}
              style={{
                textDecoration: "none",
                background: "white",
                padding: 10,
                borderRadius: "8px",
              }}

            >
              <BsTwitter
                color="black"
                fontSize={18}
                style={{ marginTop: "3px" }}
              />
            </Link>

            <Link
              href={"https://www.linkedin.com/in/mo-azeem-1306a7228/" ?? ""}
              aria-label="btnInstagram"
              target="_blank"
              style={{
                textDecoration: "none",
                background: "white",
                padding: 10,
                borderRadius: "8px",
              }}
              _hover={{ boxShadow: "2px 2px 20px white", color: "red" }}
            >
              <BsLinkedin
                color="black"
                fontSize={18}
                style={{ marginTop: "3px" }}
              />
            </Link>
          </Flex>
        </Flex>
      </Box>

      <Box color={"white"}>
        <Image
          src="/images/footer.png"
          alt="Azeem portfolio footer background image"
          width={"full"}
        />
      </Box>
    </>
  );
}
