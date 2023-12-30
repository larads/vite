import { Container } from "./styles";

export function Tag({ title, ...res  }) {
    return (
        <Container { ...res }>
            {title}
        </Container>
    )
}