import styled from 'styled-components';
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet"></link>

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
   
`;

const Logo = styled.h1`
    float: left;
    height: 50px;
    font-size: 29px;
    font-family: 'Orbitron', sans-serif;
    color: #00AEEF; /* Strong solid blue */
  


`;

const NavBar = styled.nav`
    display: flex;
    gap: 20px;
`;

const NavItem = styled.a`
    text-decoration: none;
    color: #333;
    font-weight: bold;
    &:hover {
        color: #007bff;
    }
`;

export const Header_Styled = {
    Header,
    Logo,
    NavBar,
    NavItem
};