import { useState, useEffect, useRef } from 'react';

export const UserSearch = () => {
  const [query, setQuery] = useState('ludevvv');
  const [error, setError] = useState(null);
  const inputRef = useRef(query);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current = query === '';
      return;
    }

    if (query.trim() === '') {
      setError("You can't search a user without a name");
      return;
    }

    setError(null);
  }, [query]);

  return { query, error, setQuery };
};
