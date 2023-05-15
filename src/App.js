import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Services from './pages/Services/Services';
import Contacts from './pages/Contacts/Contacts';

function App() {
  // const [aosAll,setAosAll] = useState(false)
  // const [windowWidth,setWindowWidth] = useState(1)
  // useEffect(() => {
   
  //   if (windowWidth < 700) {
  //     if (windowWidth== 1) {
  //       setAosAll(false)        
  //     }else{
       
  //       setAosAll(true)
  //     }
  //   }else{
  //     setAosAll(false)
  //   }
  // }, [windowWidth])


  //   window.addEventListener('resize', function() {
  //     var windowWidth = window.innerWidth;
  //     setWindowWidth(windowWidth)
  //   });
  
 
 
 
//  useEffect( () => {
//        if (aosAll && windowWidth > 1 ) {
//         AOS.init({disable: true}); 
//        }else{
       
      //  }
     
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [aosAll])
    AOS.init(); 
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
