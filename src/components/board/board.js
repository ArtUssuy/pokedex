import React, { useState } from "react";

import { Label, FilterWrapper, Button } from "./styles";

import Paginate from "./../paginate/paginate";
import Infinite from "./../infinite/Infinite";

const Board = () => {
	const [layout, setLayout] = useState(true);
	const [cardsPerPage, setCardsPerPage] = useState(10);
	const totalPokemons = 1090;

	const handleSelect = e => {
		setCardsPerPage(e.target.value);
	};

	return (
		<>
			<FilterWrapper>
				<select onChange={e => setLayout(!layout)}>
					<option>Infinite Scroll</option>
					<option>Paginate</option>
				</select>
				<Label>
					Numero Inicial <input type="text" />
				</Label>
				<Label>
					Numero Final <input type="text" />
				</Label>
				<Label>
					Per page
					<select onChange={handleSelect}>
						<option>10</option>
						<option>20</option>
						<option>30</option>
					</select>
				</Label>
				<Button>Apply!</Button>
			</FilterWrapper>

			{layout === false ? (
				<Infinite
					cardsPerPage={cardsPerPage}
					totalPokemons={totalPokemons}
				/>
			) : (
				<Paginate
					cardsPerPage={cardsPerPage}
					totalPokemons={totalPokemons}
				/>
			)}
		</>
	);
};

export default Board;
