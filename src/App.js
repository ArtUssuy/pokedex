import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/header/header";
import Board from "./components/board/board";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Board />
		</>
	);
};

export default App;
