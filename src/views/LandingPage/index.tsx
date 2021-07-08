import { useState, useEffect, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../hooks/useAuth';
import Modal from '../../components/Modal';
import * as s from './styles';
import { validateLoginForm } from '../../utils/formValidation';
import { ILoginForm } from '../../interfaces';

const initialState: ILoginForm = {
  username: '',
  password: '',
};

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { currentUser, setCurrentUser } = useAuth();
  const history = useHistory();

  const handleLogin = async () => {
    setError('');

    if (validationError) {
      resetForm(true);
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      // await axios.post('baseurl/api/auth/login', values)
      // if errror occurs [username dne or password dn match username, display error]
      // both inputs required for submit

      // simulating time for db call  TEST
      setTimeout(() => {
        const user = 'asdfasdf';
        setLoading(false);
        resetForm(true); // testing val error or incorrect cred error
        localStorage.setItem('user', user);
        setCurrentUser('asdfasdf');
        history.push('/home');
      }, 1000);
    } catch (error) {
      setError('error from server -> need to handle');
      resetForm(true);
    }
  };

  const {
    values,
    resetForm,
    handleChange,
    handleSubmit,
    validationError,
  } = useForm(handleLogin, initialState, validateLoginForm);

  const toggleModal = () => {
    setError('');
    setIsModalOpen(prev => !prev);
  };

  const isDisabled = !values.username || !values.password || loading;

  return (
    <>
      {/* modal will be hidden and when clicked will be displayed above everything under */}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <s.Wrapper>
        <s.BodyWrapper>
          <s.Header>
            <s.Title>liftona</s.Title>
            <s.Subtitle>
              Find your next workout. <br />
              Share your favorite workout.
            </s.Subtitle>
          </s.Header>
          <s.FormWrapper>
            {error && <s.Error>{error}</s.Error>}
            <s.Form onSubmit={handleSubmit}>
              <s.Input
                type='text'
                name='username'
                value={values.username}
                onChange={handleChange}
                placeholder='username'
                required
              />
              <s.Input
                type='password'
                name='password'
                value={values.password}
                onChange={handleChange}
                placeholder='password'
                required
              />
              <s.LoginButton type='submit' disabled={isDisabled}>
                {loading ? <ClipLoader color='#bb86fc' size={18} /> : 'Log in'}
              </s.LoginButton>
            </s.Form>
            {/* redirects to forgotpassword page */}
            <s.ForgotPasswordLink
              onClick={() => history.push('/forgot_password')}
            >
              Forgot password?
            </s.ForgotPasswordLink>
            <s.Hr />
            <s.SignUpButton onClick={toggleModal}>Sign up</s.SignUpButton>
          </s.FormWrapper>
        </s.BodyWrapper>
        <s.Footer>Liftona &copy; {new Date().getFullYear()}</s.Footer>
      </s.Wrapper>
    </>
  );
};

export default LandingPage;
