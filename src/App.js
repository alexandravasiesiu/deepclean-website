import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import PrivacyPolicyPage from './pages/PrivacyPolicy.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/Politica_de_confidențialitate" element={<PrivacyPolicyPage/>} />
    </Routes>
  );
}

export default App;
