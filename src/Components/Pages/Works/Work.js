import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { GrAnnounce } from "react-icons/gr";
import { AiOutlineUserSwitch } from "react-icons/ai";

const Work = () => {
    return (
        <section>
            <p className='text-center'>WE ARE AWESOME AGENCY</p>
            <div className='text-center mt-2'>
                <h1 className=" text-4xl font-medium">WHAT WE DO</h1>
            </div>
            <div className='grid grid-cols-3 mx-16 my-4'>
                <div className="card w-96">
                    <div className="card-body bg-black">
                        <span className='flex justify-center'><GrAnnounce className="w-12 h-12 rounded-full" style={{ backgroundColor: 'rgb(212,175,55)' }}></GrAnnounce></span>
                        <h1 className='text-black text-center text-xl font-medium' style={{ color: 'rgb(212,175,55)' }}>Aware</h1>
                        <p className='text-black text-center' style={{ color: 'rgb(212,175,55)' }}>As a marketing agency, it is essential for us to recognize the significance of awareness in our day-to-day operations.</p>
                    </div>
                </div>
                <div className="card w-96">
                    <div className="card-body bg-black">
                        <span className='flex justify-center'><AiOutlineUserSwitch className="w-12 h-12 rounded-full" style={{ backgroundColor: 'rgb(212,175,55)' }} ></AiOutlineUserSwitch></span>
                        <h1 className='text-black text-center text-xl font-medium' style={{ color: 'rgb(212,175,55)' }}>Engage</h1>
                        <p className='text-black text-center' style={{ color: 'rgb(212,175,55)' }}>Engagement is a critical factor that refers to the level of involvement, interaction, and connection between our brands and our target audience.</p>
                    </div>
                </div>
                <div className="card w-96">
                    <div className="card-body bg-black">
                        <span className='flex justify-center'><FaUsers className="w-12 h-12 rounded-full" style={{ backgroundColor: 'rgb(212,175,55)' }}></FaUsers></span>
                        <h1 className='text-black text-center text-xl font-medium' style={{ color: 'rgb(212,175,55)' }}>Retention</h1>
                        <p className='text-black text-center' style={{ color: 'rgb(212,175,55)' }}>Retention refers to our ability to retain existing clients, ensuring their continued loyalty and satisfaction with our services.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;