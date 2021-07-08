import React from 'react';
import * as s from './styles';
import ExerciseList from '../ExerciseList';

const WorkoutList = ({ workouts }: { workouts: any }) => {
  return (
    <>
      {workouts.map((workout: any) => {
        const { id, user, title, description, exercises, createdAt } = workout;
        return (
          <s.Wrapper key={id}>
            <s.HeaderWrapper>
              <s.HeaderAvatar />
              <s.HeaderInfo>
                <s.HeaderUsername to={`/${user}`}>{user}</s.HeaderUsername>
                <s.HeaderDate>{createdAt}</s.HeaderDate>
              </s.HeaderInfo>
            </s.HeaderWrapper>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
            <s.Hr />
            <ExerciseList exercises={exercises} />
            <s.ExerciseFooter>
              <s.NotLikedIcon />
              {user === 'noah' ? <s.DeleteWorkoutIcon /> : <></>}
            </s.ExerciseFooter>
          </s.Wrapper>
        );
      })}
    </>
  );
};

export default WorkoutList;
