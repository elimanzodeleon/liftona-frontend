import { useHistory } from 'react-router-dom';
import * as s from './styles';
import { workouts } from '../../testData';
import WorkoutList from '../../components/WorkoutList';

const Home = () => {
  // on initial page load we fetch the post of the users curr user is following.
  // pass it to workoutlist component and render workouts.
  // NOTE: loading state var should default to true
  const history = useHistory();

  return (
    <s.wrapper>
      <s.AddWorkoutWrapper>
        <s.AddWorkout
          onClick={() => {
            history.push('/add');
          }}
        >
          <s.AddWorkoutIcon />
          <s.AddWorkoutDetails>
            <h4>Create Workout</h4>
            <p>Share a new workout with your followers.</p>
          </s.AddWorkoutDetails>
        </s.AddWorkout>
      </s.AddWorkoutWrapper>
      <WorkoutList workouts={workouts} />
    </s.wrapper>
  );
};

// move this to a new component WorkoutList

export default Home;
