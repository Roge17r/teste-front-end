import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  FiUser,
  FiPhone,
  FiCalendar,
  FiClipboard,
  FiFileText,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import axios from 'axios';
import { Container, Content } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface Driver {
  id: string;
  name: string;
  phone: number;
  birth: string;
  doc: number;
  doc_type: string;
  CPF: number;
}

const Register: React.FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        phone: Yup.string().required('O telefone é obrigatório'),
        birth: Yup.string().required('A data de nascimento é obrigatória'),
        doc: Yup.string().required('A CNH é obrigatória'),
        doc_type: Yup.string()
          .required('A Categoria da CNH é obrigatória')
          .max(2),
        CPF: Yup.string().required('O CPF é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      await axios.post('http://localhost:3333/drivers', data);
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Digite seu nome" />
          <Input name="phone" icon={FiPhone} placeholder="Telefone" />
          <Input
            name="birth"
            icon={FiCalendar}
            placeholder="Data de nascimento"
          />
          <Input
            name="doc"
            icon={FiClipboard}
            placeholder="Carteira Nacional de Habilitação (CNH)"
          />
          <Input
            name="doc_type"
            icon={FiClipboard}
            placeholder="Categoria da CNH"
          />
          <Input name="CPF" icon={FiFileText} placeholder="CPF" />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
};
export default Register;
