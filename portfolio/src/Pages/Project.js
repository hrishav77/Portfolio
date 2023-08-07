import { Flex ,Text} from '@chakra-ui/react'
import React from 'react'
import Card from '../Components/ProjectCard'
export default function Project() {
  return (
    <Flex direction="column" alignItems="center" id="projects">
        <Text fontSize="4xl" color="#4abca8" mb="5">Projects</Text>
        <Flex>
          <Card delay={100} img={"ecom.png"}/>
          <Card delay={300} img={"goal.png"}/>
          {/* <Card delay={600}/> */}
        </Flex>
       


    </Flex>
  )
}
