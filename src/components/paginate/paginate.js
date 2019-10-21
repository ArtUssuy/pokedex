/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { getPokemons } from "./../../services/api";
import Card from "./../cards/cards";
import { Container } from "./styles";
import "./paginate.css";

const Paginate = () => {
	const [pokemons, setPokemons] = useState([]);
	const [range, setRange] = useState({
		offset: 0,
		limit: 20
	});
	const [pagesQtd, setPagesQtd] = useState();

	useEffect(() => {
		getMons(range.offset, range.limit);
	}, [range.offset]);

	useEffect(() => {
		getPagesQtd();
	}, []);

	const getPagesQtd = () => {
		let totalPages = Math.round(964 / range.limit);
		setPagesQtd(totalPages);
	};

	const getMons = async (offset, limit) => {
		let response = await getPokemons(offset, limit);
		setPokemons(response.data.results);
	};

	const getIndex = url => {
		return url.split("/")[url.split("/").length - 2];
	};

	const getMoreMons = e => {
		console.log("range.limit :", range.limit);
		let limit = range.limit; //dont know why, gets undefined after changing pages 2, 3 times
		let newOffset = e.selected * limit;
		setRange({
			offset: newOffset,
			limit: 20
		});
	};

	return (
		<>
			<Container>
				{pokemons.map(pokemon => (
					<Card
						name={pokemon.name}
						index={getIndex(pokemon.url)}
						key={getIndex(pokemon.url)}
					/>
				))}
			</Container>

			{pagesQtd !== false ? (
				<ReactPaginate
					previousLabel={"previous"}
					pageCount={pagesQtd}
					nextLabel={"next"}
					breakLabel={"..."}
					onPageChange={getMoreMons}
					containerClassName={"pagination"}
					pageClassName={"items"}
					subContainerClassName={"pages pagination"}
					activeClassName={"active"}
				/>
			) : (
				<div>Carregando...</div>
			)}
		</>
	);
};

export default Paginate;
