import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Card from "../Components/ProjectCard";
export default function Project() {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ]);
  const p1 =
    "It is an e-commerce website, designed to showcase the functionality of an online shopping experience. It includes a home page, individual product page, cart feature and a demo payment form along with authorization using jwt token authentication . Its made using react, mongoose, express, chakra ui and node.js";
  const p2 =
    "It is a simple and user-friendly platform where we can post our goals, set priorities, and track our progress. With just a few clicks, we can define our objectives, determine when to start and finish them, and stay motivated along the way. It is a mern (MongoDB, Express, React,Node) website with jwt token authentication.";
  const p3 =
    "This is a website based on a ML model which was trained using health and lifestyle dataset using logistic regression and can predict thechances of sleep disorder. The training of the model was done in jupyter notebook along with data analysis and cleaning. The website is made using react, chakra and flask by importing the same model trained in jupyter notebook using pickle library.";
  return (
    <Flex direction="column" alignItems="center" id="projects">
      <Text color="#4abca8" fontSize={isSmallScreen ? "2xl" : "5xl"} mb="5">
        My projects
      </Text>
      <Flex direction="column">
        <a href="https://shop-ify.netlify.app/" target="_blank">
          <Card
            delay={100}
            img={"ecom.png"}
            title="E-commerce website"
            desc={p1}
          />
        </a>
        <a href="https://rozaana.netlify.app/" target="_blank">
          <Card delay={200} img={"goal.png"} title="Goal Manager" desc={p2} />
        </a>
        <a href="https://sleeping-disorder.netlify.app/" target="_blank">
          <Card
            delay={0}
            img={"sleep.jpg"}
            title="Sleep disorder predictor"
            desc={p3}
          />
        </a>
      </Flex>
    </Flex>
  );
}
