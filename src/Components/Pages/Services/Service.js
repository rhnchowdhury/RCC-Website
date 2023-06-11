import React from 'react';
import logo1 from '../../../logo/contain.png';
import logo2 from '../../../logo/graphic-design.png';
import logo3 from '../../../logo/ads.png';
import logo4 from '../../../logo/photo.png';

const Service = () => {
    return (
        <div>
            <p className='text-center'>WHAT CAN WE DO</p>
            <div className='text-center'>
                <h1 className=" text-4xl font-medium">OUR SERVICES</h1>
                <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nihil facilis reiciendis officiis <br /> consectetur reprehenderit eveniet, blanditiis illo exercitationem possimus?</p>
            </div>
            <div className='grid grid-cols-2 gap-5 ml-44 my-8'>
                <div className="card w-96 bg-zinc-200 text-primary-content">
                    <div className="card-body">
                        <span className='flex justify-center'><img src={logo1} alt="content" className="w-12 h-12 " /></span>
                        <h1 className='text-black text-center text-xl font-medium'>Content Creation</h1>
                        <p className='text-black text-center'>Brainstorming innovative ideas and executing them in the form of digital media information is what content creation is about. Through this we help our client to aware its audience about the brand and keep them engaged. Our target is to stay on top of mind.</p>
                    </div>
                </div>
                <div className="card w-96 bg-zinc-200 text-primary-content">
                    <div className="card-body">
                        <span className='flex justify-center'><img src={logo2} alt="content" className="w-12 h-12 " /></span>
                        <p className='text-black text-center text-xl font-medium'>Graphic Design</p>
                        <p className='text-black text-center'>Now, once the ideas are jotted down, it’s time for the visualizers to put them to life on the screens with eye-catching designs and animation. We gotta tell the story right. Right?</p>
                    </div>
                </div>
                <div className="card w-96 bg-zinc-200 text-primary-content">
                    <div className="card-body">
                        <span className='flex justify-center'><img src={logo3} alt="content" className="w-12 h-12 " /></span>
                        <p className='text-black text-center text-xl font-medium'>Ads and Optimization</p>
                        <p className='text-black text-center'>Once we have the visually pleasing content ready, It is time to promote it To its target audience to get the maximum reach and engagement. We keep Refining the audience from previous insights and optimise ads accordingly. We are good at it.</p>
                    </div>
                </div>
                <div className="card w-96 bg-zinc-200 text-primary-content">
                    <div className="card-body">
                        <span className='flex justify-center'><img src={logo4} alt="content" className="w-12 h-12 " /></span>
                        <p className='text-black text-center text-xl font-medium'>Photo & Video Production</p>
                        <p className='text-black text-center'>Whenever a production is needed, be it Photography or Videography, we got you covered.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Service;