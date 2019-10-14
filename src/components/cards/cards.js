import React from "react";
import { Container, Image, Label, ImageWrapper, Footer } from "./styles";

const Card = ({ pokemonName, pokemonIndex }) => {
	const imageUnknown =
		"https://static.quizur.com/i/b/57c1c26fc0b812.5998420157c1c26fb156c9.51498011.png";
	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

	return (
		<Container>
			<ImageWrapper>
				<Image src={imageUrl === undefined ? imageUnknown : imageUrl} />
			</ImageWrapper>
			<Footer>
				<Label>
					Nº
					{pokemonIndex.length === 1
						? " 00"
						: pokemonIndex.length === 2
						? " 0"
						: " "}
					{pokemonIndex}
				</Label>
				<Label>{pokemonName !== undefined ? pokemonName : "???"}</Label>
			</Footer>
		</Container>
	);
};

export default Card;
