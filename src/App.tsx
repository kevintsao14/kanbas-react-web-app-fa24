import React from 'react';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Labs from "./Labs";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
