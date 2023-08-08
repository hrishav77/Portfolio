import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import "aos/dist/aos.css";
import SkillCard from "../Components/SkillCard";
export default function Skills() {
  return (
    <Flex
      h="100vh"
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Text color="#4abca8" fontSize="5xl">
        Skills
      </Text>
      <Text color="white" fontSize="lg">
        <Flex flexWrap="wrap">
          <SkillCard
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
            title="HTML"
            delay={0}
          />
          <SkillCard img="css.png" title="CSS" delay={300} />
          <SkillCard img="js.png" title="JavaScript" delay={400} />
          <SkillCard img="logo192.png" title="React" delay={500} />
          <SkillCard
            img="node.png"
            title="Node.js"
            delay={600}
            mtitle={12}
            mimg={10}
          />
          <SkillCard img="mongo.png" title="MongoDB" delay={700} />
        </Flex>
      </Text>
    </Flex>
  );
}
