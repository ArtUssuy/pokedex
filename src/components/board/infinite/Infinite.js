import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoad from "react-lazyload";
import { Container } from "./../styles";
import Card from "./../../cards/cards";

const Infinite = () => {
	const [data, setData] = useState([]);
	const [infiniteScroll, setInfiniteScroll] = useState(100);

	useEffect(() => {
		console.log("TCL: Infinite -> useEffect");
		fetchData();
	}, []);

	const fetchData = async (set = 0, infiniteScroll = 100) => {
		console.log("TCL: fetchData -> set - ", set);
		console.log("TCL: fetchData -> infiniteScroll - ", infiniteScroll);
		const url = `https://pokeapi.co/api/v2/pokemon?offset=${set}&limit=${infiniteScroll}`;
		const response = await axios(url);
		setData(response.data.results);
	};

	const fetchMoreData = () => {
		let value = infiniteScroll;
		setInfiniteScroll(value + 100);
		// eslint-disable-next-line no-const-assign
		fetchData(0, (value += 100));
	};

	return (
		<InfiniteScroll
			dataLength={data.length}
			next={fetchMoreData}
			hasMore={infiniteScroll < 1058 ? true : false}
			endMessage={"End!"}
			loader={<h4>Loading...</h4>}
		>
			<Container>
				{data !== undefined
					? data.map(pokemon => (
							<LazyLoad>
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
