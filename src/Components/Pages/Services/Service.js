import React from 'react';
import logo1 from '../../../logo/content-1.png';
import logo2 from '../../../logo/graphics-1.png';
import logo3 from '../../../logo/ads-1.png';
import logo4 from '../../../logo/video-1.png';

const Service = () => {
    return (
        <section className=''>
            <p className='text-center'>WHAT CAN WE DO</p>
            <div className='text-center'>
                <h1 className=" text-4xl font-medium">OUR SERVICES</h1>
                <p className='text-lg mt-4'>We are a dedicated team committed to providing you with exceptional <br /> solutions and top-notch services.</p>
            </div>
            <div className='grid grid-cols-4 gap-5 my-8 mx-12'>
                <div className="card w-72 bg-black text-primary-content">
                    <div className="card-body">
                        <span className='flex justify-center'><img src={logo1} alt="content" className="w-12 h-12" style={{ backgroundColor: "rgb(212, 175, 55)" }} /></span>
                        <h1 className='text-center text-xl font-medium' style={{ color: "rgb(212, 175, 55)" }}>Content Creation</h1>
                        <p className='text-center' style={{ color: "rgb(212, 175, 55)" }}>Brainstorming innovative ideas and executing them is what content creation is about. We try to help our client to aware its audience about the brand and keep them engaged.</p>
                    </div>
                </div>
                <div className="card w-72 bg-black text-primary-content">
                    <div className="card-body">
                        <span className='flex justify-center'><img src={logo2} alt="content" className="w-12 h-12" style={{ backgroundColor: "rgb(212, 175, 55)" }} /></span>
                        <p className='text-center text-xl font-medium' style={{ color: "rgb(212, 175, 55)" }}>Graphic Design</p>
                        <p className='text-center' style={{ color: "rgb(212, 175, 55)" }}>Once the ideas are jotted down, it’s time for the visualizers to put them to life on the screens with eye-catching designs and animation.</p>
                    </div>
                </div>
                <div className="card w-72 bg-black text-primary-content">
                    <div className="card-body">
                        <span className='flex justify-center'><img src={logo3} alt="content" className="w-12 h-12" style={{ backgroundColor: "rgb(212, 175, 55)" }} /></span>
                        <p className='text-center text-xl font-medium' style={{ color: "rgb(212, 175, 55)" }}>Ads and Optimization</p>
                        <p className=' text-center' style={{ color: "rgb(212, 175, 55)" }}>Once we have the visually pleasing content ready, we promote it to its target audience to get the maximum reach and engagement.</p>
                    </div>
                </div>
                <div className="card w-72 bg-black text-primary-content">
                    <div className="card-body">
                        <span className='flex justify-center'><img src={logo4} alt="content" className="w-12 h-12" style={{ backgroundColor: "rgb(212, 175, 55)" }} /></span>
                        <p className='text-center text-xl font-medium' style={{ color: "rgb(212, 175, 55)" }}>Photo & Video Production</p>
                        <p className='text-center' style={{ color: "rgb(212, 175, 55)" }}>When it comes to Photography or Videography, our team works closely with the client to ensure the content meets their expectations and captures the desired brand message.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;