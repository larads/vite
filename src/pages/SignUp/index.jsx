import { Container, Form, Background } from './styled';
import { Input } from '../../components/Input';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';

export function SignUp() {
    return (
        <Container>
            <Background />
            <Form>
                <h1>Vite Notes</h1>
                <p>Aplicação para Salvar e Gerenciar seus Links úteis.</p>

                <h2>Crie sua Conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

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

                <Button title="Cadastrar" />

                <Link to="/" >
                    Voltar para o Login
                </Link>
            </Form>
        </Container>
    )
}