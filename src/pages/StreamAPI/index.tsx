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

        canvasRef.current.height = videoRef.current.videoHeight;
        canvasRef.current.width = videoRef.current.videoWidth;

        context?.drawImage(
          videoRef.current,
          0,
          0,
          videoRef.current.videoWidth,
          videoRef.current.videoHeight,
        );
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
          <video id="video-source" autoPlay ref={videoRef} />
        </div>

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
        <canvas ref={canvasRef}>
          Seu dispositivo n??o tem suporte ao recurso de canvas do HTML5
        </canvas>
      </Content>
    </Container>
  );
};

export default StreamAPI;
