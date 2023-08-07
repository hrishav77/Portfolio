import { Flex ,Text} from '@chakra-ui/react'
import React from 'react'
import Card from '../Components/ProjectCard'
export default function Project() {
  const p1="It is an e-commerce website, designed to showcase the functionality of an online shopping experience. It includes a home page, individual product page, cart feature and a demo payment form along with authorization using jwt token authentication and few other features. Its made using react, mongoose, express, chakra ui and node.js"
  const p2="It is a simple and user-friendly platform where we can post our goals, set priorities, and track our progress. With just a few clicks, we can define our objectives, determine when to start and finish them, and stay motivated along the way. It is a mern (MongoDB, Express, React,Node) website with jwt token authentication."
  const p3="This is a website based on a ML model which was trained using health and lifestyle dataset using logistic regression and can predict thechances of sleep disorder. The training of the model was done in jupyter notebook along with data analysis and cleaning. The website is made using react, chakra and flask by importing the same model trained in jupyter notebook using pickle library."
  return (
    <Flex direction="column" alignItems="center" id="projects">
        <Text fontSize="4xl" color="#4abca8" mb="5">Projects</Text>
        <Flex direction="column">
          <Card delay={100} img={"ecom.png"} title="E-commerce website" desc={p1}/>
          <Card delay={200} img={"goal.png"} title="Goal Manager" desc={p2}/>
          <Card delay={300} img={"sleep.jpg"} title="Sleep disorder predictor" desc={p3}/>

        
        </Flex>
       


    </Flex>
  )
}
