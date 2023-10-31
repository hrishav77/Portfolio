import React from "react";
import { Image, Text, Box, useMediaQuery } from "@chakra-ui/react";
import "../index.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function SkillCard(props) {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ]);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="700"
      data-aos-delay={props.delay}
      className="skill-card" // Apply a custom class for additional styling
    >
      <Box
        shadow="dark-lg"
        maxW={isSmallScreen ? "50px" : "150px"}
        h={isSmallScreen ? "50px" : "170px"}
        background="rgba(255, 255, 255, 0.2)"
        p={isSmallScreen ? "2" : "4"}
        borderRadius="md"
        m="5"
        className="card-content" // Apply a custom class for hover animation
      >
        <Image src={props.img} mt={props.mimg ? props.mimg : ""} />
        <center>
          <Text
            fontSize={isSmallScreen ? "xs" : ""}
            mt={props.mtitle ? props.mtitle : ""}
          >
            {props.title}
          </Text>
        </center>
      </Box>
    </div>
  );
}
