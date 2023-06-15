import { useEffect, useState, useRef } from 'react';
import { searchUser } from '../services/searchUser';

export const useFindUser = ({ query }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '') return;

    const searchUsearApi = async () => {
      try {
        setLoading(true);
        const user = await searchUser({ query });
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
