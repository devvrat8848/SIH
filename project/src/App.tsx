import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FRAAtlas from './pages/FRAAtlas';
import DSS from './pages/DSS';
import DigitizedRecords from './pages/DigitizedRecords';
// About merged into HomePage
import Login from './pages/Login';
import { AuthProvider, useAuth } from './lib/auth/AuthProvider';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { session, loading } = useAuth();
  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!session) return <Login />;
  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
              <Route path="/atlas" element={<ProtectedRoute><FRAAtlas /></ProtectedRoute>} />
              <Route path="/dss" element={<ProtectedRoute><DSS /></ProtectedRoute>} />
              <Route path="/records" element={<ProtectedRoute><DigitizedRecords /></ProtectedRoute>} />
              {/* About merged into Home; route removed */}
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;