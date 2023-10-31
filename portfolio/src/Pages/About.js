import { Flex, Text, Box, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";

import "aos/dist/aos.css";
import Lottie from "lottie-react";
import data from "../assets/robo.json";
export default function About() {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ]);
  return (
    <Flex justifyContent="center" alignItems="center">
      <Flex
        backgroundColor="rgb(255,255,255,0.1)"
        borderRadius="5"
        w={isSmallScreen ? "60%" : "80%"}
        p={isSmallScreen ? "1" : "4"}
        direction={isSmallScreen ? "column" : ""}
      >
        <Flex direction="column" w={isSmallScreen ? "100%" : "80%"}>
          <Text color="#4abca8" fontSize={isSmallScreen ? "lg" : "5xl"}>
            So, who am I?
          </Text>
          {isSmallScreen && (
            <Box w={isSmallScreen ? "150px" : "400px"} alignItems="center">
              <Lottie animationData={data} />
            </Box>
          )}
          <Text
            color="white"
            id="#about"
            fontSize={isSmallScreen ? "xs" : "xl"}
            p={isSmallScreen ? "" : "3"}
            borderRadius="5"
            m="2"
          >
            Hello! I'm a student at Bits Pilani Goa Campus, pursuing Electronics
            and Communication. Currently in my 3rd year, I am also aquainted
            with Data structures, algorithms (especially in C++), and a basic
            understanding of data science. Beyond academics, I find joy in
            playing football, badminton, and creating websites. Originally from
            Assam, I'm passionate about continuous learning and growth. Excited
            about the journey ahead and the experiences yet to come!
          </Text>
        </Flex>
        {!isSmallScreen && (
          <Box w={isSmallScreen ? "200px" : "400px"}>
            <Lottie animationData={data} />
          </Box>
        )}
      </Flex>
    </Flex>
  );
}
