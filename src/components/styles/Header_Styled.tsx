import styled from 'styled-components';
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet"></link>

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
   border: 1px solid #78afeb;
   max-width: 1280px;
   width: 100%;
`;

const Logo = styled.a`
font-weight: 450;
    float: left;
    height: 50px;
    font-size: 29px;
    font-family: 'Orbitron', sans-serif;
    color: rgb(193, 221, 232); /* Strong solid blue */
    text-shadow: 0 0 5px rgba(163, 196, 208, 0.75), 0 0 10px rgba(0, 174, 239, 0.75), 0 0 15px rgba(0, 174, 239, 0.75);
`;

const NavBar = styled.nav`
    display: flex;
    gap: 20px;
`;

const NavItem = styled.a`
    text-decoration: none;
    color: rgb(193, 221, 232); /* Strong solid blue */
    font-weight: bold;
    border: 2px solid #78afeb;
    border-radius: 50px;
    padding: 5px 10px;
    &:hover {
        color: #78afeb;
        text-shadow: 0 0 2px rgba(163, 196, 208, 0.75), 0 0 1px rgba(0, 174, 239, 0.75), 0 0 15px rgba(0, 174, 239, 0.75);
        
    }
`;

export const Header_Styled = {
    Header,
    Logo,
    NavBar,
    NavItem, 
};