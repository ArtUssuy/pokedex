import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "./../cards/cards";
import { getPokemons } from "./../../services/api";
import { Container } from "./styles";

const Infinite = () => {
	const [pokemons, setPokemons] = useState([]);
	const [pokemonsPerPage, setPokemonsPerPage] = useState(20);

	useEffect(() => {
		getMons(0, pokemonsPerPage);
	}, [pokemonsPerPage]);

	const getIndex = url => {
		return url.split("/")[url.split("/").length - 2];
	};

	const getMons = async (offset, limit) => {
		let response = await getPokemons(offset, limit);
		setPokemons(response.data.results);
	};

	const getMoreMons = () => {
		let newPokemonsPerPage = pokemonsPerPage;
		setPokemonsPerPage(newPokemonsPerPage + pokemonsPerPage);
	};

	return (
		<InfiniteScroll
			dataLength={pokemons.length}
			next={getMoreMons}
			hasMore={pokemonsPerPage < 1090 ? true : false}
			endMessage={"End!"}
			loader={<h4>Loading...</h4>}
		>
			<Container>
				{pokemons.map(pokemon => (
					<Card
						name={pokemon.name}
						index={getIndex(pokemon.url)}
						key={getIndex(pokemon.url)}
					/>
				))}
			</Container>
		</InfiniteScroll>
	);
};

export default Infinite;
