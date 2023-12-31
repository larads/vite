import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout} from "./styles";

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/larads.png" alt=""/>
                <div>
                    <span>Bem-vindo</span>
                    <stong>Mariana da Silva</stong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}