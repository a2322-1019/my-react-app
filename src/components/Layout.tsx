import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface User {
  nickname: string;
}

interface LayoutProps {
  onSignup: () => void;
  onLogin: () => void;
  user: User | null;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ onSignup, onLogin, user, onLogout }) => (
  <>
    <Header onSignup={onSignup} onLogin={onLogin} user={user} onLogout={onLogout} />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;