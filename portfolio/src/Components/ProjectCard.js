import React from 'react'
import { Card, CardBody, CardFooter,Button,ButtonGroup,Image,Stack,Heading,Text} from '@chakra-ui/react'
import 'aos/dist/aos.css'

export default function ProjectCard(props) {
  return (
    <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay={props.delay}>
  <Card maxW='xs' mb="5" borderRadius="xl" m="5">
  <CardBody background="linear-gradient(135deg, white, #E0F8FF);" borderRadius="xl">
    <Image 
      border="green solid 2px"
      src={props.img}
      alt='Green double couch with wooden legs'
      borderRadius='xl'
    />
    <Stack  spacing='2'>
      <Heading size='md'>E-commerce website</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Button  colorScheme="teal">
      view
    </Button>
    </Stack>
  </CardBody>
  {/* <Divider /> */}
  {/* <CardFooter> */}
    
  {/* </CardFooter> */}
</Card>
</div>
  )
}
