import React, { useState } from 'react';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
    const handleLogin = () => {
      if (inputValue.trim() === '') {
        setError('Por favor, digite um nome de usuário.');
        return;
      }
      setUsername(inputValue);
      setError('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          handleLogin();
        }
      };
  
    if (username) {
      return (
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold">Olá, {username}! Bem-vindo ao sistema.</h1>
        </div>
      );
    }
  
    return (
      <div className="login-container">
        <div>
          <label htmlFor="username" className="block text-lg mb-2">
            Digite seu nome de usuário:
          </label>
          
          <input
            id="username"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="login-input"
            autoFocus
          />
          <button onClick={handleLogin} className="login-button">
            Entrar
          </button>
          {error && <p className="error-text">{error}</p>}
        </div>
      </div>
    );
  };
  
  export default Login;