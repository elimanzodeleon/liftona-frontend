import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import * as s from './styles';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('user submitted search');

    // need to reset form here somehow - below is test
    const term = searchTerm;
    setSearchTerm('');

    history.push(`/search?q=${term}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <s.SearchInput
        type='text'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder='Search Liftona'
      />
    </form>
  );
};

export default SearchInput;
