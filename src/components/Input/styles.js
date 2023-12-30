import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_100};
    color: ${({ theme }) => theme.colors.gray_200};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color:  ${({ theme }) => theme.colors.white};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.colors.gray_200};
        }
    }

    > svg {
            margin-left: 16px;
        }
`;