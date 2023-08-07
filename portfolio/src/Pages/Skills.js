import React from 'react'
import { Flex,Text } from '@chakra-ui/react'
import 'aos/dist/aos.css'
export default function Skills() {
  return (
    <div id="skills" data-aos="fade-down">
    <Flex h="100vh" mt="30vh" alignItems="center" direction="column" >
    <Text color="#4abca8" fontSize="5xl">Skills</Text>
    <Text color="white" id="#about" fontSize="lg" >
    <li>Html</li>
    <li>CSS</li>
    </Text>
    </Flex>
    </div>
  )
}
