import React, { useState, useEffect, useCallback } from 'react';
import { FiEdit } from 'react-icons/fi';
import axios from 'axios';
import { Container, Content } from './styles';

// type InputProps = InputHTMLAttributes<HTMLInputElement>;

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
  useEffect(() => {
    axios.get('http://localhost:3333/drivers').then(response => {
      setDrivers(response.data);
    });
  }, []);

  return (
    <Container>
      <Content>
        {drivers.map(driver => (
          <div key={driver.id}>
            <FiEdit size={24} />

            <p>Motorista</p>
            <h3>{driver.name}</h3>
            <p>
              CNH:
              {driver.doc_type}
            </p>
            <p>
              Contato:
              {driver.phone}
            </p>
          </div>
        ))}
      </Content>
    </Container>
  );
};
export default Register;
