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
      // if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current?.getContext('2d');
      const videoSource = document.getElementById(
        'video-source',
      ) as HTMLVideoElement;

      context?.drawImage(videoSource, 0, 0, 1024, 1024);
      // }
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
            autoPlay
            width="100"
            height="100"
            ref={videoRef}
          />
        </div>

        <canvas width="1024" height="1024" ref={canvasRef} hidden>
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
