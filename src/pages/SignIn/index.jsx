import { Container, Form, Background } from './styled';
import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Vite Notes</h1>
                <p>Aplicação para Salvar e Gerenciar seus Links úteis.</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="entrar" />

                <Link to="/register">
                    Criar Conta
                </Link>
            </Form>
            <Background />
        </Container>
    )
}