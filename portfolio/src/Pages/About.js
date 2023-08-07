import { Flex,Text } from '@chakra-ui/react'
import React from 'react'

export default function About() {
  return (
    <>
    <Text color="#4abca8" fontSize="5xl" ml="200px" mt="100px" id="about">About me</Text>
    <Flex h="100vh" alignItems="center" ml="200px">
    <Text color="white" id="#about" fontSize="lg" w="container.md">
    Hello everyone I am a student of Bits Pilani Goa Campus, I am currently pursuing my Electronics and communication
    degree here.
    </Text>

    </Flex>
    </>
  )
}
