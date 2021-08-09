import { IProfile } from '../interfaces/profile.interface';

// TODO change arg types
const profileReducer = (state: IProfile, action: any) => {
  const {
    uid,
    username,
    name,
    workouts,
    likes,
    followers,
    following,
  } = action.payload;
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        uid,
        username,
        name,
        workouts,
        likes,
        followers,
        following,
        firstVisit: false,
      };
      break;
    case 'case2':
      // TODO implement
      return { ...state };
      break;
    case 'case3':
      // Todo implement
      return { ...state };
      break;
    // ... more case
    default:
      throw new Error('this action type is not supported');
  }
};

export default profileReducer;
