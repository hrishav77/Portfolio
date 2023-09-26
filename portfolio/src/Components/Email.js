import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";
const Email = () => {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ]);
  const form = useRef();
  const [stats, setstat] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_KEY1,
        process.env.REACT_APP_KEY2,
        form.current,
        process.env.REACT_APP_KEY3
      )
      .then(
        (result) => {
          setstat(
            "The mail was sent. I will get back to you as soon as possible"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Flex
      direction="column"
      w={isSmallScreen ? "80%" : "50%"}
      alignItems={isSmallScreen ? "flex-end" : "center"}
      // justifyItems="flex-end"
      backgroundColor="rgb(0,0,0,0.6)"
      // borderRadius="3%"
      p="9%"
    >
      <Text fontSize={isSmallScreen ? "sm" : "4xl"} color="white" mb="5">
        Send Me A Message
      </Text>
      <Flex
        direction="column"
        color="white"
        w={isSmallScreen ? "150px" : "300px"}
      >
        <form ref={form} onSubmit={sendEmail}>
          <FormControl id="name" isRequired mb={isSmallScreen ? "" : "4"}>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="user_name" />
          </FormControl>
          <FormControl id="email" isRequired mb={isSmallScreen ? "" : 4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="user_email" />
          </FormControl>
          <FormControl id="message" isRequired mb={6}>
            <FormLabel>Message</FormLabel>
            <Textarea name="message" />
          </FormControl>
          <Button type="submit" backgroundColor="#ff4902" on color="white">
            Send
          </Button>
        </form>
      </Flex>
      <Text
        color="white"
        alignContent="center"
        p="3"
        size={isSmallScreen ? "sm" : "xl"}
      >
        {stats}
      </Text>
    </Flex>
  );
};
export default Email;
