import React from "react";
import Myloc from "./Myloc";
import Email from "../Components/Email";
import { Text, Flex } from "@chakra-ui/react";
export default function Location() {
  return (
    <Flex
      h="100vh"
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Email />
    </Flex>
  );
}
