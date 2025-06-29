import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Preloader from "./components/Preloader/Preloader";
import SignupModal from "./components/SignupModal/SignupModal";
import LoginModal from "./components/LoginModal/LoginModal";

import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";
import NotFoundPage from "./pages/NotFoundPage";

interface User {
  nickname: string;
}

const App: React.FC = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLoginSuccess = (nickname: string) => {
    setUser({ nickname });
    setShowLogin(false);
  };

  const handleSignupSuccess = (nickname: string) => {
    setUser({ nickname });
    setShowSignup(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      {loading && <Preloader />}

      <SignupModal
        open={showSignup}
        onClose={() => setShowSignup(false)}
        onSignupSuccess={handleSignupSuccess}
      />

      <LoginModal
        open={showLogin}
        onClose={() => setShowLogin(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Layout
              onSignup={() => setShowSignup(true)}
              onLogin={() => setShowLogin(true)}
              user={user}
              onLogout={handleLogout}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;