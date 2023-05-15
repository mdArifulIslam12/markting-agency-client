import React from 'react';
import Navbar from './Navbar';
import './Oustanding.css'
import OutStandringUi from './outStandringUi';
import OutStandingUi2 from './OutStandingUi2';
import OutStandingUi3 from './OutStandingUi3';
import OutStandingUi4 from './OutStandingUi4';
import OutStandingUi5 from './OutStandingUi5';
import { useSelector } from 'react-redux';


const Outstanding = () => {
    const {id} = useSelector(state => state.Outstanding)
    return (
        <div className='outstanding'>
            <Navbar/>
            <div className='container'>
                <div className='row mt-5 mb-5 '>
                    {id === 1 && <OutStandringUi/>}  
                    {id === 2 && <OutStandingUi2/>}  
                    {id === 3 && <OutStandingUi3/>}  
                    {id === 4 &&  <OutStandingUi4/>}  
                    {id === 5 && <OutStandingUi5/>}  
                    
                    
                    
                   
                    

                </div>
            </div>
        </div>
    );
};

export default Outstanding;