export const searchUser = async ({ query }) => {
  const res = await fetch(`https://api.github.com/users/${query}`);
  const data = await res.json();

  if (!data) {
    return [];
  }

  const user = {
    id: data.id,
    username: data.login,
    name: data.name,
    avatar: data.avatar_url,
    bio: data.bio,
    company: data.company,
    email: data.email,
    followers: data.followers,
    following: data.following,
    location: data.location,
    account_date: `${new Date(data.created_at).getFullYear()}-${
      new Date(data.created_at).getMonth() + 1
    }-${new Date(data.created_at).getDate()}`,
    repos: data.public_repos,
    profile_url: data.html_url,
  };

  return [user];
};
