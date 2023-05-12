import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>
    </div>
  );
}

export default App;
