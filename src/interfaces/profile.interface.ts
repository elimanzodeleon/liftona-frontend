import { IWorkout } from './index';
import { IUser } from './user.interface';

export interface IProfile {
  uid: string;
  username: string;
  name: string;
  following: IUser[] | undefined;
  followers: IUser[] | undefined;
  firstVisit: boolean;
  workouts?: IWorkout[];
  likes?: IWorkout[];
  // users?: Partial<IUser>;
}
