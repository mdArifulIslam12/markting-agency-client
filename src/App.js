import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Services from './pages/Services/Services';
import Contacts from './pages/Contacts/Contacts';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import { FaArrowUp } from 'react-icons/fa'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';

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

    const [displayNone,setDisplayNone] = useState(false)

    const allScroolId = () =>{
      if(window.scrollY >= 200){
        setDisplayNone(true)
      }else{
        setDisplayNone(false)
      }
    }
    window.addEventListener('scroll',allScroolId)
  return (
    <div className='app' id='scrool'>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='blog' element={<Blog/>} />
      <Route path='blog-details/:id' element={<BlogDetails/>} />
      <Route path='service' element={<Services/>} />
      <Route path='contactUs' element={<Contacts/>} />
     </Routes>
     <div className={displayNone ? 'all-scrool displayBlock' : 'all-scrool displayNone'}>
      <a href="#scrool"><FaArrowUp/></a>
      </div>   
     <Footer/>
<ToastContainer/>
<MessengerCustomerChat
    pageId="300712373600974"
    appId="589016119877588"
    themeColor="#0084FF"
    loggedInGreeting="Welcome! How can we assist you today?"
    loggedOutGreeting="Please log in to chat with us."
    shouldShowDialog={true}
  />
    </div>
  );
}

export default App;
