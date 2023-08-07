import React, { useEffect, useState } from 'react';
import '../index.css';
import 'animate.css';
import {Flex, Text } from '@chakra-ui/react';

export default function Home() {
  const name = 'Hello My name is ';
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
   <Flex height="100vh" justifyContent="center" flexDirection="column" ml="300px">
  <div style={{ display: 'flex'}}>
    {name.split('').map((letter, index) => (
      <Text
        fontSize="2xl"
        color="#4abca8"
        key={index}
        className={`animate__animated ${index < lettersToShow ? 'animate__swing' : ''}`}
      >
        {letter}
      </Text>
    ))}
  </div>
  <Text fontSize="7xl" color="#cdd6f7">Hrishav Deka</Text>
  <Text color="#5c6883">
    I am passionate about web development and i like making websites 
  </Text>
</Flex>

        </>
  );
}
