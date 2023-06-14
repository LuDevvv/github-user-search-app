import { useState } from 'react';
import { UserCard } from './components/UserCard';
import { Form } from './components/Form';
import './App.css';

function App() {
  const [query, setQuery] = useState('ludevvv');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.input.value.trim());
  };

  return (
    <div className="App">
      <header className="header">
        <h2>GitFinder 🔎</h2>
        {/* <h4>DARK 🌙</h4> */}
        <h4>LIGHT ☀️</h4>
      </header>

      <Form handleSubmit={handleSubmit} />
      <UserCard query={query} />
    </div>
  );
}

export default App;
