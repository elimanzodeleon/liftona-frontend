import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import SignUpModal from '../../components/SignUpModal';
import LoginForm from '../../components/LoginForm';
import * as s from './styles';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');
  const { currentUser } = useAuth();
  const history = useHistory();

  const toggleModal = () => {
    setError('');
    setIsModalOpen(prev => !prev);
  };

  if (currentUser) {
    return <Redirect to='/home' />;
  }

  return (
    <>
      {/* modal will be hidden and when clicked will be displayed above everything under */}
      <SignUpModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
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
            <LoginForm />
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
