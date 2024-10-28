import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider } from './contexts/SidebarContext';
import HomePage from './pages/HomePage';
import ShortsPage from './pages/ShortPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import HistoryPage from './pages/HistoryPage';
import LikedVideosPage from './pages/LikedVideosPage';

const App = () => {
  return (
    <Router>
      <SidebarProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shorts" element={<ShortsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/subscriptions" element={<SubscriptionsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/liked" element={<LikedVideosPage />} />
        </Routes>
      </SidebarProvider>
    </Router>
  );
};

export default App;