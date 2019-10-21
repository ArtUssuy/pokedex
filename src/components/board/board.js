import React, { useState } from "react";

import { Container, ButtonsWrapper } from "./styles";

import Paginate from "./../paginate/paginate";
import Infinite from "./../infinite/Infinite";

const Board = () => {
	const [layout, setLayout] = useState("paginate");

	const handleLayout = e => setLayout(e.target.value);

	return (
		<Container>
			<h1>Modo de Visualização:</h1>

			<ButtonsWrapper>
				<button
					value="infinite"
					onClick={handleLayout}
					className="mode-wrapper"
				>
					Infinite
				</button>
				<button
					value="paginate"
					onClick={handleLayout}
					className="mode-wrapper"
				>
					Paginate
				</button>
			</ButtonsWrapper>

			{layout === "infinite" ? <Infinite /> : <Paginate />}
		</Container>
	);
};

export default Board;

// {
/* <FilterWrapper onSubmit={handleSubmit}>
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
			</FilterWrapper> */
// }
