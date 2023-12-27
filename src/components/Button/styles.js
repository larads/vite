import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    background-color: ${({themer}) => themer.colors.purple};
    color: ${({themer}) => themer.colors.background_200};

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 0 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
    
`;