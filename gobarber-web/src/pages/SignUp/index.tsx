import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <input placeholder="Nome" />
        <input placeholder="Email" />
        <input placeholder="Senha" type="password" />

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="create_account">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignUp;
