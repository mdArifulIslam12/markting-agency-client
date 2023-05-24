import React from 'react';
import './AboutAsncy.css'
import AsncyImg from '../../assets/img6.png'
import CountUp from 'react-countup';

const AboutAsncySection = () => {
    return (
        <div className='container asncy my-5'>
            <div className="row g-4 ">
                <div className="col-lg-6">
                    <img src={AsncyImg} alt="" />
                </div>
                <div className="col-lg-6">
                    <h2>Why Our Agency</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni ab hic vitae autem assumenda aliquam ratione tempora odit omnis</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis corporis qui laudantium deserunt, autem non illo nisi quas.</p>
                    <div className='d-flex mt-5'>
                        <div className='count'>
                            <CountUp  start={0}  end={725}  duration={5}  />
                            <p>Satisfied Clients</p>
                        </div>
                        <div className='count'>
                        <CountUp  start={0}  end={425}  duration={5} />
                        <p>Project Lunched</p>
                        </div>
                        <div className='count'>
                        <CountUp  start={0}  end={4}  duration={5} />
                        <p>Years Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAsncySection;