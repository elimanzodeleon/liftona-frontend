import styled from 'styled-components';

export const SearchWrapper = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const SearchHeaderWrapper = styled.div`
  display: flex;
  background-color: #242526;
`;

export const SearchHeader = styled.header`
  display: flex;
  margin: 68px auto 0 auto;
  max-width: 700px;
  margin-bottom: 1em;
  padding: 0 0.5em;

  @media screen and (min-width: 700px) {
    width: 700px;
    padding: 0;
  }
`;

export const SearchTitle = styled.p`
  color: #e4e6eb;
  font-weight: 500;
  font-size: 1.5em;
`;

export const SearchTerm = styled.p`
  color: #e4e6eb;
  font-size: 1.5em;
  margin-left: 0.5em;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid #3a3b3c;
`;

export const ResultsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
`;

export const DataWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`;

export const ResultTitle = styled.p`
  color: #bb86fc;
  padding: 0 0.5em;
  font-size: 2em;

  @media screen and (min-width: 700px) {
    padding: 0;
  }
`;
