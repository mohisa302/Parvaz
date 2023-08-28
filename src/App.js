import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { LandingPage } from './pages/LandingPage';
import { HeaderNavComp } from './components/HeaderNavComp';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderNavComp />}>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/building" element={<LandingPage />}></Route>
          <Route path="/environment" element={<LandingPage />}></Route>
          <Route path="/transportation" element={<LandingPage />}></Route>
          <Route path="/medicine" element={<LandingPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
