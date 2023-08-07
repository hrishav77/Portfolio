import { Flex,Text } from '@chakra-ui/react'
import React from 'react'
import 'aos/dist/aos.css'
export default function About() {
  return (
    <div id="about" data-aos="fade-right">
    <Text color="#4abca8" fontSize="5xl" ml="200px" mt="100px" >About me</Text>
    <Flex h="100vh" alignItems="center" ml="200px">
    <Text color="white" id="#about" fontSize="lg" w="container.md" >
    Hello everyone I am a student of Bits Pilani Goa Campus, I am currently pursuing my Electronics and communication
    degree here.
    </Text>

    </Flex>
    </div>
  )
}
