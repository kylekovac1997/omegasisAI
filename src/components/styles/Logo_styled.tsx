import styled from 'styled-components';

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px; /* Adjust as needed */
    height: 160px; /* Keep it slightly larger than the image */
    
    border-radius: 50%;

    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    position: relative;
`;

export const CenteredImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;

    position: absolute;
    top: -10px; /* Moves the image up without affecting the border */
`;
