import React from 'react';
import { Link } from 'react-router-dom';
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

        <Link to="geolocation">Geolocalização</Link>
        <Link to="camera">Câmera</Link>
        <Link to="stream-api">Stream API</Link>
      </Content>
    </Container>
  );
};

export default Main;
