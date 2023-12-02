import React from "react";
import { Box, Text, Image, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
function CancelPolicy() {
  
  return (
    <>
     <Head>
        
        <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. Hassle-free  shipments and courier deliveries .
                  Easy Courier Tracking, COD and Prepaid feature on more than 25000 Pincodes. try Quixgo free!"
        />
        </Head>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        mx={[7, 10, 20, 20]}
      >
        <Flex alignItems={"center"} justifyContent={"center"} mt={110}>
          <Box
            height={16}
            borderLeft={"6px solid #00004a"}
            display={"inline"}
          ></Box>
          <Heading
          as={'h1'}
            ml="10"
            wordBreak={"break-word"}
            cursor="pointer"
            color={"black"}
            fontWeight={700}
            fontSize={[28, 30, 30, 40]}
          >
            Refund Policy
          </Heading>
        </Flex>

        <Image
          src="graphics/policy-images/refund-policy.webp"
          mt={90}
          display={["none", "none", "none", "block"]}
          alt="Refund Policy Image of Quixgo"
        />
      </Flex>

      <Image
        src="graphics/policy-images/refund-policy.webp"
        m={"auto"}
        my={10}
        display={["block", "block", "block", "none"]}
        alt="Refund Policy Image of Quixgo"

      />

      <Heading
      as={'h2'}
        fontWeight="bold"
        mb="1rem"
        mx={[7, 10, 20, 20]}
        fontSize={20}
        mt={10}
      >
        Our Refund Policy
      </Heading>
      <Box mb={10}>
        <Text mx={[7, 10, 20, 20]}>
          You may cancel your account at any time by emailing support@quixgo.in
        </Text>
        <Text mx={[7, 10, 20, 20]}>
          Once your account is cancelled all Your Content will be immediately
          deleted from the Service.Since deletion of all data is final,please be
          sure that you do in fact want to cancel your account before doing so.
        </Text>
        <Text mx={[7, 10, 20, 20]}>
          If you cancel the service middle of month,you will receive one final
          invoice via email.Once that invoice has been paid you will not be
          charged again.
        </Text>
        <Text mx={[7, 10, 20, 20]}>
          We reserve the right to modify or terminate the Quixgo service for any
          without notice at any time.
        </Text>
        <Text mx={[7, 10, 20, 20]}>
          Fraud:without limiting any other remedies,Quixgo may suspend or
          terminate your account if we suspect that you(by
          conviction,settlement,insurance,escrow investigation,or otherwise)have
          engaged in fraudulent activity in connection with the site.
        </Text>
        <Text mx={[7, 10, 20, 20]}>
          <span style={{ fontWeight: "700" }}>Note:</span> No refunds are
          offered,even if a plan is cancelled mid-month.
        </Text>
      </Box>
    </>
  );
}
export default CancelPolicy;
