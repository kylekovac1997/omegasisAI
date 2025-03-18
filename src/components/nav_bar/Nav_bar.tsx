import React from "react";
import { Header_Styled } from "../styles/Header_Styled";
import styled from 'styled-components';

const StaticNavBar = styled.div`
	display: flex;
	@media (max-width: 768px) {
		display: none;
	}
`;

export { StaticNavBar };
const MobileNavBar = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(10px);
		z-index: 10;
	}
`;

const MobileNavItem = styled.a`
	padding: 1rem;
	color: white;
	text-decoration: none;
	text-align: center;
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

const MobileNavToggle = styled.button`
	display: none;
	@media (max-width: 768px) {
		display: block;
		position: fixed;
		top: 1rem;
		right: 50px;
		background: none;
		border: none;
		color: white;
		font-size: 1.5rem;
		z-index: 20;
	}
`;

const NavBar = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Header_Styled.Header className="bg-black bg-opacity-50 backdrop-blur-md p-4 fixed w-full top-0 z-10">
				<Header_Styled.Logo href="/">OMEGASIS AI</Header_Styled.Logo>
				<Header_Styled.NavBar className="hidden md:flex">
					<Header_Styled.NavItem href="/">Services</Header_Styled.NavItem>
					<Header_Styled.NavItem href="#home">About Us</Header_Styled.NavItem>
					<Header_Styled.NavItem href="#home">Contact</Header_Styled.NavItem>
				</Header_Styled.NavBar>
				<MobileNavToggle onClick={toggleNav}>
					☰
				</MobileNavToggle>
			</Header_Styled.Header>
			{isOpen && (
				<MobileNavBar>
					<MobileNavItem href="/">Services</MobileNavItem>
					<MobileNavItem href="#home">About Us</MobileNavItem>
					<MobileNavItem href="#home">Contact</MobileNavItem>
				</MobileNavBar>
			)}
		</>
	);
};

export default NavBar;