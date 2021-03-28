/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-alert */
import React, { useRef } from 'react';
import { Container, Content } from './styles';

const StreamAPI: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startStream = () => {
    if (navigator.mediaDevices) {
      const constraints: MediaStreamConstraints = {
        video: true,
      };

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => {
          alert(`Ocorreu o seguinte erro: ${err}`);
        });
    }
  };

  const stopStream = () => {
    if (videoRef.current) {
      (videoRef.current.srcObject as MediaStream)
        .getVideoTracks()
        .forEach(track => track.stop());
    }
  };

  const capture = () => {
    try {
      if (videoRef.current && canvasRef.current) {
        const context = canvasRef.current?.getContext('2d');
        context?.drawImage(videoRef.current, 0, 0, 640, 480);
      }
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Container>
      <Content>
        <h1>Stream API</h1>

        <div>
          <video
            id="video-source"
            height="480"
            width="640"
            autoPlay
            ref={videoRef}
          />
        </div>
        <canvas ref={canvasRef} height="480" width="640">
          Seu dispositivo não tem suporte ao recurso de canvas do HTML5
        </canvas>

        <nav className="controls">
          <button type="button" id="capture" onClick={capture}>
            Capturar
          </button>

          <button type="button" id="stop-stream" onClick={stopStream}>
            Parar Stream
          </button>

          <button type="button" id="start-stream" onClick={startStream}>
            Iniciar Stream
          </button>
        </nav>
      </Content>
    </Container>
  );
};

export default StreamAPI;
