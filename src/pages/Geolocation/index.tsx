/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Container, Content } from './styles';

const Geolocation: React.FC = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const geoSuccess = (position: GeolocationPosition) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const geoError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case 0:
        alert('Erro desconhecido');
        break;
      case 1:
        alert('Permissão negada');
        break;
      case 2:
        alert('Erro ao capturar localização');
        break;
      case 3:
        alert('Timeout');
        break;
      default:
        alert('Ocorreu um erro ao capturar a localização');
    }
  };

  const getPosition = () => {
    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 5000,
    };

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
  };

  return (
    <Container>
      <Content>
        <h1>Geolocalização</h1>

        <label htmlFor="uploadVideo">
          Latitude:
          <input type="text" value={latitude} />
        </label>

        <label htmlFor="uploadVideo">
          Longitude:
          <input type="text" value={longitude} />
        </label>

        <input type="Button" value="Capturar" onClick={getPosition} />
      </Content>
    </Container>
  );
};

export default Geolocation;
