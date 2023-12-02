import React from "react";
import { Box } from "@chakra-ui/react";
const VisitOffice = () => {
  return (
    <>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9574270166945!2d77.32486941438542!3d28.571041093613644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44c03ffffff%3A0x3caed564cebaaa62!2sQUIXGO!5e0!3m2!1sen!2sin!4v1674545813318!5m2!1sen!2sin"
          width="100%"
          height="215"
          style={{ color: "black" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Quixgo address map"
        ></iframe>
      </Box>
    </>
  );
};

export default VisitOffice;
