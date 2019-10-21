import React, { useState } from "react";

import { Label, FilterWrapper, Button } from "./styles";

import Paginate from "./../paginate/paginate";
import Infinite from "./../infinite/Infinite";

const Board = () => {
	const totalPokemons = 807;

	const [numberOfCards, setNumberOfCards] = useState(10);
	const [layout, setLayout] = useState("infinite");
	const [range, setRange] = useState({
		initial: undefined,
		final: undefined
	});

	const [filterOptions, setFilterOptions] = useState({
		layout: "infinite",
		initial: undefined,
		final: undefined,
		numberOfCards: 10
	});

	const handleSelect = e => {
		console.log("filterOptions :", filterOptions);
		setNumberOfCards(e.target.value);
		console.log("e.target.value :", e.target.value);
		console.log("numberOfCards :", numberOfCards);
	};

	const handleInput = e => {
		e.target.name === "initial"
			? setRange({ initial: e.target.value })
			: setRange({ final: e.target.value });
	};

	const handleLayout = e => setLayout(e.target.value);

	const handleSubmit = e => {
		e.preventDefault();
		setFilterOptions({
			layout: layout,
			initial: range.initial,
			final: range.final,
			numberOfCards: numberOfCards
		});
	};

	return (
		<>
			<FilterWrapper onSubmit={handleSubmit}>
				<select onChange={handleLayout}>
					<option value="infinite">Infinite Scroll</option>
					<option value="paginate">Paginate</option>
				</select>
				<Label>
					Numero Inicial{" "}
					<input name="initial" onChange={handleInput} type="text" />
				</Label>
				<Label>
					Numero Final{" "}
					<input name="final" onChange={handleInput} type="text" />
				</Label>
				<Label>
					Per page
					<select onChange={handleSelect}>
						<option value={10}>10</option>
						<option value={20}>20</option>
						<option value={30}>30</option>
					</select>
				</Label>
				<Button type="submit">Apply!</Button>
			</FilterWrapper>

			{filterOptions.layout === "infinite" ? (
				<Infinite
					filterOptions={filterOptions}
					totalPokemons={totalPokemons}
				/>
			) : (
				<Paginate
					filterOptions={filterOptions}
					totalPokemons={totalPokemons}
				/>
			)}
		</>
	);
};

export default Board;
