import styled from 'styled-components';

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px; /* Adjust as needed */
    height: 360px; /* Keep it slightly larger than the image */
    
    border-radius: 50%;

    /* box-shadow: 0 0 20px #78afeb; */
    position: relative;
    top: 200px; /* Moves the image down without affecting the border */
    left: 50%;
    transform: translate(-50%, -50%);

    @media (prefers-reduced-motion: no-preference) {
        animation: pulse 3s infinite;
    }

    @keyframes pulse {
        0% {
            box-shadow: 0 0 20px #78afeb;
        }
        50% {
            box-shadow: 0 0 70px #78afeb;
        }
        100% {
            box-shadow: 0 0 20px #78afeb;
        }
    }
`;

export const CenteredImage = styled.img`
    width: 430px;
    height: 350px;
    
   

    position: relative;
    top: -40px; /* Moves the image up without affecting the border */
`;
