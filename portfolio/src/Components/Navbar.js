import React from "react";
// import { Link } from "react-router-dom";
import { Flex, Box, Spacer, Image, useMediaQuery } from "@chakra-ui/react";
export default function Navbar() {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ]);
  return (
    <Flex
      as="nav"
      align="center"
      justify={isSmallScreen ? "center" : "flex-end"}
      wrap="wrap"
      fontSize={isSmallScreen ? "xs" : "lg"}
      padding="1rem"
      bg="transparent"
      position={isSmallScreen ? "" : "fixed"}
      width="100%"
      zIndex="9999"
      color="white"
    >
      {/* <Spacer /> */}

      <Box m={isSmallScreen ? "" : "3"}>
        <a href="" className="navbar">
          Home
        </a>
      </Box>
      <Box m={isSmallScreen ? "" : "3"}>
        <a href="#about" className="navbar">
          About
        </a>
      </Box>
      <Box m={isSmallScreen ? "" : "3"}>
        <a href="#skills" className="navbar">
          Skills
        </a>
      </Box>
      <Box m={isSmallScreen ? "" : "3"}>
        <a href="#projects" className="navbar">
          Projects
        </a>
      </Box>
    </Flex>
  );
}
