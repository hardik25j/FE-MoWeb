import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import ErrorPage from './common_component/ErrorPage'

const RoutesComp = (props) => {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default RoutesComp;