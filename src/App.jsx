import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUpPage';
import Context from './Context';
import Timeline from './pages/Timeline';
import UserPage from './pages/UserPage';

export default function App() {
  const lsToken = localStorage.getItem('token');
  const [token, setToken] = useState(lsToken);

  const contextValue = useMemo(() => ({
    token,
    setToken,
  }), [token]);

  return (
    <Context.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
