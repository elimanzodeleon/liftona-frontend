import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
  username: yup.string().required('username is required.'),
  password: yup.string().required('password is required.'),
});

export const signUpFormSchema = yup.object().shape({
  username: yup
    .string()
    .matches(
      new RegExp('^[a-zA-Z0-9_]{1,15}'),
      'username may only include letters, numbers, and underscores.'
    )
    .required('username is required.'),
  name: yup
    .string()
    .min(2, 'name should be at least 2 characters long.')
    .max(50, 'name should be no longer than 50 characters.')
    .required('name is required.'),
  email: yup
    .string()
    .email('Please enter a valid email.')
    .required('email is required.'),
  password: yup
    .string()
    .matches(
      new RegExp('^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^a-zA-Z]).{8,}$'),
      'Password must be at least 8 characters in length and include an uppercase letter, lowercase letter and a number or symbol.'
    )
    .required('password is required.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match'),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email.')
    .required('Please enter a valid email.'),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .matches(
      new RegExp('^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^a-zA-Z]).{8,}$'),
      'Password must be at least 8 characters in length and include an uppercase letter, lowercase letter and a number or symbol.'
    )
    .required(
      'Password must be at least 8 characters in length and include an uppercase letter, lowercase letter and a number or symbol.'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match.'),
});

export const newWorkoutSchema = yup.object().shape({
  title: yup
    .string()
    .min(1, 'Please enter a title for your workout.')
    .max(50, 'Your workout title should be no longer than 50 characters.')
    .required('Please enter a title for your workout.'),
  details: yup.string(),
  exercise: yup
    .array()
    .of(
      yup.object().shape({
        name: yup
          .string()
          .required('Please make sure each exercise has a name.'),
        sets: yup
          .number()
          .min(1, 'Each exercise should contain at least 1 set.')
          .max(15, 'No exercise should exceed 15 sets.')
          .required('Please ensure each exercise has a value for sets.'),
        reps: yup
          .number()
          .min(1, 'Each exercise should contian at least 1 rep')
          .max(100, 'No exercise should exceed 100 reps.')
          .required('Please ensure each exercise has a value for sets.'),
      })
    )
    .min(1, 'Please add at least 1 exercise to your workout.'),
});
