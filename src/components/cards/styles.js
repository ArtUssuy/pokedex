import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-color: #fff;
	height: 300px;
	width: 300px;
	padding-bottom: 50px;
	margin-right: 10px;
	margin-top: 50px;
	transition: transform 1s;
	&:hover {
		transform: translateY(-10px);
	}
`;

export const Image = styled.img`
	transform: scale(2.4);
`;

export const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	height: 80px;
	padding-left: 30px;
	padding-top: 10px;
`;

export const ImageWrapper = styled.div`
	background-color: #f2f2f2;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	border-radius: 10px;
`;

export const Label = styled.span`
	display: block;
	text-align: center;
	font-size: 25px;
	font-family: "Flexo-Bold", arial, sans-serif;
	color: #919191;
	&:last-child {
		font-size: 35px;
		text-transform: capitalize;
		font-family: "Flexo-Demi", arial, sans-serif;
		color: #313131;
		margin-top: 15px;
	}
`;
