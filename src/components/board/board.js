import React from 'react';

import { Container } from './styles'
import Card from './../cards/cards'


export default function board() {
  return (
    <Container>
        <Card />
        <Card />
        <Card />
        <Card />
    </Container>
  );
}
