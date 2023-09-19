import React from "react";
// import { Link } from "react-router-dom";
import { Flex, Box, Spacer, Image } from "@chakra-ui/react";
export default function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="flex-end"
      wrap="wrap"
      fontSize="lg"
      padding="1rem"
      bg="transparent"
      position="fixed"
      width="100%"
      zIndex="9999"
      color="white"
    >
      {/* <Spacer /> */}

      <Box m="3">
        <a href="" className="navbar">
          Home
        </a>
      </Box>
      <Box m="3">
        <a href="#about" className="navbar">
          About
        </a>
      </Box>
      <Box m="3">
        <a href="#skills" className="navbar">
          Skills
        </a>
      </Box>
      <Box m="3">
        <a href="#projects" className="navbar">
          Projects
        </a>
      </Box>
    </Flex>
  );
}
