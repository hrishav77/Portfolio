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
import AOS from "aos";

export default function ProjectCard(props) {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 1000px)",
    "(display-mode: browser)",
  ]);
  return (
    <div
      data-aos={isSmallScreen ? "" : "zoom-in"}
      data-aos-duration={isSmallScreen ? "" : "700"}
      data-aos-delay={props.delay}
    >
      <Flex
        m="10"
        className="projecthover"
        p="5"
        borderRadius="lg"
        background={isSmallScreen ? "rgba(255, 255, 255, 0.1)" : ""}
        border={isSmallScreen ? "solid rgba(255, 255, 255, 0.6) 1px" : ""}
        box-shadow={isSmallScreen ? "0 0 20px 4px rgb(255,255,255,0.1)" : ""}
        direction={isSmallScreen ? "column" : ""}
        alignItems={isSmallScreen ? "center" : ""}
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
        <Box m="3" alignItems={isSmallScreen ? "center" : ""}>
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
