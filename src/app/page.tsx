"use client";
import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Login from '@/components/Login';

export default function Home() {
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Duração da animação de carregamento (3 segundos)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return <Login/>;
  

};


