import { useState } from 'react';
import { UserCard } from './components/UserCard';
import { Form } from './components/Form';
import './App.css';
import { UserSearch } from './hooks/userSearch';

function App() {
  const { query, error, setQuery } = UserSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.input.value.trim());
    e.target.input.value = '';
  };

  return (
    <div className="App">
      <header className="header">
        <h2>GitFinder 🔎</h2>
      </header>

      <Form handleSubmit={handleSubmit} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <UserCard query={query} />
    </div>
  );
}

export default App;
