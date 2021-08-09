import styled from 'styled-components';

export const Input = styled.input<{ error: string }>`
  border: ${props => (props.error ? '1px solid #b00020' : '1px solid #3a3b3c')};
  color: #e4e6eb;
  background-color: #3a3b3c;
  padding: 0.5em 0.75em;
  border-radius: 7px;
  font-size: 1.2em;
  &:focus {
    outline: none;
    border-radius: 5px;
  }
`;
