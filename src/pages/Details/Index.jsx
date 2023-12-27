import { Container, Links } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export default function Details() {
  return (
    <Container>
      <Header/>

      <ButtonText title="Excluir Nota" />
      <Section title="Links úteis">
        <Links>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </Links>
      </Section>
      
      <Section title="Marcadores">
        <Tag title="nodejs"/>
      </Section>

      <Button title="voltear"/>
    </Container>
  )
}