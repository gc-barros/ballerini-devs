import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cabecalho from './components/Cabecalho';
import Home from './pages/Home'
import Devs from './pages/Devs'
import NoMatch from './pages/NoMatch'
import Options from './components/Options'

function RoutesApp() {
  return (
    <Router>
      <Cabecalho />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devs" element={<Devs />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default RoutesApp;