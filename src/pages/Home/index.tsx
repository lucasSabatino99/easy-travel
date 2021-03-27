import { FC, useCallback } from 'react';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { ButtonSecundary } from '../../components/ButtonSecundary';
import { useToast } from '../../hooks/toast';
import { Container } from './styles';

const Home: FC = () => {
  const { addToast } = useToast();
  const handleAddToast = useCallback(() => {
    setTimeout(() => {
      addToast({
        title: 'Information',
        type: 'info',
        description: 'infoo1..',
      });
    }, 1000);
    addToast({
      title: 'Information',
      type: 'info',
      description: 'infoo..',
    });
  }, [addToast]);
  return (
    <>
      <Container>
        <div className="content">
          <div className="wrapper-left">
            <div className="title">
              <h1>França</h1>
              <span className="subline" />
            </div>

            <div className="subtitle">
              <h2>
                Conheça sobre um dos locais mais procurado do mundo, deixe que
                nosso assistente virtual te ajude nessa jornada!
              </h2>
            </div>

            <ButtonPrimary onClick={handleAddToast} type="button">
              Assista agora
            </ButtonPrimary>
          </div>

          <div className="wrapper-rigth">
            <ButtonPrimary onClick={handleAddToast} type="button">
              Planejar minha viagem
            </ButtonPrimary>
          </div>
        </div>
      </Container>
    </>
  );
};

export { Home };
