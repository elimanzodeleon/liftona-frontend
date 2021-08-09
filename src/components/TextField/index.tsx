import * as s from './styles';

const TextField = ({ ...props }) => {
  return (
    <>
      <s.Input {...props} error={props.error} autoComplete='off' />
    </>
  );
};

export default TextField;
