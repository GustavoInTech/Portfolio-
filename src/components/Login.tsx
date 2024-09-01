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
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
          <header className="w-full text-center p-6">
            <h1 className="text-3xl font-bold">
              Olá,  
              <span className="text-green-500"> {username} </span> ! Bem-vindo ao sistema.</h1>
          </header>
      
          <main className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
            <div>
              <h1 className="text-4xl font-semibold text-white mt-2">Eu sou Gustavo Rodrigues</h1>

              <div className="mt-4 text-2xl font-medium">
                <span className="inline-block">Desenvolvedor Backend especializado em</span>
                <div className="text-green-400 animate-pulse">
                  Java, Spring Boot, MySQL, PostgreSQL
                </div>
              </div>
            </div>

            <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
              Criando soluções escaláveis e robustas com foco em performance e segurança.
            </p>

            <a
              href="https://wa.me/55219080022571"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Contate-me
            </a>
          </main>
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