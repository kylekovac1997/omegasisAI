import styled from 'styled-components';

export const MainIntroSection = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 1rem;

    h1 {
        font-size: 3rem;
        font-weight: bold;
    }

    p {
        font-size: 1.125rem;
        margin-top: 1rem;
        max-width: 32rem;
    }

    button {
        margin-top: 1.5rem;
        padding: 0.75rem 1.5rem;
        background-color: #3b82f6;
        border-radius: 9999px;
        transition: background-color 0.3s;

        &:hover {
            background-color: #2563eb;
        }
    }
`;

export const ServicesSection = styled.section`
    padding: 5rem 0;
    background-color: #1f2937;
    text-align: center;

    h2 {
        font-size: 2.25rem;
        font-weight: 600;
    }

    .services-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-top: 2rem;
        padding: 0 1rem;

        @media (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
        }

        .service-card {
            padding: 1.5rem;
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 1rem;

            h3 {
                font-size: 1.5rem;
                font-weight: bold;
            }

            p {
                margin-top: 0.5rem;
            }
        }
    }
`;