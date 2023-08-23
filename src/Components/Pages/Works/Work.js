import React from 'react';
import img1 from '../../../Client work/11 Bokul.png';
import img2 from '../../../Client work/Door_post25_04january2023.png';
import img3 from '../../../Client work/Bowling_post41_03april2023.png';
import img4 from '../../../Client work/3 Sharif.png';
import img5 from '../../../Client work/WhatsApp Image 2023-05-11 at 5.16.18 PM.jpeg';
import img6 from '../../../Client work/Post-61_16-10-2022.png';
import img7 from '../../../Client work/Post-03_04-04-2023.png';
import img8 from '../../../Client work/SLI - Apr 20.jpg';
import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <section>
            <p className='text-center'>PORTFOLIO</p>
            <div className='text-center'>
                <h1 className=" text-4xl font-medium">OUR WORK</h1>
                <p className='text-lg mt-4'>We are a dedicated team committed to providing you with exceptional <br /> solutions and top-notch services.</p>
            </div>
            <div className='m-12'>
                <div className='grid grid-cols-4 gap-3'>
                    <div className='div-1 '>
                        <img src={img1} alt="" className='opacity-50 hover:opacity-100' style={{ height: '394px' }} />
                    </div>
                    <div className=''>
                        <img src={img2} alt="" className='opacity-50 hover:opacity-100' />
                    </div>
                    <div >
                        <img src={img3} alt="" className='opacity-50 hover:opacity-100' style={{ height: '394px' }} />
                    </div>
                    <div >
                        <img src={img4} alt="" className='opacity-50 hover:opacity-100' />
                    </div>
                    <div >
                        <img src={img5} alt="" className='opacity-50 hover:opacity-100' />
                    </div>

                    <div >
                        <img src={img6} alt="" className='opacity-50 hover:opacity-100' style={{ height: '394px', marginTop: '-89px' }} />
                    </div>
                    <div >
                        <img src={img7} alt="" className='opacity-50 hover:opacity-100' />
                    </div>
                    <div >
                        <img src={img8} alt="" className='opacity-50 hover:opacity-100' style={{ height: '394px', marginTop: '-89px' }} />
                    </div>
                </div>
                <div className='flex justify-center mt-5' >
                    <Link to='/work'><button className="btn btn-active px-10 text-white" style={{ backgroundColor: '#12585a' }}>See All</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Work;