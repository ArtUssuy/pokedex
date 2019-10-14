import React from "react";

import { Container, Label } from "./style";

const Filter = () => {
	return (
		<Container>
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
		</Container>
	);
};

export default Filter;
