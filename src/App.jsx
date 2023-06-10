import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState('ludevvv');

  useEffect(() => {
    const searchUsearApi = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${search}`);
        const user = await res.json();

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
          repos: user,
          account_date: user.created_at,
        };

        setUser(mappedApi);
      } catch (e) {
        console.log(e);
      }
    };
    searchUsearApi();
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setSearch(e);
  };

  console.log(user);

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Github username..." />
        <button type="submit">Search</button>
      </form>

      {/* {user.map(({ username, id }) => {
        return (
          <div  key={id} className="card-user">
            <h3>{username}</h3>
          </div>
        );
      })} */}

      {user?.map(({ username }) => {
        console.log({
          username,
        });
      })}
    </div>
  );
}

export default App;
