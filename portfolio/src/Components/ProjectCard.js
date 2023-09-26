import React from "react";
import {
  Image,
  Heading,
  Text,
  Box,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import "aos/dist/aos.css";

export default function ProjectCard(props) {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ]);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="700"
      data-aos-delay={props.delay}
    >
      <Flex
        m="10"
        className="projecthover"
        p="5"
        borderRadius="lg"
        direction={isSmallScreen ? "column" : ""}
      >
        <Box>
          <Image
            maxW={isSmallScreen ? "3xs" : "md"}
            border="green solid 2px"
            src={props.img}
            alt="Green double couch with wooden legs"
            borderRadius="xl"
          />
        </Box>
        <Box m="3">
          <Heading size={isSmallScreen ? "xs" : "md"} color="#4abca8">
            {props.title}
          </Heading>
          <Text color="white" fontSize={isSmallScreen ? "xs" : "sm"}>
            {props.desc}
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
