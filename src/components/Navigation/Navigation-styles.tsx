import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavListProps {
	open: boolean;
}

export const Nav = styled.nav`
	display: flex;
	position: relative;
	justify-content: space-between;
	align-items: center;
	/* background-color: #333; */
	background-color: #4561bd;
	color: #d6d6d6c5;
	height: 70px;
	font-family: BlenderProBold, sans-serif;
`;

export const NavList = styled.ul<NavListProps>`
	display: flex;
	margin: 0 1rem;
	padding: 0;

	& > li {
		list-style: none;
		&:hover {
			background-color: rgba(0, 0, 0, 0.2);
		}
	}

	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: #333;
		position: fixed;

		margin: 0;
		transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
		top: 70px;
		right: 0;
		height: 100%;
		width: 300px;
		transition: transform 0.3s ease-in-out;
		z-index: 9;
	}
`;

export const CustomLink = styled(Link)`
	display: block;
	text-decoration: none;
	color: white;
	font-size: 1.1rem;
	padding: 0.5rem;
	margin: 1rem;
`;

export const LogoutLink = styled(CustomLink)`
	color: #c00000;
`;

export const StyledMenuIcon = styled.div`
	display: none;
	margin: 1rem;
	@media (max-width: 768px) {
		display: flex;
		z-index: 10;
	}
`;
