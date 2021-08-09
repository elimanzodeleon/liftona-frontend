import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import WorkoutList from '../../components/WorkoutList';
import UserList from '../../components/UserList';
import * as s from './styles';
import { dummyWorkouts, users } from '../../testData';

const Search = () => {
  const { search } = useLocation();
  const { q: searchTerm } = queryString.parse(search);
  // here we will useLayoutEffect to grab data from api using query parameter
  // if query parameter is empty we will return oldest users and newest workouts
  return (
    <s.SearchWrapper key={nanoid()}>
      <s.SearchHeaderWrapper>
        <s.SearchHeader>
          <s.SearchTitle>Search results for</s.SearchTitle>
          <s.SearchTerm>{searchTerm}</s.SearchTerm>
        </s.SearchHeader>
      </s.SearchHeaderWrapper>
      <s.Hr />
      <s.ResultsWrapper>
        <s.DataWrapper>
          <s.ResultTitle>Users</s.ResultTitle>
          <UserList users={users} />
        </s.DataWrapper>
        <s.DataWrapper>
          <s.ResultTitle>Workouts</s.ResultTitle>
          <WorkoutList workouts={dummyWorkouts} />
        </s.DataWrapper>
      </s.ResultsWrapper>
    </s.SearchWrapper>
  );
};

export default Search;
