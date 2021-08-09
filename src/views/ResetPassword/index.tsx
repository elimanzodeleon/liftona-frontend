import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useFormik, FormikHelpers } from 'formik';
import { resetPasswordSchema } from '../../utils/validationSchema';
import TextField from '../../components/TextField';
import * as s from './styles';

interface Values {
  password: string;
  confirmPassword: string;
}

const initialValues: Values = {
  password: '',
  confirmPassword: '',
};

const ResetPassword = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');
  const { resetId } = useParams<{ resetId: string }>();

  const onSubmit = async (values: Values, action: FormikHelpers<Values>) => {
    // include token and new password in req body
    setError('');
    try {
      const url = `${process.env
        .REACT_APP_SERVER_BASE_URL!}/auth/reset-password`;
      await axios.patch(url, {
        token: resetId,
        password: values.password,
      });
      setSubmitSuccess(true);
      // TODO REDIRECT USER TO HOME PAGE
    } catch (error) {
      action.setValues(formik.initialValues);
      setError(error.response.data.error.message);
      action.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: resetPasswordSchema,
    validateOnChange: false,
    onSubmit,
  });

  useEffect(() => {
    if (Object.keys(formik.errors).length > 0) {
      formik.setValues(formik.initialValues);
      setError(Object.values(formik.errors)[0]);
    }
  }, [formik.errors]);

  const isDisabled =
    !formik.values.password ||
    !formik.values.confirmPassword ||
    formik.isSubmitting;

  return (
    <s.Wrapper>
      <s.FormWrapper>
        <s.FormHeader>Reset password</s.FormHeader>
        {error && <s.Error>{error}</s.Error>}
        {submitSuccess ? (
          <ChangePasswordConfirmation />
        ) : (
          <>
            <s.Form onSubmit={formik.handleSubmit}>
              <TextField
                type='password'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder='new password'
                error={formik.errors.password || formik.errors.confirmPassword}
              />
              <TextField
                type='password'
                name='confirmPassword'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                placeholder='confirm password'
                error={formik.errors.password || formik.errors.confirmPassword}
              />
              <s.Button type='submit' disabled={isDisabled}>
                Change Password
              </s.Button>
            </s.Form>
            <s.Hr />
            <s.InfoLink to='/'>Cancel</s.InfoLink>
          </>
        )}
      </s.FormWrapper>
      <s.Footer>Liftona &copy; {new Date().getFullYear()}</s.Footer>
    </s.Wrapper>
  );
};

const ChangePasswordConfirmation = () => {
  return (
    <>
      <p>Your password has been successfully changed.</p>
      <s.InfoLink to='/'>Back</s.InfoLink>
    </>
  );
};

export default ResetPassword;
