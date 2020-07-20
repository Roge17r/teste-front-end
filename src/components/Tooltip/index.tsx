import React from 'react';
import { Container } from './styles';

interface TooptiProps {
  title: string;
  className?: string;
}

const Tooptip: React.FC<TooptiProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};
export default Tooptip;
