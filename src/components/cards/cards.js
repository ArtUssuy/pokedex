import React from "react";
import { Container, Image, Label } from "./styles";

const Card = ({ pokemonName, pokemonIndex }) => {
	const imageUnknown =
		"https://static.quizur.com/i/b/57c1c26fc0b812.5998420157c1c26fb156c9.51498011.png";
	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

	return (
		<Container>
			<span>{pokemonIndex}</span>
			<Image src={imageUrl === undefined ? imageUnknown : imageUrl} />
			<footer>
				<Label>{pokemonName !== undefined ? pokemonName : "???"}</Label>
			</footer>
		</Container>
	);
};

export default Card;
