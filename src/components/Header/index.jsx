import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/larads.png" alt=""/>
                <div>
                    <span>Bem-vindo</span>
                    <stong>Mariana da Silva</stong>
                </div>
            </Profile>
        </Container>
    );
}