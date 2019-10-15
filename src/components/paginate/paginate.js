import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import LazyLoad from "react-lazyload";

import "./styles.css";

import { Container } from "./styles";
import Card from "./../cards/cards";

const Paginate = cardsPerPage => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async (set = 0, limit = 100) => {
		const url = `https://pokeapi.co/api/v2/pokemon?offset=${set}&limit=${limit}`;
		const response = await axios(url);
		setData(response.data.results);
	};

	const handlePageClick = e => {
		setData([]);
		let setValue = `${e.selected.toString().concat("00")}`;
		fetchData(setValue);
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
				pageCount={9}
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
