import { useEffect, useState } from 'react';

export const useFindUser = ({ query }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const searchUsearApi = async () => {
      try {
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
          email: user.emal,
          followers: user.followers,
          following: user.following,
          location: user.location,
          repos: user.public_repos,
          account_date: user.created_at,
          profile_url: user.html_url,
        };

        setUser([mappedApi]);
      } catch (e) {
        console.log(e);
      }
    };
    searchUsearApi();
  }, [query]);

  return { user };
};
