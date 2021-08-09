import React from 'react';
import * as s from './styles';

const ExerciseList = ({ exercises }: { exercises: any }) => {
  return (
    <>
      {exercises.map((exercise: any, idx: number) => {
        const { name, sets, reps, unilateral } = exercise;
        return (
          <s.ExerciseWrapper key={idx}>
            <s.NameWrapper>
              <s.WorkoutInfoLabel>{idx + 1}</s.WorkoutInfoLabel>
              <p>{name}</p>
            </s.NameWrapper>
            <s.DetailsWrapper>
              <s.SetsWrapper>
                <s.WorkoutInfoLabel>sets</s.WorkoutInfoLabel>
                <p>{sets}</p>
              </s.SetsWrapper>
              <s.RepsWrapper>
                <s.WorkoutInfoLabel>reps </s.WorkoutInfoLabel>
                <p>{reps}</p>{' '}
                <s.Unilateral>
                  {unilateral ? 'each' : <>&nbsp;&nbsp;</>}
                </s.Unilateral>
              </s.RepsWrapper>
            </s.DetailsWrapper>
          </s.ExerciseWrapper>
        );
      })}
    </>
  );
};

export default ExerciseList;
