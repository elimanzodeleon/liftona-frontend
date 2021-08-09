import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as s from './styles';
import { useAuth } from '../../hooks/useAuth';
import { dummyWorkouts } from '../../testData';
import WorkoutList from '../../components/WorkoutList';

const Home = () => {
  // TODO on initial home page load, we display liftona logo
  // in the center of the screen while loading (NO NAVBAR)
  // TODO move navbar to only wrap components in App.tsx that should be viewable

  const [workouts, setWorkouts] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `${process.env.REACT_APP_SERVER_BASE_URL}/home-feed`;
        const { data } = await axios.get(url, {
          withCredentials: true,
          headers: { Authorization: `Bearer ${currentUser}` },
        });
        console.log(data);
        setWorkouts(data.workouts);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    // todo insted of returning null, return  some loading indicator
    return null;
  }

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
