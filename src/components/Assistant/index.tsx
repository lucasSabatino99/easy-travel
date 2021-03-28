import { FC } from 'react';
import { ButtonPrimary } from '../ButtonPrimary';

import { Container } from './styles';

const Assistant: FC = () => {
  return (
    <Container>
      <p>Olá, me chamo Henrique, sou o assistente virtual da Easy Travel.</p>
      <p>
        Que bom que você se interessou pela <span>França</span> e para te ajudar
        no seu planejamento irei chamar um amigo meu de lá!
      </p>
      <ButtonPrimary>Continuar</ButtonPrimary>
    </Container>
  );
};

export { Assistant };
