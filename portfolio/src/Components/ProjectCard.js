import React from 'react'
import { Card, CardBody, CardFooter,Button,ButtonGroup,Image,Stack,Heading,Text,Box,Flex} from '@chakra-ui/react'
import 'aos/dist/aos.css'

export default function ProjectCard(props) {
  return (
  <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay={props.delay}>
  {/* <Card maxW='sm' mb="5" borderRadius="xl" m="5" background="rgba(255, 255, 255, 0)" _hover={{ background: 'rgba(255, 255, 255, 0.2)' }} border="0px">
  <CardBody  borderRadius="xl">
    <Image 
      border="green solid 2px"
      src={props.img}
      alt='Green double couch with wooden legs'
      borderRadius='xl'
    />
    
    <Stack  spacing='2'>
      <Heading size='sm' color="#4abca8">E-commerce website</Heading>
      <Text color="white" fontSize="xs">
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Button  colorScheme="teal">
      view
    </Button>
    </Stack>
  </CardBody>
 
</Card> */}
<Flex m="5" _hover={{ background: 'rgba(255, 255, 255, 0.2)' }} p="5" borderRadius="lg">
  <Box>
  <Image 
      maxW="md"
      border="green solid 2px"
      src={props.img}
      alt='Green double couch with wooden legs'
      borderRadius='xl'
    />
  </Box>
  <Box m="3">
    <Heading size='md' color="#4abca8">{props.title}</Heading>
    <Text color="white" fontSize="sm">
          {props.desc}
    </Text>
  </Box>
</Flex>
</div>
  )
}
