import styled from 'styled-components';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import OmegasisLogo from '../../assets/omegasislogo.png';

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px; /* Adjust as needed */
    max-height: 360px; /* Keep it slightly larger than the image */
    
    border-radius: 50%;

    box-shadow: 0 0 20px #78afeb;
    position: relative;
    top: 200px; /* Moves the image down without affecting the border */
    left: 50%;
    transform: translate(-50%, -50%);

    animation: pulse 5s infinite;

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
    max-width: 430px;
    max-height: 350px;
    
    position: relative;
    top: -40px; /* Moves the image up without affecting the border */
`;

export const Logo = () => {
    // useEffect(() => {
    //     gsap.fromTo('.logo', { opacity: 0 }, { opacity: 1, duration: 4 });
    //     gsap.to('.Logo_Image', { rotationY: 360, duration: 30, repeat: -1, ease: 'linear' });
    // }, []);
useEffect(() => {
    gsap.fromTo('.logo', { opacity: 0 }, { opacity: 1, duration: 15 });
    gsap.to('.Logo_Image', { rotationY: 1800, duration: 2, ease: 'linear', onComplete: () => {
        gsap.to('.Logo_Image', { rotationY: 360, duration: 200, repeat: -1, ease: 'linear' });
    }});
}, []);
    return (
        <ImageWrapper className="logo">
            <CenteredImage className="Logo_Image" src={OmegasisLogo} alt="Logo" />
        </ImageWrapper>
    );
};

// export const CenteredImage = styled.img`
//     max-width: 430px;
//     max-height: 350px;
    
   

//     position: relative;
//     top: -40px; /* Moves the image up without affecting the border */
// `;
