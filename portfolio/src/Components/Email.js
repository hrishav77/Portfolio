import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
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
  const form = useRef();
  const [stats, setstat] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j1fncr1",
        "template_rjfyixc",
        form.current,
        "g0ldATgH_59xsqyJ-"
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
    <Flex direction="column" w="50%" alignItems="center">
      <Text fontSize="4xl" color="#4abca8" mb="5">
        Want to contact me?
      </Text>
      <Flex direction="column" color="white" w="300px">
        <form ref={form} onSubmit={sendEmail}>
          <FormControl id="name" isRequired mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="user_name" />
          </FormControl>
          <FormControl id="email" isRequired mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="user_email" />
          </FormControl>
          <FormControl id="message" isRequired mb={6}>
            <FormLabel>Message</FormLabel>
            <Textarea name="message" />
          </FormControl>
          <Button
            type="submit"
            color="blackAlpha.800"
            className="bubbly-button"
            on
          >
            Submit
          </Button>
        </form>
      </Flex>
      <Text color="white" alignContent="center" p="3" size="xl">
        {stats}
      </Text>
    </Flex>
  );
};
export default Email;
