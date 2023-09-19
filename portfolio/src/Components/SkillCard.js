import React from "react";
import { Image, Text, Box } from "@chakra-ui/react";
import "../index.css";
import "animate.css";
export default function SkillCard(props) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="700"
      data-aos-delay={props.delay}
      className="skill-card" // Apply a custom class for additional styling
    >
      <Box
        shadow="dark-lg"
        maxW="150px"
        h="170px"
        background="rgba(255, 255, 255, 0.2)"
        p="4"
        borderRadius="md"
        m="5"
        className="card-content" // Apply a custom class for hover animation
      >
        <Image src={props.img} mt={props.mimg ? props.mimg : ""} />
        <center>
          <Text mt={props.mtitle ? props.mtitle : ""}>{props.title}</Text>
        </center>
      </Box>
    </div>
  );
}