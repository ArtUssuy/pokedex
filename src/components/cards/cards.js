import React, { useState } from 'react';
import { Container, Image, Label } from './styles';

const Card = () => {

  const [image, setImage] = useState("https://static.quizur.com/i/b/57c1c26fc0b812.5998420157c1c26fb156c9.51498011.png")
  const [name, setName] = useState("???")



  return (
    <Container>
      <Image src={image} />
      <footer>
        <Label>{name}</Label>
      </footer>
    </Container>
  );
}

export default Card