import { useEffect, useState, useRef } from 'react';
import { searchUser } from '../services/searchUser';

export const useFindUser = ({ query }) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const inputRef = useRef(query);

  useEffect(() => {
    if (inputRef === query || query === '') return;

    const searchUsearApi = async () => {
      try {
        setLoading(true);
        const user = await searchUser({ query });
        console.log(user);
        setUser(user);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    searchUsearApi();
  }, [query]);
  return { user, loading, error };
};
