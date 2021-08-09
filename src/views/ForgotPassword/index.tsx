import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormikHelpers, useFormik } from 'formik';
import TextField from '../../components/TextField';
import { forgotPasswordSchema } from '../../utils/validationSchema';
import * as s from './styles';

interface Values {
  email: string;
}

const initialValues: Values = {
  email: '',
};

const ForgotPassword = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (values: Values, action: FormikHelpers<Values>) => {
    try {
      const url = `${process.env.REACT_APP_SERVER_BASE_URL}/auth/forgot-password`;
      await axios.post(url, { email: values.email });
      setSubmitSuccess(true);
    } catch (error) {
      setError(error.response.data.error.message);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    validateOnChange: false,
    onSubmit,
  });

  useEffect(() => {
    if (Object.keys(formik.values).length > 0) {
      setError(Object.values(formik.errors)[0]);
    }
  }, [formik.errors]);

  const isDisabled = !formik.values.email || formik.isSubmitting;

  return (
    <s.Wrapper>
      <s.FormWrapper>
        <s.FormHeader>Reset password</s.FormHeader>
        {error && <s.Error>{error}</s.Error>}
        {submitSuccess ? (
          <ResetPasswordConfirmation />
        ) : (
          <>
            <s.Form onSubmit={formik.handleSubmit}>
              <TextField
                type='text'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder='email'
                onBlur={formik.handleBlur}
                error={formik.errors.email}
              />
              <s.Button type='submit' disabled={isDisabled}>
                Reset Password
              </s.Button>
            </s.Form>
            <s.Hr />
            {/* ternary, link to cancel if form not submitted. if submitted link to home */}
            <s.InfoLink to='/'>Cancel</s.InfoLink>
          </>
        )}
      </s.FormWrapper>
      <s.Footer>Liftona &copy; {new Date().getFullYear()}</s.Footer>
    </s.Wrapper>
  );
};

const ResetPasswordConfirmation = () => {
  return (
    <>
      <p>Please check your inbox for further instructions.</p>
      <s.InfoLink to='/'>Back</s.InfoLink>
    </>
  );
};

export default ForgotPassword;
