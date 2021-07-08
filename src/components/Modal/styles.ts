import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
`;

export const ModalWrapper = styled.div`
  position: relative;
  display: grid;
  background-color: #242526;
  width: 500px;
  border-radius: 7px;
  padding: 1.5em;
  box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 2em;
  height: 2em;
`;

export const ModalHeader = styled.div`
  font-size: 2em;
  margin-bottom: 0.5em;
`;

export const ModalForm = styled.form`
  display: grid;
  margin-top: 1em;
  gap: 1em;
`;

export const ModalFormInput = styled.input`
  color: #e4e6eb;
  background-color: #3a3b3c;
  padding: 0.5em 0.75em;
  border: none;
  border-radius: 7px;
  font-size: 1.2em;
  &:focus {
    outline: none;
    border: 1px solid #bb86fc;
    border-radius: 5px;
  }
`;

export const SignUpButton = styled.button`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  font-size: 1.2em;
  border-radius: 7px;
  padding: 0.5em;
  border: none;
  margin: 0.5em 0;
  color: #e4e6eb;
  background-color: #bb86fc;
`;

export const Error = styled.p`
  color: #b00020;
`;
