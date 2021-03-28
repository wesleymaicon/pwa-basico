import React, { useRef, useState } from 'react';
import { Camera, CameraType } from 'react-camera-pro';

import {
  Wrapper,
  Control,
  TakePhotoButton,
  ChangeFacingCameraButton,
  ImagePreview,
} from './styles';

const CameraAPI: React.FC = () => {
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState<string | null>(null);
  const camera = useRef<CameraType>(null);

  const errors = {
    noCameraAccessible: 'Não foi possível acessar a câmera do dispositivo',
    permissionDenied: 'Conceda a permissão para utilizar a câmera',
    switchCamera: 'Não foi possível selecionar outra câmera',
    canvas: 'Canvas não suportado',
  };

  return (
    <Wrapper>
      <Camera
        ref={camera}
        aspectRatio="cover"
        numberOfCamerasCallback={setNumberOfCameras}
        errorMessages={errors}
      />
      <Control>
        <ImagePreview image={image} />
        <TakePhotoButton
          onClick={() => {
            if (camera.current) {
              const photo = camera.current.takePhoto();
              console.log(photo);
              setImage(photo);
            }
          }}
        />
        <ChangeFacingCameraButton
          disabled={numberOfCameras <= 1}
          onClick={() => {
            if (camera.current) {
              const result = camera.current.switchCamera();
              console.log(result);
            }
          }}
        />
      </Control>
    </Wrapper>
  );
};

export default CameraAPI;
