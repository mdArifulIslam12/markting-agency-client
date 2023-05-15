import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Services from './pages/Services/Services';
import Contacts from './pages/Contacts/Contacts';

function App() {
  const [aosAll,setAosAll] = useState(false)
  const [windowWidth,setWindowWidth] = useState(0)
  useEffect(() => {
    if (windowWidth < 700) {
      setAosAll(true)
    }else{
      setAosAll(false)
    }
  }, [windowWidth])
  window.addEventListener('resize', function() {
    var windowWidth = window.innerWidth;
    setWindowWidth(windowWidth)
  });
  AOS.init({disable: aosAll,});
  return (
    <div >
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/service' element={<Services/>} />
      <Route path='/contactUs' element={<Contacts/>} />
     </Routes>
     <Footer/>

    </div>
  );
}

export default App;
