import React, { useState, useEffect, setState } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';

import { Container } from './styles'
import Card from './../cards/cards'


const Board = () => {

    const [data, setData] = useState([])
    const [times, setTimes] = useState(100)

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${times}`
            const response = await axios(url)
            setData(response.data.results)
        }
        fetchData()
    })

    const fetchMoreData = () => {
		let number = times 
		let number2 = number + 100
		setTimes(number2)
    }

  return (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={times < 200 ? true : false}
		  endMessage={"End!"}
          loader={<h4>Loading...</h4>}
        >
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

        </InfiniteScroll>
  );
}

export default Board
