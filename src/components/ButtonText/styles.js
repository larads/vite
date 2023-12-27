import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    color: ${({theme }) => ThemeContext.colors.purple};

    border: none;
    font-size: 16px;
`;