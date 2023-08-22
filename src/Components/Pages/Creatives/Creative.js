import React from 'react';
import img1 from '../../../logo/creative-1.png';
import img2 from '../../../logo/creative-2.png';
import img3 from '../../../logo/creative-3.png';
import img4 from '../../../logo/creative-4.png';

const Creative = () => {
    return (
        <section className='my-5'>
            <div className="carousel w-full" style={{ height: '500px' }}>
                <div id="slider1" className="carousel-item relative w-full">
                    <img src={img1} alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slider4" className="btn btn-circle">❮</a>
                        <a href="#slider2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slider2" className="carousel-item relative w-full">
                    <img src={img2} alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slider1" className="btn btn-circle">❮</a>
                        <a href="#slider3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slider3" className="carousel-item relative w-full">
                    <img src={img3} alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slider2" className="btn btn-circle">❮</a>
                        <a href="#slider4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slider4" className="carousel-item relative w-full">
                    <img src={img4} alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slider3" className="btn btn-circle">❮</a>
                        <a href="#slider1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Creative;