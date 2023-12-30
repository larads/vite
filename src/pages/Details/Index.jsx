import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export default function Details() {
  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>
            Introdução ao React
          </h1>

          <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quae iste assumenda sit. Aliquid, voluptate, itaque harum doloribus aliquam perferendis at, rem voluptas expedita reiciendis ex.
            Fugiat eaque unde et tenetur.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>Item 1</li>
              <li>Item 2</li>
            </Links>
          </Section>
          
          <Section title="Marcadores">
            <Tag title="nodejs"/>
          </Section>

          <Button title="voltar" />
        </Content>
      </main>
    </Container>
  )
}