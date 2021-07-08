import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  min-height: 700px;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin: auto;
  margin-top: 3em;

  @media screen and (min-width: 900px) {
    margin: auto;
    padding-bottom: 5em;
    width: auto;
    flex-direction: row;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;

  @media screen and (min-width: 900px) {
    margin: 3em 5em 0 0;
    align-items: flex-start;
  }

  @media screen and (min-width: 1128px) {
    margin: 3em 7em 0 0;
  }
`;

export const Title = styled.p`
  font-size: 3em;
  color: #bb86fc;

  @media screen and (min-width: 900px) {
    font-size: 2.5em;
  }

  @media screen and (min-width: 1128px) {
    font-size: 3em;
  }
`;

export const Subtitle = styled.div`
  font-size: 2em;

  @media screen and (min-width: 900px) {
    font-size: 1.5em;
  }

  @media screen and (min-width: 1128px) {
    font-size: 2em;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #242526;
  border-radius: 7px;
  padding: 1.5em;
  box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 900px) {
    width: 400px;
  }
`;

export const Form = styled.form`
  display: grid;
  flex-direction: column;
  gap: 1em;
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

export const SignUpButton = styled(Button)`
  color: #e4e6eb;
  background-color: #bb86fc;
  margin: 1em 0 0 0;
  border: none;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid #3a3b3c;
`;

export const Footer = styled.footer`
  color: #3a3b3c;
  margin: 0 auto 3em auto;
`;

export const Error = styled.p`
  color: #b00020;
  margin-bottom: 1em;
`;

export const ForgotPasswordLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #bb86fc;
  text-align: center;
  margin: 0 auto 1em auto;

  &:hover {
    text-decoration: underline;
  }
`;
