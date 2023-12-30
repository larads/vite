import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    color: ${({theme, $isactive}) => $isactive ? theme.colors.purple : theme.colors.gray_100};

    border: none;
    font-size: 16px;
`;