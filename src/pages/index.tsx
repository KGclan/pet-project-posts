import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './main';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};
