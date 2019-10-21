import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoad from "react-lazyload";

import { Container } from "./styles";
import Card from "./../cards/cards";

const Infinite = ({ filterOptions, totalPokemons }) => {
	const [data, setData] = useState([]);
	const [infiniteScroll, setInfiniteScroll] = useState(10);

	useEffect(() => {
		fetchData();
	}, [filterOptions]);

	const fetchData = async (set = 0, infiniteScroll) => {
		const url = `https://pokeapi.co/api/v2/pokemon?offset=${set}&limit=${infiniteScroll}`;
		const response = await axios(url);
		setData(response.data.results);
	};

	const fetchMoreData = () => {
		let value = infiniteScroll;
		setInfiniteScroll((value += 10));
		fetchData(0, infiniteScroll);
	};

	return (
		<InfiniteScroll
			dataLength={data.length}
			next={fetchMoreData}
			hasMore={infiniteScroll < totalPokemons ? true : false}
			endMessage={"End!"}
			loader={<h4>Loading...</h4>}
		>
			<Container>
				{data !== undefined
					? data.map(pokemon => (
							<LazyLoad key={pokemon.name}>
								<Card
									key={pokemon.name}
									pokemonName={pokemon.name}
									pokemonIndex={
										pokemon.url.split("/")[
											pokemon.url.split("/").length - 2
										]
									}
								/>
							</LazyLoad>
					  ))
					: ""}
			</Container>
		</InfiniteScroll>
	);
};

export default Infinite;
