import React from "react";
import { Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#637da5",
        padding: "20px",
        // textAlign: "center",
        color: "white",
      }}
    >
      <Flex direction="column">
        <Text fontSize="lg">Contact:f20210629@goa.bits-pilani.ac.in</Text>
        {/* <Text fontSize="xl">Phone: +1234567890</Text> */}
      </Flex>
      <Text fontSize="lg">Made by Hrishav</Text>
    </footer>
  );
};

export default Footer;
