import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  min-height: 700px;
`;

export const FormWrapper = styled.div`
  display: grid;
  background-color: #242526;
  width: 500px;
  margin: auto;
  border-radius: 7px;
  padding: 1.5em;
  box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: grid;
  flex-direction: column;
  gap: 1em;
`;

export const FormHeader = styled.div`
  font-size: 2em;
  margin-bottom: 8px;
`;

export const Input = styled.input`
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

export const Button = styled.button`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  font-size: 1.2em;
  border-radius: 7px;
  padding: 0.5em;
  border: none;
  margin-bottom: 1em;
  color: #e4e6eb;
  background-color: #bb86fc;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const InfoLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #bb86fc;
  text-align: center;
  margin: 1em auto 0 auto;

  &:hover {
    text-decoration: underline;
  }
`;

export const Error = styled.p`
  color: #b00020;
  margin-bottom: 0.5em;
  font-weight: 500;
`;

export const Footer = styled.footer`
  color: #3a3b3c;
  margin: 0 auto 3em auto;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid #3a3b3c;
`;
