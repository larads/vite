import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew}) => isNew ? "transparent" : theme.colors.background_100};
    color: ${({ theme }) => theme.colors.gray_200};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.colors.gray_200}` : "none"};
    
    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({theme}) => theme.colors.red};
    }

    .button-add {
        color: ${({theme}) => theme.colors.purple};
    }


    > input {
        height: 56px;
        width: 100%;

        padding: 12px;
        color: ${({ theme }) => theme.colors.white};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.colors.gray_200};
        }
    }
`;