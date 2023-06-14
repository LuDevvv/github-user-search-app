import { useFindUser } from '../hooks/useFindUser';
import { CardSkeleton } from './CardSkeleton';

export const UserCard = ({ query }) => {
  const { user, loading, error } = useFindUser({ query });

  return (
    <div>
      {user?.map(
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
          return loading ? (
            <CardSkeleton />
          ) : (
            <div key={id} className="card-user">
              <div className="flex-ct">
                <div className="left-ct">
                  <h1>{name}</h1>
                  <b className="username">@{username}</b>
                </div>

                <div className="rihgt-ct">
                  <img src={avatar} alt="" className="avatar" />
                </div>
              </div>

              <div className="personal-info">
                <span>📅 Joined in {account_date}</span>
                <span>✉️ {email ? email : 'This profile has no email'}</span>
                <span>
                  📍 {location ? location : 'This profile has no location'}
                </span>
                <span>
                  🏢 {company ? company : 'This profile has no company'}
                </span>
                <span>
                  {username === 'defunkt' ? '⭐ Github Founder' : null}
                </span>
              </div>

              <div className="bio">{bio ? bio : 'This profile has no bio'}</div>

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
                className="link-to-profile button"
                href={profile_url}
                target="_blank"
              >
                🔗 Link to profile
              </a>
            </div>
          );
        }
      )}
    </div>
  );
};
