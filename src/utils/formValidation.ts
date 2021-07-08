import validator from 'validator';

import {
  ILoginForm,
  ISignUpForm,
  IForgotPasswordForm,
  IResetPasswordForm,
  INewWorkoutForm,
  IExercise,
} from '../interfaces';

export const validateLoginForm = (values: ILoginForm) => {
  const { username, password } = values;

  const validUsername = checkValidUsername(username);
  const validPassword = checkValidPassword(password);

  if (!validUsername || !validPassword) {
    return 'The username and password provided did not match our records.';
  }
};

export const validateSignUpForm = (values: ISignUpForm) => {
  const { username, name, email, password, confirmPassword } = values;

  const validUsername = checkValidUsername(username);
  if (!validUsername) {
    return 'Username may only include letters, numbers, and underscores and be no longer than 15 characters.';
  }

  const validName =
    validator.isAlpha(name) && validator.isLength(name, { min: 2, max: 50 });
  if (!validName) {
    return 'Name may only include letters with a min length of 2 and a max length of 50.';
  }

  const validEmail = checkValidEmail(email);
  if (!validEmail) {
    return 'Please enter a valid email address';
  }

  const validPassword = checkValidPassword(password);
  const passwordsMatch = password === confirmPassword;
  if (!validPassword) {
    return 'Password must be at least 8 characters in length and include an uppercase letter, lowercase letter, number, and symbol.';
  } else if (!passwordsMatch) {
    return 'Passwords do not match.';
  }
};

export const validateForgotPasswordForm = (values: IForgotPasswordForm) => {
  const { email } = values;

  const validEmail = checkValidEmail(email);
  if (!validEmail) {
    return 'Please enter a valid email.';
  }
};

export const validateResetPasswordForm = (values: IResetPasswordForm) => {
  const { password } = values;

  const validPassword = checkValidPassword(password);
  if (!validPassword) {
    return 'Password must be at least 8 characters in length and include an uppercase letter, lowercase letter, number, and symbol.';
  }
};

export const validateNewWorkoutForm = (values: INewWorkoutForm) => {
  const { title, exercises } = values;

  const validTitle = validator.isLength(title, { min: 1, max: 50 });

  if (!validTitle) {
    return 'Please enter a valid workout name.';
  }

  // check each exercise is valid
  const validExercises = exercises.every((exercise: IExercise) => {
    const { name, sets, reps } = exercise;
    const validName =
      validator.isAlphanumeric(name) &&
      validator.isLength(name, { min: 1, max: 50 });
    const validSets = 1 <= sets! && sets! <= 15;
    const validReps = 1 <= reps! && reps! <= 1000;

    if (!validName || !validSets || !validReps) {
      return false;
    }
    return true;
  });

  if (exercises.length === 0) {
    return 'Please include at least one exercise.';
  }
  if (!validExercises) {
    return 'Please ensure each exercise is in the valid format [name: 1-50 letters and numbers, sets: 1-15, reps: 1-1000] ';
  }
};

// helper validators
const checkValidUsername = (username: string) =>
  /^[a-zA-Z0-9\_]{1,15}$/.test(username);

const checkValidPassword = (password: string) =>
  validator.isStrongPassword(password);

const checkValidEmail = (email: string) => validator.isEmail(email);
