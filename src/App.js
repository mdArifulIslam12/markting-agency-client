import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div >
     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>
    </div>
  );
}

export default App;
