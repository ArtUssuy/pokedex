import React from "react";

import { Label, FilterWrapper } from "./styles";

import Paginate from "./paginate/paginate";
import Infinite from "./infinite/Infinite";

import "./paginate/stylePaginate.css";

const Board = () => {
	return (
		<>
			<FilterWrapper>
				<Label>
					Infinite Scroll <input type="checkbox" />
				</Label>
				<Label>
					Paginate <input type="checkbox" />
				</Label>
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
				<button>Apply!</button>
			</FilterWrapper>
			<Paginate />
			<Infinite />
		</>
	);
};

export default Board;
