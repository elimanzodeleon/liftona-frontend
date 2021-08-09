import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  flex-direction: column;
  gap: 1em;
`;

const Button = styled.button`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  font-size: 1.2em;
  border-radius: 7px;
  padding: 0.5em;
  font-weight: bold;
`;

export const LoginButton = styled(Button)`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  color: #bb86fc;
  background-color: transparent;
  border: 1px solid #bb86fc;
  margin-bottom: 1em;
`;

export const Error = styled.p`
  color: #b00020;
  margin-bottom: 0.5em;
  font-weight: 500;
`;
