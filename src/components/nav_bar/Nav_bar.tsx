import { Header_Styled } from "../styles/Header_Styled";

const NavBar = () => {
  return (    
	<Header_Styled.Header className="bg-black bg-opacity-50 backdrop-blur-md p-4 fixed w-full top-0 z-10">
		 
	<Header_Styled.Logo href="/">OMEGASIS AI</Header_Styled.Logo>
	<Header_Styled.NavBar>
	 <Header_Styled.NavItem href="/">Services</Header_Styled.NavItem>
	 <Header_Styled.NavItem href="#home">About Us</Header_Styled.NavItem>
	 <Header_Styled.NavItem href="#home">Contact</Header_Styled.NavItem>
	</Header_Styled.NavBar>
	</Header_Styled.Header>
  );
};

export default NavBar;
