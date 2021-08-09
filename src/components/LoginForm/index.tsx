import { useState } from 'react';
import axios from 'axios';
import { useFormik, FormikHelpers } from 'formik';
import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { useAuth } from '../../hooks/useAuth';
import * as s from './styles';
import TextField from '../TextField';
import { ILoginForm } from '../../interfaces';
import { loginFormSchema } from '../../utils/validationSchema';

const initialValues: ILoginForm = {
  username: '',
  password: '',
};

const LoginForm = () => {
  const [error, setError] = useState('');
  const { setCurrentUser } = useAuth();
  const history = useHistory();

  const handleSubmit = async (
    values: ILoginForm,
    action: FormikHelpers<ILoginForm>
  ) => {
    setError('');
    try {
      const { username, password } = values;
      const loginUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/auth/login`;
      const {
        data: { accessToken, uid, username: user },
      } = await axios.post(
        loginUrl,
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      setCurrentUser(accessToken);

      // TODO move to external function
      localStorage.setItem('uid', uid);
      localStorage.setItem('user', user);

      history.push('/home');
    } catch (error) {
      setError(error.response.data.error.message);
      formik.setErrors({});
      action.setValues({ ...values, password: '' });
      action.setSubmitting(false);
      // setError('error from server -> need to handle'); TODO this will set error from server somehow
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: loginFormSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

  return (
    <>
      {error && Object.keys(formik.errors).length === 0 && (
        <s.Error>{error}</s.Error>
      )}
      <s.Form onSubmit={formik.handleSubmit}>
        <TextField
          type='text'
          name='username'
          value={formik.values.username}
          onChange={formik.handleChange}
          placeholder='username'
          error={formik.errors.username}
        />
        <TextField
          type='password'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder='password'
          error={formik.errors.password}
        />
        <s.LoginButton type='submit' disabled={formik.isSubmitting}>
          {formik.isSubmitting ? (
            <ClipLoader color='#bb86fc' size={18} />
          ) : (
            'Log in'
          )}
        </s.LoginButton>
      </s.Form>
    </>
  );
};

export default LoginForm;
