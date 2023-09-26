import React, { useEffect, useState } from "react";
import "../index.css";
import "animate.css";
import { Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import About from "./About";
import Skills from "./Skills";
import AOS from "aos";
import Project from "./Project";
import Location from "./Location";
import Footer from "../Components/Footer";

export default function Home() {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ]);
  useEffect(() => {
    AOS.init({ duration: 2000 });
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
        height={isSmallScreen ? "70vh" : "100vh"}
        justifyContent="center"
        alignItems="center"
      >
        <Flex direction="column" w="30%">
          <Flex direction="row">
            {name.split("").map((letter, index) => (
              <Text
                fontSize={isSmallScreen ? "md" : "2xl"}
                color="#4abca8"
                key={index}
                className={`animate__animated ${
                  index < lettersToShow ? "animate__swing" : ""
                }`}
              >
                {letter === " " ? "\u00A0" : letter}
              </Text>
            ))}
          </Flex>
          <Flex direction="column">
            <Text fontSize={isSmallScreen ? "lg" : "7xl"} color="#cdd6f7">
              Hrishav Deka
            </Text>
            <Text color="#5c6883">
              I am passionate about web development.If you searching<br></br>{" "}
              for a full stack developer you have come to the right place
            </Text>
            <Flex
              direction="row"
              justifyContent="center"
              alignItems="center"
              w="30%"
            >
              <a href="https://www.linkedin.com/in/hrishav-deka-67421b256/">
                <Image
                  src="link.png"
                  w="60%"
                  m="3"
                  mt="60%"
                  className="links"
                />
              </a>
              <a href="https://github.com/hrishav77">
                <Image
                  src="insta.png"
                  w="60%"
                  m="3"
                  mt="60%"
                  className="links"
                />
              </a>
              <a href="https://www.instagram.com/hrishav_d/">
                <Image
                  src="instagram.png"
                  w="60%"
                  m="3"
                  mt="60%"
                  className="links"
                />
              </a>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          backgroundColor="rgb(255,255,254,0.08)"
          w="40%"
          p="3"
          justifyContent="center"
        >
          <Image
            src="photo.jpg"
            w={isSmallScreen ? "150px" : "350px"}
            h={isSmallScreen ? "150px" : "350px"}
            borderRadius="0.5%"
            overflow="hidden"
            // ml="40%"
            // border="#4abca8 solid 1px"
            boxShadow="0 0 5px 5px rgba(74, 188, 168, 0.6)"
          />
        </Flex>
      </Flex>
      <Flex h="60vh">
        <div id="about" data-aos="fade-right">
          <About />
        </div>
      </Flex>
      <div id="skills" data-aos="fade-left">
        <Skills />
      </div>
      <Project />
      <Location />
      {/* <Footer /> */}
    </>
  );
}
