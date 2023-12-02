import React from "react";
import { Text } from "@chakra-ui/react";
const MerchantPdfDownload = ({textColor}) => {
 
   return (
<Text   cursor='pointer' color={textColor?textColor:''} textAlign={'center'}  textDecoration={'underline'}>
<a href='graphics/Merchant Agreement.pdf' download target="_self">Download <span style={{color:'black'}}>Merchnat Agreement</span></a>
</Text>

   )
};

export default MerchantPdfDownload;
