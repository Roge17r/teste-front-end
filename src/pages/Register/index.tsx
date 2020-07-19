import React from 'react';
import { FiUser, FiPhone, FiCalendar, FiClipboard, FiFileText } from 'react-icons/fi'
import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Register: React.FC = () => {
  return(
    <Container>
      <Content>
      <form >
      <h1>Faça seu cadastro</h1>

      <Input name="name" icon={FiUser} placeholder="Digite seu nome"/>
      <Input name="phone" icon={FiPhone} placeholder="Telefone"/>
      <Input name="birth" icon={FiCalendar} placeholder="Data de nascimento"/>
      <Input name="doc" icon={FiClipboard} placeholder="CNH"/>
      <Input name="doc_type" icon={FiClipboard} placeholder="Tipo de CNH"/>
      <Input name="CPF" icon={FiFileText} placeholder="CPF"/>

      <div>
        <select >
          <option >UF</option>
        </select>
        <select >
          <option >Cidade</option>
        </select>
      </div>

      <Button type="submit" >Cadastrar</Button>


      </form>


      </Content>
    </Container>
  );
};
export default Register;
