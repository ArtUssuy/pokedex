import React from "react";

import Filter from "./../filter/filter";
import Paginate from "./paginate/paginate";
import Infinite from "./infinite/Infinite";

import "./paginate/stylePaginate.css";

const Board = () => {
	return (
		<>
			<Filter />
			<Paginate />
			<Infinite />
		</>
	);
};

export default Board;
