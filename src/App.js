import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/500" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
