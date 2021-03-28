import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #ffffff;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1150px;
  max-height: 100vh;
  padding: 0 96px 0 96px;
  overflow-y: auto;

  input[type='checkbox'] {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    margin-right: 10px;
    padding: 10px;
    cursor: pointer;
  }

  label {
    color: #7a7f8c;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
    display: block;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 24px 0 12px 0;
`;
