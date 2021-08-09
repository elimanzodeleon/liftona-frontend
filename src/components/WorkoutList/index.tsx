import React from 'react';
import * as s from './styles';
import ExerciseList from '../ExerciseList';
import LikeButton from '../LikeButton';
import UnlikeButton from '../UnlikeButton';
import DeleteButton from '../DeleteButton';
import { useAuth } from '../../hooks/useAuth';

const WorkoutList = ({ workouts }: { workouts: any }) => {
  const { getUid } = useAuth();
  if (workouts.length === 0) return <p>no posts</p>;
  return (
    <>
      {workouts.map((workout: any) => {
        const { id, user, title, details, exercises, createdAt } = workout;
        return (
          <s.Wrapper key={id}>
            <s.HeaderWrapper>
              <s.HeaderAvatar />
              <s.HeaderInfo>
                <s.HeaderUsername to={`/${user.username}`}>
                  {user.username}
                </s.HeaderUsername>
                <s.HeaderDate>{createdAt}</s.HeaderDate>
              </s.HeaderInfo>
            </s.HeaderWrapper>
            <h2>{title}</h2>
            {details && <s.Details>{details}</s.Details>}
            <s.Hr />
            <ExerciseList exercises={exercises} />
            <s.ExerciseFooter>
              {/* <LikeButton /> */}
              {/* {user._id === getUid() && <DeleteButton/>} */}
              <s.NotLikedIcon />
              {user._id === getUid() && <s.DeleteWorkoutIcon />}
            </s.ExerciseFooter>
          </s.Wrapper>
        );
      })}
    </>
  );
};

export default WorkoutList;
