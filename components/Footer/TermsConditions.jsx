import { Box, Text, Image, Flex, Link, Heading } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
function TermsConditions() {
 
  return (
    <>
    <Head>
        
        <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. Hassle-free  shipments and courier deliveries .
                  Easy Courier Tracking, COD and Prepaid feature on more than 25000 Pincodes. try Quixgo free!"
        />
        </Head>
     {/* bgGradient="linear(to-tl, #000068, white ) " */}
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        mx={[7, 10, 20, 20]}
       
      >
        <Flex alignItems={"center"} justifyContent={"center"} mt={110}
        
        >
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
            Terms and Conditions
          </Heading>
        </Flex>

        <Image
          src="graphics/policy-images/term-&-condition.webp"
          mt={90}
          display={["none", "none", "none", "block"]}
        alt="Terms and Conditions Image of Quixgo"

        />
      </Flex>

      <Image
        src="graphics/policy-images/term-&-condition.webp"
        m={"auto"}
        my={10}
        display={["block", "block", "block", "none"]}
        alt="Terms and Conditions Image of Quixgo"
      />

      <Heading
      as={'h2'}
        fontWeight="bold"
        mb="1rem"
        fontSize={20}
        mx={[7, 10, 20, 20]}
        mt={10}
      >
        Our Terms and Conditions
      </Heading>
      <Box>
        <Text mx={[7, 10, 20, 20]}>Effective Date: 01-06-2022</Text>
        <Text mx={[7, 10, 20, 20]}>
          Website Covered:{" "}
          <Link href="https://www.quixgo.com" color={"blue"}>
            www.quixgo.com{" "}
          </Link>
        </Text>
        <Text mx={[7, 10, 20, 20]}>
          a. www.quixgo.com (&ldquo;Website&rdquo; or &ldquo;Platform&rdquo;),
          is owned, registered and operated by Quixgo Infotech Private Limited
          &apos;Company&apos;, a private limited company, incorporated under the
          provisions of the Companies Act, 2013, and having its registered
          office at G-03/G-04,1st Floor, Dharampali Palace, Bhoja Mkt, Sec-27,
          Near Vinayak Hospital, Atta, Noida- 201301.
        </Text>
        <Text mx={[7, 10, 20, 20]}>
          b. For the purpose of these Terms of Use, wherever the context so
          requires &apos;You&apos;, &apos;Your&apos; or &apos;User&apos; shall
          mean any person who uses the Platform for availing the Services. The
          term &apos;We&apos;, &apos;Us&apos;, &apos;Our&apos; shall mean the
          Company, its employees, and authorised agents that perform any
          services on the Company&rsquo;s behalf.
        </Text>
        <Text mx={[7, 10, 20, 20]}>
          c. By accessing or using the Website or by using the Service on the
          Website you agree to be bound by the Terms and Conditions set forth
          below including any additional guidelines and future modifications.
          QUIXGO may add to, change or remove any part of these Terms and
          Conditions of Use at any time, without notice. Any changes to these
          Terms and Conditions of Use or any terms published on this Website
          apply as soon as they are released. Click on the below given link to
          download the merchant agreement . This merchant agreement is also part
          of the terms and conditions. &nbsp;
          <a href="graphics/Merchant Agreement.pdf" download target="_self">
            <span style={{ color: "blue" }}>Download Merchant Agreement</span>
          </a>
        </Text>
        <Text mx={[7, 10, 20, 20]}>
          d. We are aggregators of logistic services. Through our Platform, we
          enable the User(s) to ship orders to multiple locations, without
          having to deal with multiple courier companies (&apos;Service
          Providers&apos;) (&apos;Services&apos;).
        </Text>
        <Text mx={[7, 10, 20, 20]}>
          e. We are aggregators between the Service Providers and the Users.
          These Terms of Use should not be construed in any way to mean that we
          provide such Services herein. We do not make any representation or
          warranty as to the timeliness and/or the quality of the Services to be
          provided by the Service Provider to the User. We do not accept
          liability for any errors or omissions committed by the Service
          Provider or their authorised personnel. The Service Providers are not
          employees or agents of the Company and the Company shall not be held
          liable for their actions or inactions.
        </Text>
        <Text mx={[7, 10, 20, 20]}>
          f. As a condition of your use of this Website, you agree that You will
          provide your proper and accurate Name as per Passport or any other
          official ID issued by a statutory body, Address, Email ID, Contact
          Number, mobile, direct landline, and will be solely responsible for
          the Information provided and in case of any error or mistake in the
          provision of information, QUIXGO will not be liable for the same. You
          agree that you will not use the Services provided by QUIXGO for any
          unauthorized and unlawful purpose. You will not impersonate another
          person to any of the aforesaid.
        </Text>
        <Text mx={[7, 10, 20, 20]}>
          g. You will use this Website to make only appropriate transactions for
          you or for another person for whom you are authorized to act, and will
          inform such other persons about the Terms of Use that apply to the
          transaction you have made on their behalf, including all rules and
          restrictions apply. You indemnify Quixgo against any illegal purchases
          made by you or any other person either legally authorized or on
          account of your negligence.
        </Text>
        <Text mx={[7, 10, 20, 20]}>List of banned or Prohibited Products</Text>
        <Text mx={[7, 10, 20, 20]} my={2} fontWeight={600} color={"red"}>
          Dangerous Items:
        </Text>
        <Box mx={[7, 10, 20, 20]}>
          <ul>
            <li>Oil-based paint and thinners (flammable liquids)</li>
            <li>Industrial solvents</li>
            <li>Insecticides, garden chemicals (fertilizers, poisons)</li>
            <li>Lithium batteries</li>
            <li>Magnetized materials</li>
            <li>
              Machinery (chain saws, outboard engines containing fuel or that
              have contained fuel)
            </li>
            <li>Fuel for camp stoves, lanterns, torches or heating elements</li>
            <li>Automobile batteries</li>
            <li>Infectious substances</li>
            <li>Any compound, liquid or gas that has toxic characteristics</li>
            <li>Bleach</li>
            <li>Flammable adhesives</li>
            <li>Arms and ammunitions (including air guns)</li>
            <li>Dry ice (Carbon Dioxide, Solid)</li>
            <li>
              Any Aerosols, liquids and/or powders or any other flammable
              substances
            </li>
            <li>classified as Dangerous Goods for transport by Air</li>
          </ul>
        </Box>

        <Text mx={[7, 10, 20, 20]} my={2} fontWeight={600} color={"red"}>
          Restricted Items:
        </Text>

        <Box mx={[7, 10, 20, 20]}>
          <ul>
            <li>Precious stones, gems and jewellery</li>
            <li>Uncrossed (bearer) drafts / cheque, currency and coins</li>
            <li>Poison</li>
            <li>Firearms, explosives and military equipment.</li>
            <li>Hazardous and radioactive material</li>
            <li>Foodstuff(Perishable) and liquor</li>
            <li>Any pornographic material</li>
            <li>Hazardous chemical items</li>
          </ul>
        </Box>
        <Text mx={[7, 10, 20, 20]}>&nbsp;</Text>
      </Box>
    </>
  );
}
export default TermsConditions;
