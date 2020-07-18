import React from 'react';

import { Container, Content } from './styles';

const Register: React.FC = () => {
  return(
    <Container>
      <Content>
      <form >
      <h1>Faça seu cadastro</h1>

      <input placeholder="Digite seu nome"/>
      <input placeholder="Telefone"/>
      <input placeholder="Data de nascimento"/>
      <input placeholder="CNH"/>
      <input placeholder="Tipo de CNH"/>
      <input placeholder="CPF"/>

      <div>
        <select >
          <option >UF</option>
        </select>
        <select >
          <option >Cidade</option>
        </select>
      </div>

      <button type="submit" >Cadastrar</button>


      </form>


      </Content>
    </Container>
  );
};
export default Register;
