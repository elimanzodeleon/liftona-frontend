import { useState, useEffect } from 'react';

export const useForm = (callback: any, initialState: any, validate: any) => {
  const [values, setValues] = useState(initialState);
  const [validationError, setValidationError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log('uvalidation error changed');
    if (isSubmitting) {
      callback();
    }
  }, [validationError]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const error = validate(values);
    setValidationError(error);
  };

  const resetForm = (passwordsOnly = false) => {
    if (passwordsOnly) {
      if (values.confirmPassword) {
        setValues({ ...values, password: '', confirmPassword: '' });
      } else {
        setValues({ ...values, password: '' });
      }
    } else {
      setValues(initialState);
    }
  };

  const resetErrors = () => {
    setIsSubmitting(false);
    setValidationError('');
  };

  return {
    values,
    resetForm,
    handleChange,
    handleSubmit,
    validationError,
    resetErrors,
  };
};
