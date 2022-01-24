import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthContext } from './context';

import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Menu from './components/Menu';

import './styles/app.scss'

function App () {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('is_auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <div className="app">
          <Header />
          <Menu />
          <AppRouter />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
