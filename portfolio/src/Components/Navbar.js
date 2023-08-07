import React from 'react'
// import { Link } from "react-router-dom";
import { Flex,Box, Spacer } from '@chakra-ui/react';
export default function Navbar() {
  return (
    <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    fontSize="xl"
    padding="1rem"
    bg="transparent"
    position="fixed"
    width="100%"
    zIndex="9999"
    color="white"
    
  >
    
    
      <Spacer/>
      <Box m="3">
      <a href="">
        Home
      </a>
      </Box>
      <Box m="3">
      <a href="#about">
        About
      </a>
      </Box>
      <Box m="3">
      <a href="#skills">
        Skills
      </a>
      </Box>
      <Box m="3">
      <a href="#projects">
        Projects
      </a>
      </Box>
    
  </Flex>
  )
}
