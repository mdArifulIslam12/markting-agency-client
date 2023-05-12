import React from 'react';
import './Navbar.css'
import { FaSearchengin } from 'react-icons/fa';
import { AiOutlineSound } from 'react-icons/ai';
import { MdCurrencyExchange, MdOutlineAttachEmail } from 'react-icons/md';
import { GrDocumentSound, GrShareRounded } from 'react-icons/gr';
import { SiMicrosoftsharepoint } from 'react-icons/si';
import { BiDollarCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { changeId } from '../../features/outStanding/outStandingSlice';

const Navbar = () => {
    const {id} = useSelector(state => state.Outstanding)
    const dispatch = useDispatch()
    return (
        <div className='container'>
            <div className="row row-cols-md-5 g-4 outstandingNav"> 
                  <div class="col ">
                    <span class={id == 1 ? 'nav-link active  text-center ms-0 outstanding-nav-link-1' : 'nav-link   text-center ms-0 outstanding-nav-link-1'} onClick={() => dispatch(changeId(1))}  id='outstanding-nav-link-1'>
                        <p><FaSearchengin /></p>
                        <p>Real Time Analytice</p>
                    </span>

                </div>
                <div class=" col  ">
                    <span class={id == 2 ? 'nav-link active  text-center ms-0 outstanding-nav-link-2' : 'nav-link   text-center ms-0 outstanding-nav-link-2'} id='outstanding-nav-link-2' onClick={() => dispatch(changeId(2))}>
                        <p><AiOutlineSound/></p>
                        <p>Online Marketing</p>
                    </span>

                </div>
                <div class=" col ">
                    <span class={id == 3 ? 'nav-link active  text-center ms-0 outstanding-nav-link-3' : 'nav-link   text-center ms-0 outstanding-nav-link-3'}id='outstanding-nav-link-3' onClick={() => dispatch(changeId(3))}>
                        <p><BiDollarCircle /></p>
                        <p>Pay per Click</p>
                    </span>

                </div>
                <div class="col ">
                    <span className={id == 4 ? 'nav-link active  text-center ms-0 outstanding-nav-link-4' : 'nav-link   text-center ms-0 outstanding-nav-link-4'}id='outstanding-nav-link-4' onClick={() => dispatch(changeId(4))}>
                        <p><MdOutlineAttachEmail/></p>
                        <p>Email Marketing</p>
                    </span>

                </div>
                <div class="col ">
                    <span class={id == 5 ? 'nav-link active  text-center ms-0 outstanding-nav-link-5' : 'nav-link   text-center ms-0 outstanding-nav-link-5'}id='outstanding-nav-link-5' onClick={() => dispatch(changeId(5))}>
                        <p >< SiMicrosoftsharepoint /></p>
                        <p>Social Marketing</p>
                    </span>
                </div>
           

            </div>
        </div>
    );
};

export default Navbar;