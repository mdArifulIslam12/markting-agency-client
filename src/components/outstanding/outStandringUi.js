import React from 'react';
import './OutStandingUi.css'

const OutStandringUi = () => {
    return (

        <div data-aos="flip-right"
        
            data-aos-duration="500"
            data-aos-easing="ease-in" className="col-lg-12 outStandingUi-section outStandingUi-section-1 show" id='1'>
            <div className="row">
                <div className="col-lg-5 text-center h-100 my-auto img ">
                    <img src="https://wp.xpeedstudio.com/seocify/home-eighteen/wp-content/uploads/sites/30/2018/12/t1_icon_big.png" className='mt-3' alt="" />
                </div>
                <div className="col-lg-7 py-5 outstanding-ui-section-details pe-5 ">
                    <h3>Real Time Analytice</h3>
                    <p className='details mt-3'>Gain valuable insights and make data-driven decisions with real-time analytics. Monitor website traffic, track user behavior, and optimize your marketing efforts in the moment for maximum impact and success. Stay ahead of the competition with real-time analytics.</p>
                    <div className='d-flex row outstanding-img-section my-4'>
                        <span className='d-flex col-lg-5  img-1 me-2'>
                            <img src="https://wp.xpeedstudio.com/seocify/home-eighteen/wp-content/uploads/sites/30/2018/12/t1_icon_list_v1-1.png" className='' alt="" />
                            <p className='ms-3'>Far far away, behind the word mountains</p>
                        </span>
                        <span className='d-flex col-lg-6 img-2 me-2'>
                            <img src="https://wp.xpeedstudio.com/seocify/home-eighteen/wp-content/uploads/sites/30/2018/12/t1_icon_list_v2.png" alt="" />
                            <p className='ms-3'>Bookmarks grove right at the coast of Semantics</p>
                        </span>
                    </div>
                    <button className='outstanding-button-section-1 mb-3'>Learn More</button>
                </div>
            </div>
        </div>


    );
};

export default OutStandringUi;
