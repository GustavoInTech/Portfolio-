import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [loadingText, setLoadingText] = useState('');
  const text = 'Carregando...'; 

  useEffect(() => {
    let index = 0;
    let interval: NodeJS.Timeout;

   
    const updateLoadingText = () => {
      setLoadingText((prev) => {
        const newText = text.slice(0, index + 1); 
        return newText;
      });
      index++;
    };

    interval = setInterval(() => {
      updateLoadingText();

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 150);

    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-green-500 font-mono text-lg">
      <span className="loading-text">{loadingText}</span>
    </div>
  );
};

export default LoadingScreen;
