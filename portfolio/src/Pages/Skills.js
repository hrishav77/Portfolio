import React from "react";
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import "aos/dist/aos.css";
import SkillCard from "../Components/SkillCard";
export default function Skills() {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 1000px)",
    "(display-mode: browser)",
  ]);
  return (
    <Flex
      h={isSmallScreen ? "40vh" : "80vh"}
      alignItems="center"
      direction="column"
      justifyItems="center"
    >
      <Text color="#4abca8" fontSize={isSmallScreen ? "lg" : "5xl"}>
        What are my skills?
      </Text>
      <Text color="white" fontSize={isSmallScreen ? "sm" : "lg"}>
        <Flex flexWrap="wrap" ml="3">
          <SkillCard
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
            title="HTML"
            mtitle={isSmallScreen ? "4" : ""}
            delay={0}
          />
          <SkillCard
            img="css.png"
            title="CSS"
            delay={300}
            mtitle={isSmallScreen ? "4" : ""}
          />
          <SkillCard
            img="js.png"
            title="JavaScript"
            delay={400}
            mtitle={isSmallScreen ? "4" : ""}
          />
          <SkillCard
            img="logo192.png"
            title="React"
            delay={500}
            mtitle={isSmallScreen ? "5" : ""}
          />
          <SkillCard
            img="node.png"
            title="Node.js"
            delay={600}
            mtitle={isSmallScreen ? "5" : "12"}
            mimg={isSmallScreen ? "3" : "10"}
          />
          <SkillCard
            img="mongo.png"
            title="MongoDB"
            delay={700}
            mtitle={isSmallScreen ? "5" : ""}
          />
        </Flex>
      </Text>
    </Flex>
  );
}
