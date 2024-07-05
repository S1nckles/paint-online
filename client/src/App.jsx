import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './MainLayout';
import './styles/app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<MainLayout />} />
        <Route path="*" element={<Navigate to={`/${(+new Date()).toString(16)}`} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
