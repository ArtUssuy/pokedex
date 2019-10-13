import React, { useState, useEffect } from "react";
import axios from "axios";
// import InfiniteScroll from "react-infinite-scroll-component";
import ReactPaginate from "react-paginate";

import { Container } from "./styles";
import Card from "./../cards/cards";

const Board = () => {
	const [data, setData] = useState([]);
	const [limit, setLimit] = useState(100);
	const [set, setSet] = useState(0);

	useEffect(() => {
		console.log("TCL: Board -> useEffect");
		fetchData();
	}, []);

	const fetchData = async () => {
		const url = `https://pokeapi.co/api/v2/pokemon?offset=${set}&limit=${limit}`;
		const response = await axios(url);
		setData(response.data.results);
	};

	const fetchMoreData = () => {
		// eslint-disable-next-line no-const-assign
		setLimit((limit += 100));
	};

	const handlePageClick = e => {
		setSet(`${e.selected}00`);
		console.log("TCL: Board -> set", set);
		setLimit(`${e.selected + 1}00`);
		console.log("TCL: Board -> limit", limit);
		fetchData();
	};

	return (
		<>
			<Container>
				{data !== undefined
					? data.map(pokemon => (
							<Card
								key={pokemon.name}
								pokemonName={pokemon.name}
								pokemonIndex={
									pokemon.url.split("/")[
										pokemon.url.split("/").length - 2
									]
								}
							/>
					  ))
					: ""}
			</Container>

			<ReactPaginate
				previousLabel={"previous"}
				nextLabel={"next"}
				breakLabel={"..."}
				breakClassName={"break-me"}
				pageCount={11}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={handlePageClick}
				containerClassName={"pagination"}
				subContainerClassName={"pages pagination"}
				activeClassName={"active"}
			/>
		</>

		// <InfiniteScroll
		//   dataLength={data.length}
		//   next={fetchMoreData}
		//   hasMore={limit < 1090 ? true : false}
		//   endMessage={"End!"}
		//   loader={<h4>Loading...</h4>}
		// >
		//     <Container>
		//     {
		//         data !== undefined ? data.map((pokemon) =>
		//             <Card
		//                 key={pokemon.name}
		//                 pokemonName={pokemon.name}
		//                 pokemonIndex={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
		//             />) : ""
		//     }
		//     </Container>

		// </InfiniteScroll>
	);
};

export default Board;
