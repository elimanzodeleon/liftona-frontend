import React from 'react';
import { useHistory } from 'react-router-dom';
import * as s from './styles';

const ForgotPassword = () => {
  const history = useHistory();
  return (
    <s.Wrapper>
      <s.FormWrapper>
        <s.FormHeader>Reset password</s.FormHeader>
        <s.Form>
          <s.Input
            type='text'
            name='email'
            // value={values.email}
            // onChange={handleChange}
            placeholder='email'
            required
          />
          {/* there should be a ternary here, if form submitted diplay a message. else disaply button */}
          <s.Button>Reset Password</s.Button>
        </s.Form>
        <s.Hr />
        {/* ternary, link to cancel if form not submitted. if submitted link to home */}
        <s.CancelLink onClick={() => history.goBack()}>Cancel</s.CancelLink>
      </s.FormWrapper>
      <s.Footer>Liftona &copy; {new Date().getFullYear()}</s.Footer>
    </s.Wrapper>
  );
};

export default ForgotPassword;
