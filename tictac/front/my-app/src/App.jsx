// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignIn from './components/SignIn.jsx';
import SignOut from './components/SignOut.jsx';
import Register from './components/Register.jsx';
import Board from './components/Board.jsx';
import './App.css';

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        try {
          const res = await axios.get('https://tictactoe-game-3.onrender.com/api/game/status', {
            headers: { Authorization: token },
          });
          if (res.status !== 200) {
            setToken(null);
          }
        } catch {
          setToken(null);
        }
      }
    };
    checkAuth();
  }, [token]);

  return (
    <div className="app">
      
      <main>

        {token ? <Board /> : <Register />}
        

      </main>
      <footer>
      {token ? <SignOut setToken={setToken} /> : <SignIn setToken={setToken} />}
      </footer>
    </div>
  );
};

export default App;
