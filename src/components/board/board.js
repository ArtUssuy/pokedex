import React, { useState } from "react";

import { Label, FilterWrapper, Button } from "./styles";

import Paginate from "./../paginate/paginate";
import Infinite from "./../infinite/Infinite";

const Board = () => {
	const [layout, setLayout] = useState(true);
	const [cardsPerPage, setCardsPerPage] = useState("10");
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
					<select>
						<option>10</option>
						<option>20</option>
						<option>30</option>
					</select>
				</Label>
				<Button>Apply!</Button>
			</FilterWrapper>

			{layout === true ? (
				<Infinite cardsPerPage={cardsPerPage} />
			) : (
				<Paginate cardsPerPage={cardsPerPage} />
			)}
		</>
	);
};

export default Board;
