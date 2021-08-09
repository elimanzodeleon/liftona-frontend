import styled from 'styled-components';

export const SearchInput = styled.input`
  color: #e4e6eb;
  background-color: #3a3b3c;
  padding: 0.5em 0.75em;
  border: none;
  border-radius: 7px;
  font-size: 1em;
  width: 150px;
  margin-right: 1em;
  &:focus {
    outline: none;
  }

  @media screen and (min-width: 500px) {
    width: 250px;
  }
`;
