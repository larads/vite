import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({themer}) => themer.colors.background_200};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span {
            font-size: 14px;
            color: ${({themer}) => themer.colors.gray_100};
        }

        strong {
            font-size: 10px;
            color: ${({theme}) => theme.colors.white};
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({theme}) => theme.colors.gray_100};
        font-size: 36px;
    }
`;