import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import ClipLoader from 'react-spinners/ClipLoader';
import * as s from './styles';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import {
  validateLoginForm,
  validateSignUpForm,
} from '../../utils/formValidation';
import { ISignUpForm } from '../../interfaces';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: ISignUpForm = {
  username: '',
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Modal = ({ isModalOpen, setIsModalOpen }: Props): JSX.Element | null => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const { currentUser, setCurrentUser } = useAuth();

  // hook for modal animation
  const props = useSpring({
    config: {
      duration: 250,
    },
    transform: isModalOpen ? `translateY(0%)` : `translateY(-150%)`,
  });

  const handleSignUp = async () => {
    setError('');
    console.log('handlesignup called');
    if (validationError) {
      resetForm(true);
      setError(validationError);
      return;
    }

    // TODO:
    // 1 - on successful sign up we redirect user to '/' but with home page data
    // 2 - on error display error below modal title
    // 3 - need validation of inputs. useForm also has error state and passes it to form

    try {
      setLoading(true);
      // simulate time for communicating with db
      // await send values to db axios.post('baseurl/api/auth/signup', values)

      setTimeout(() => {
        setLoading(false);
        localStorage.setItem('user', 'asdfasdf');
        setCurrentUser('asdfasdf');
        history.push('/home');
      }, 1000);
    } catch (error) {
      setError('some error recvd from server');
      resetForm(true);
    }
  };

  const {
    handleChange,
    handleSubmit,
    values,
    resetForm,
    validationError,
    resetErrors,
  } = useForm(handleSignUp, initialState, validateSignUpForm);

  // user closed modal by clicking outside of the modal
  const closeModal = (e: any) => {
    if (e.target === modalRef.current) {
      setIsModalOpen(false);
      setError('');
      resetErrors();
      resetForm();
    }
  };

  // user closed modal by clicked on close button
  const closeModalWithButton = () => {
    setIsModalOpen(false);
    setError('');
    resetErrors();
    resetForm();
  };

  const isDisabled =
    !values.username ||
    !values.name ||
    !values.email ||
    !values.password ||
    !values.confirmPassword ||
    loading;
  console.log(values, loading, isDisabled, validationError);
  return (
    <>
      {isModalOpen ? (
        <div>
          <s.Overlay ref={modalRef} onClick={closeModal}>
            <animated.div style={props}>
              <s.ModalWrapper>
                <s.CloseButton onClick={closeModalWithButton} />
                <s.ModalHeader>Create your account</s.ModalHeader>
                {error && <s.Error>{error}</s.Error>}
                <s.ModalForm onSubmit={handleSubmit}>
                  <s.ModalFormInput
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={handleChange}
                    placeholder='username'
                    maxLength={15}
                    required
                  />
                  <s.ModalFormInput
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    placeholder='name'
                    maxLength={50}
                    required
                  />
                  <s.ModalFormInput
                    type='text'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    placeholder='email'
                    required
                  />
                  <s.ModalFormInput
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    placeholder='password'
                    required
                  />
                  <s.ModalFormInput
                    type='password'
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    placeholder='confirm password'
                    required
                  />
                  <s.SignUpButton type='submit' disabled={isDisabled}>
                    {loading ? (
                      <ClipLoader color='#e4e6eb' size={18} />
                    ) : (
                      'Sign up'
                    )}
                  </s.SignUpButton>
                </s.ModalForm>
              </s.ModalWrapper>
            </animated.div>
          </s.Overlay>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
