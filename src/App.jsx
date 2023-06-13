import { useState } from 'react';
import './App.css';
import { useFindUser } from './hooks/useFindUser';

function App() {
  const [query, setQuery] = useState('midudev');
  const { user } = useFindUser({ query });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setQuery(e);
  };
  return (
    <div className="App">
      <h1>Github Finder 🔎</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Github username..." />
        <button type="submit">Search</button>
      </form>

      {user.map(
        ({
          followers,
          following,
          company,
          location,
          email,
          bio,
          name,
          username,
          id,
          avatar,
          account_date,
          repos,
          profile_url,
        }) => {
          return (
            <div key={id} className="card-user">
              <div className="flex-ct">
                <div className="left-ct">
                  <h1>{name}</h1>
                  <b>@{username}</b>
                </div>

                <div className="rihgt-ct">
                  <img src={avatar} alt="" className="avatar" />
                </div>
              </div>

              <div className="personal-info">
                <span>{email ? `✉️ ${email}` : null}</span>
                <span>{location ? `📍 ${location}` : null}</span>
                <span>{company ? ` 🏢 ${company}` : null}</span>
              </div>

              <div className="">{bio}</div>
              <section className="github-info">
                <div className="github-info-card">
                  <b>Followers</b>
                  {followers}
                </div>

                <div className="github-info-card">
                  {' '}
                  <b>Following</b>
                  {following}{' '}
                </div>

                <div className="github-info-card">
                  {' '}
                  <b>Repos</b>
                  {repos}{' '}
                </div>
              </section>

              <a
                className="link-to-profile"
                href={profile_url}
                rel="noreferrer"
              >
                🔗 Link to profile
              </a>
            </div>
          );
        }
      )}
    </div>
  );
}

export default App;
