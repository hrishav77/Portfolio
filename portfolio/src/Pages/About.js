import { Flex, Text, Box, Image } from "@chakra-ui/react";
import React from "react";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import data from "../assets/robo.json";
export default function About() {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Flex
        backgroundColor="rgb(255,255,255,0.1)"
        borderRadius="5"
        w="80%"
        p="4"
      >
        <Flex direction="column" w="80%">
          <Text color="#4abca8" fontSize="5xl">
            So, who am I?
          </Text>
          <Text color="white" id="#about" fontSize="xl" p="3" borderRadius="5">
            Hello! I'm a student at Bits Pilani Goa Campus, pursuing Electronics
            and Communication. Currently in my 3rd year, I am also aquainted
            with Data structures, algorithms (especially in C++), and a basic
            understanding of data science. Beyond academics, I find joy in
            playing football, badminton, and creating websites. Originally from
            Assam, I'm passionate about continuous learning and growth. Excited
            about the journey ahead and the experiences yet to come!
          </Text>
        </Flex>
        <Box w="400px">
          <Lottie animationData={data} />
        </Box>
      </Flex>
    </Flex>
  );
}
