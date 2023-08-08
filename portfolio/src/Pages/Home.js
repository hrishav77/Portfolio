import React, { useEffect, useState } from "react";
import "../index.css";
import "animate.css";
import { Flex, Image, Text } from "@chakra-ui/react";
import About from "./About";
import Skills from "./Skills";
import AOS from "aos";
import Project from "./Project";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const name = "Hello My name is ";
  const [lettersToShow, setLettersToShow] = useState(0);

  useEffect(() => {
    const totalLetters = name.length;

    if (lettersToShow === totalLetters) {
      setTimeout(() => {
        setLettersToShow(0);
      }, 300);
    } else {
      const timeoutId = setTimeout(() => {
        setLettersToShow((prevLetters) => prevLetters + 1);
      }, 300);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [lettersToShow, name]);

  return (
    <>
      <Flex
        height="100vh"
        justifyContent="center"
        flexDirection="column"
        ml="300px"
      >
        <div style={{ display: "flex" }}>
          {name.split("").map((letter, index) => (
            <Text
              fontSize="2xl"
              color="#4abca8"
              key={index}
              className={`animate__animated ${
                index < lettersToShow ? "animate__swing" : ""
              }`}
            >
              {letter === " " ? "\u00A0" : letter}
            </Text>
          ))}
        </div>
        <Flex>
          <div>
            <Text fontSize="7xl" color="#cdd6f7">
              Hrishav Deka
            </Text>
            <Text color="#5c6883">
              I am passionate about web development.If you searching<br></br>{" "}
              for a full stack developer you have come to the right place
            </Text>
          </div>
          <div>
            <Image
              src="photo.jpg"
              w="350px"
              h="350px"
              borderRadius="50%"
              overflow="hidden"
              ml="10"
              border="#4abca8 solid 1px"
              boxShadow="0 0 10px 3px rgba(74, 188, 168, 0.6)"
            />
          </div>
        </Flex>
      </Flex>
      <Flex h="80vh">
        <div id="about" data-aos="fade-right">
          <About />
        </div>
      </Flex>
      <div id="skills" data-aos="fade-left">
        <Skills />
      </div>

      <Project />
    </>
  );
}
