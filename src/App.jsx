import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import InstructionPage from './components/InstructionPage';
import ComplaintTypePage from './components/ComplaintTypePage';
import ComplainantDetailsPage from './components/ComplainantDetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <a href="#main-content" className="skip-link">
          Skip to page content.
        </a>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/instructions" replace />} />
            <Route path="/instructions" element={<InstructionPage />} />
            <Route path="/complaint-type" element={<ComplaintTypePage />} />
            <Route
              path="/complainant-details"
              element={<ComplainantDetailsPage />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
