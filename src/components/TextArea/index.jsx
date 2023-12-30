import { Container } from './styles'

export function Textarea({ value, ...res}) {
    return (
        <Container {...res}>
            {value}
        </Container>
    )
}