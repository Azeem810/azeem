import {
  Card,
  CardBody,
  Text,
  Image,
  Heading,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import Head from "next/head";

const Cards = () => {
  return (
    <>
    <Head>
        <title>
          Quixgo Services
        </title>
        
        <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. Hassle-free  shipments and courier deliveries .
                  Easy Courier Tracking, COD and Prepaid feature on more than 25000 Pincodes. try Quixgo free!"
        />
        </Head>

      <Box width="100vw" >
        <Heading
          as="h1"
          color="black.500"
          textAlign="center"
          marginBottom={3}
          fontSize={[20, 25, 30]}
          textTransform={'uppercase'}
          mt={-8}
        >
          We Deal in
        </Heading>
        <SimpleGrid spacing={16} columns={[1, 2,3]} px={[55,12,28]} pb={2} >
          <Card bg="white" zIndex={-1} boxShadow="0 0 10px rgba(0, 0, 0, 0.3)">
            
              <Image
                src="graphics/services/ecommerce-retail.webp"
                alt="Quixgo Ecommerce Retail image"
                width='auto'
                height='auto'
                borderTopRadius={4}
              />
            
            <CardBody >
              <Heading as="h2" alignItems="center" gap={2} py={2} fontSize={18}>
                Ecommerce-Retail
              </Heading>
              <Text fontSize={15}>
                Shipment cost is what acquires a major part of your costs in
                ecommerce. Reducing costs, availing you with early COD, maximum
                serviceable pin codes and reducing shipment TAT are our USP.
              </Text>
            </CardBody>
          </Card>

          <Card bg="white" zIndex={-1} boxShadow="0 0 10px rgba(0, 0, 0, 0.3)">
            
              <Image
                src="graphics/services/documents.webp"
                alt="Quixgo Document Courier image"
                width='auto'
                height='auto'
                borderTopRadius={4}
              />
           
            <CardBody>
              <Heading as="h2" alignItems="center" gap={2} py={2} fontSize={18}>
                Document Courier
              </Heading>
              <Text fontSize={15}>
                Want peace of mind while shipping your confidential documents?
                Our chosen courier partners ensure early, safe and secured
                delivery.
              </Text>
            </CardBody>
          </Card>

          <Card bg="white" zIndex={-1} boxShadow="0 0 10px rgba(0, 0, 0, 0.3)">
            
              <Image
                src="graphics/services/door_to_door.webp"
                alt="Quixgo Hyperlocal (D2D) Image"
                width='auto'
                height='auto'
                borderTopRadius={4}
              />
           
            <CardBody>
              <Heading as="h2" alignItems="center" gap={2} py={2} fontSize={18}>
                Hyperlocal
              </Heading>
              <Text fontSize={15}>
                Your business requires delivery of products locally- Door to
                door, 3 hours and same day delivery across Delhi/NCR is
                available.
              </Text>
            </CardBody>
          </Card>
          <Card bg="white" zIndex={-1} boxShadow="0 0 10px rgba(0, 0, 0, 0.3)">
            
              <Image
                src="graphics/services/channel.webp"
                alt="Chnnel integration image"
                width='auto'
                height='auto'
                borderTopRadius={4}
                borderBottom={'1px solid #E6E6EE'}

                
              />
           
            <CardBody>
              <Heading as="h2" alignItems="center" gap={2} py={2} fontSize={18}>
                Channel Integration
              </Heading>
              <Text fontSize={15}>
              Don’t go manual! Integrate your online stores like Shopify, woo Commerce, Open cart, and Amazon with our website in a few minutes.
              </Text>
            </CardBody>
          </Card>
          <Card bg="white" zIndex={-1} boxShadow="0 0 10px rgba(0, 0, 0, 0.3)">
            
              <Image
                src="graphics/services/b-two-b.webp"
                alt="Chnnel integration image"
                width='auto'
                height='auto'
                borderTopRadius={4}
                
              />
           
            <CardBody>
              <Heading as="h2" alignItems="center" gap={2} py={2} fontSize={18}>
                B2B              </Heading>
              <Text fontSize={15}>
              The trade between two business entities needs a wide pin code reach as it facilitates the delivery of bulk products at the right time.
              </Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Cards;
