export interface ILoginForm {
  username: string;
  password: string;
}

export interface ISignUpForm {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IForgotPasswordForm {
  email: string;
}

export interface IResetPasswordForm {
  password: string;
}

export interface IWorkout {
  title: string;
  details?: string;
  exercises: IExercise[];
}

export interface ISearchInput {
  searchTerm: string;
}

export interface IExercise {
  id: string;
  name: string;
  sets: string | number;
  reps: string | number;
  unilateral: boolean;
}
