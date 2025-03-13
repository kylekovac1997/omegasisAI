import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CSSProperties } from 'react';

const glow = keyframes`
    0% {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
    50% {
        box-shadow: 0 0 20px rgba(255, 255, 255, 1);
    }
    100% {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
`;

const scrollToView = keyframes`
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    50% {
        opacity: 0.5;
        transform: translateY(5px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Section_Style = styled.section`
    border: 2px solid #fff;
    animation: ${glow} 2s infinite ease-in-out, ${scrollToView} 1s ease-out;
    padding: 20px;
    margin: 20px 0;
    background-color: #1d294074;
    color: white;
    border-radius: 10px;
`;
interface SectionProps {
    id: string;
    children: React.ReactNode;
    color?: string;
    style?: CSSProperties;
}



const Section: React.FC<SectionProps> = ({ id, children, color = 'white', style }) => {
    return (
        <Section_Style id={id} style={{ ...style, color, boxShadow: `0 0 10px ${color}` }}>
            {children}
        </Section_Style>
    );
};




export default Section;