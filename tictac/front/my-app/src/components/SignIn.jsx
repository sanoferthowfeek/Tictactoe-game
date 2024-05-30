// src/components/SignIn.js
import React, { useState } from 'react';
import axios from 'axios';

const SignIn = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://tictactoe-game-3.onrender.com/api/auth/login', { username, password });
      setToken(res.data.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='input1'>
      <h2>Sign In</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button className='game2' type="submit">Sign In</button>
      </div>
    </form>
  );
};

export default SignIn;
