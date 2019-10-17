import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import LazyLoad from "react-lazyload";

import "./styles.css";

import { Container } from "./styles";
import Card from "./../cards/cards";

const Paginate = ({ cardsPerPage, totalPokemons }) => {
	const [data, setData] = useState([]);
	const [numberPages, setNumbersPage] = useState(
		totalPokemons / cardsPerPage
	);
	useEffect(() => {
		console.log("TCL: Paginate -> useEffect");
		fetchData();
	}, [cardsPerPage]);

	const fetchData = async (offset = 0, limit = cardsPerPage) => {
		const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
		const response = await axios(url);
		setData(response.data.results);
	};

	const handlePageClick = e => {
		let newOffset = (e.selected * cardsPerPage.toString().replace("0", ""))
			.toString()
			.concat("0");
		fetchData(newOffset);
	};

	return (
		<>
			<Container>
				{data !== undefined
					? data.map(pokemon =>
							pokemon.url.split("/")[
								pokemon.url.split("/").length - 2
							] < 10091 ? (
								<LazyLoad key={pokemon.name}>
									<Card
										key={pokemon.name}
										pokemonName={pokemon.name}
										pokemonIndex={
											pokemon.url.split("/")[
												pokemon.url.split("/").length -
													2
											]
										}
									/>
								</LazyLoad>
							) : (
								""
							)
					  )
					: ""}
			</Container>

			<ReactPaginate
				previousLabel={"previous"}
				pageCount={numberPages}
				nextLabel={"next"}
				breakLabel={"..."}
				onPageChange={handlePageClick}
				containerClassName={"pagination"}
				pageClassName={"items"}
				subContainerClassName={"pages pagination"}
				activeClassName={"active"}
			/>
		</>
	);
};

export default Paginate;
