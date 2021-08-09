import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FormikHelpers, useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import ClipLoader from 'react-spinners/ClipLoader';
import * as s from './styles';
import { useAuth } from '../../hooks/useAuth';
import { signUpFormSchema } from '../../utils/validationSchema';
import { ISignUpForm } from '../../interfaces';
import TextField from '../TextField';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues: ISignUpForm = {
  username: '',
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpModal = ({
  isModalOpen,
  setIsModalOpen,
}: Props): JSX.Element | null => {
  const [error, setError] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const { setCurrentUser } = useAuth();

  // hook for modal animation
  const props = useSpring({
    config: {
      duration: 250,
    },
    transform: isModalOpen ? `translateY(0%)` : `translateY(-150%)`,
  });

  const handleSubmit = async (
    values: ISignUpForm,
    action: FormikHelpers<ISignUpForm>
  ) => {
    setError('');

    // TODO:
    // 1 - on successful sign up we redirect user to '/' but with home page data
    // 2 - on error display error below modal title
    // 3 - need validation of inputs. useForm also has error state and passes it to form

    try {
      const { username, name, email, password } = values;
      const signUpUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/auth/signup`;
      const {
        data: { accessToken, uid, username: user },
      } = await axios.post(
        signUpUrl,
        {
          username: username,
          email: email,
          name: name,
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
      action.setValues({ ...values, password: '', confirmPassword: '' });
      action.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signUpFormSchema,
    onSubmit: handleSubmit,
    validateOnBlur: false,
    validateOnChange: false,
  });

  // user closed modal by clicking outside of the modal
  const closeModal = (e: any) => {
    if (e.target === modalRef.current) {
      setIsModalOpen(false);
      setError('');
      formik.resetForm();
    }
  };

  // user closed modal by clicked on close button
  const closeModalWithButton = () => {
    setIsModalOpen(false);
    setError('');
    formik.resetForm();
  };

  useEffect(() => {
    if (Object.keys(formik.errors).length > 0) {
      formik.setValues({
        ...formik.values,
        password: '',
        confirmPassword: '',
      });

      const key = Object.keys(formik.errors)[0];
      console.log(formik.errors, key);
      // @ts-ignore
      setError(formik.errors[key]);
    }
  }, [formik.errors]);

  const isDisabled =
    !formik.values.username ||
    !formik.values.name ||
    !formik.values.email ||
    !formik.values.password ||
    !formik.values.confirmPassword ||
    formik.isSubmitting;

  console.log(formik);
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
                <s.ModalForm onSubmit={formik.handleSubmit}>
                  <TextField
                    type='text'
                    name='username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    placeholder='username'
                    maxLength={15}
                    error={formik.errors.username}
                  />
                  <TextField
                    type='text'
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder='name'
                    maxLength={50}
                    error={formik.errors.name}
                  />
                  <TextField
                    type='text'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder='email'
                    error={formik.errors.email}
                  />
                  <TextField
                    type='password'
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder='password'
                    error={
                      formik.errors.password || formik.errors.confirmPassword
                    }
                  />
                  <TextField
                    type='password'
                    name='confirmPassword'
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    placeholder='confirm password'
                    error={
                      formik.errors.confirmPassword || formik.errors.password
                    }
                  />
                  <s.SignUpButton type='submit' disabled={isDisabled}>
                    {formik.isSubmitting ? (
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

export default SignUpModal;
