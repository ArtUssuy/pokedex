import React, { useState, useEffect } from "react";
import { checkImage } from "./../../services/api";
import { Container, Image, Label, ImageWrapper, Footer } from "./styles";

const Card = ({ name, index }) => {
	const [imageUrl, setImageUrl] = useState();

	useEffect(() => {
		getUrl(index);
	});

	const getUrl = async index => {
		const imageSrc = await checkImage(index);
		setImageUrl(imageSrc);
	};

	const formatIndex = index => {
		if (index.length === 1) {
			return " 00";
		}
		if (index.length === 2) {
			return " 0";
		} else {
			return " ";
		}
	};

	return (
		<Container>
			<ImageWrapper>
				<Image src={imageUrl} />
			</ImageWrapper>
			<Footer>
				<Label>
					Nº
					{`${formatIndex(index)}${index}`}
				</Label>
				<Label>{name}</Label>
			</Footer>
		</Container>
	);
};

export default Card;
