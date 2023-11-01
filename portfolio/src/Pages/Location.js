import React from "react";
import Myloc from "./Myloc";
import Email from "../Components/Email";
import { Text, Flex, Box, useMediaQuery } from "@chakra-ui/react";
export default function Location() {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ]);
  return (
    <Flex
      h={isSmallScreen ? "40em" : "100vh"}
      alignItems="center"
      direction="row"
      justifyContent="flex-end"
      m="5"
      mr={isSmallScreen ? "5%" : "15%"}
      position="relative"
    >
      <Box
        backgroundColor="rgb(255,255,255)"
        p={isSmallScreen ? "4%" : "5%"}
        alignItems="flex-start"
        position="absolute"
        top={isSmallScreen ? "10%" : "20%"}
        right={isSmallScreen ? "50%" : "45%"}
        w={isSmallScreen ? "50%" : "30%"}
      >
        <Text
          fontSize={isSmallScreen ? "sm" : "3xl"}
          fontWeight="bold"
          color="orange.500"
        >
          Contact me
        </Text>
        <Text fontSize={isSmallScreen ? "xs" : "sm"}>
          You can reach out to me by typing your message here.It will send me an
          email, I will try my best to reply as soon as possible.
        </Text>
      </Box>
      <Email />
    </Flex>
  );
}
