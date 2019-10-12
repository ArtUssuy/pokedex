import React, { useState, useEffect } from 'react'
import axios from 'axios'


import { Container } from './styles'
import Card from './../cards/cards'


const Board = () => {

    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const url = "https://pokeapi.co/api/v2/pokemon"
            const response = await axios(url)
            setData(response.data.results)
        }
        
        fetchData()
        

    }, [])

  return (
    <Container>
        {
            data !== undefined ? data.map((pokemon) => 
                <Card 
                    key={pokemon.name} 
                    pokemonName={pokemon.name} 
                    pokemonIndex={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                />) : ""
        }
    </Container>
  );
}

export default Board
