import React from 'react';
import { Container, Content } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Checklist da Publicação do Vídeo</h1>

        <label htmlFor="uploadVideo">
          <input type="checkbox" id="uploadVideo" name="uploadVideo" />
          Enviar vídeo para o YouTube 2aaaaaaaaa
        </label>

        <a href="teste2.html">Teste 2</a>
      </Content>
    </Container>
  );
};

export default Main;
