import { useEffect, useState } from 'react';

export const useFindUser = ({ query }) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const searchUsearApi = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${query}`);
        const user = await res.json();

        console.log(user);

        const mappedApi = {
          id: user.id,
          username: user.login,
          name: user.name,
          avatar: user.avatar_url,
          bio: user.bio,
          company: user.company,
          email: user.email,
          followers: user.followers,
          following: user.following,
          location: user.location,
          account_date: `${new Date(user.created_at).getFullYear()}-${
            new Date(user.created_at).getMonth() + 1
          }-${new Date(user.created_at).getDate()}`,
          repos: user.public_repos,
          profile_url: user.html_url,
        };

        setUser([mappedApi]);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    searchUsearApi();
  }, [query]);

  return { user, loading, error };
};
