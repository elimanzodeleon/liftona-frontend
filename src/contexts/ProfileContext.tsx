import { useReducer, createContext, ReactNode, Dispatch } from 'react';
import profileReducer from '../reducers/profileReducer';
import { IProfile } from '../interfaces/profile.interface';

interface Props {
  children: ReactNode;
}

type Action =
  | { type: 'SET_USER' }
  | { type: 'SET_POSTS' }
  | { type: 'SET_LIKES' }
  | { type: 'SET_FOLLOWING' }
  | { type: 'SET_FOLLOWERS' }
  | { type: 'SET_USER' }; // TODO MORE TYPES

interface IProfileContext {
  state: IProfile;
  dispatch: Dispatch<any>;
}

export const ProfileContext = createContext<IProfileContext>(
  {} as IProfileContext
);

const initialState: IProfile = {
  uid: '',
  username: '',
  name: '',
  following: undefined,
  followers: undefined,
  firstVisit: true,
};

const ProfileProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;

// export default {};
