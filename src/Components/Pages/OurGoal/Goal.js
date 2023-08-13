import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { GrAnnounce } from "react-icons/gr";
import { AiOutlineUserSwitch } from "react-icons/ai";

const Goal = () => {
    return (
        <section>
            <p className='text-center'>WE ARE AWESOME AGENCY</p>
            <div className='text-center mt-2'>
                <h1 className=" text-4xl font-medium">WHAT WE DO</h1>
            </div>
            <div className='grid grid-cols-3 mx-16 my-4'>
                <div className="card w-96">
                    <div className="card-body" style={{ backgroundColor: '#12585a' }}>
                        <span className='flex justify-center'><GrAnnounce className="w-12 h-12 rounded-full" style={{ backgroundColor: 'white' }}></GrAnnounce></span>
                        <h1 className='text-black text-center text-xl font-medium text-white'>Aware</h1>
                        <p className='text-black text-center text-white'>As a marketing agency, it is essential for us to recognize the significance of awareness in our day-to-day operations.</p>
                    </div>
                </div>
                <div className="card w-96">
                    <div className="card-body" style={{ backgroundColor: '#12585a' }}>
                        <span className='flex justify-center'><AiOutlineUserSwitch className="w-12 h-12 rounded-full" style={{ backgroundColor: 'white' }} ></AiOutlineUserSwitch></span>
                        <h1 className='text-black text-center text-xl font-medium text-white'>Engage</h1>
                        <p className='text-black text-center text-white'>Engagement is a critical factor that refers to the level of involvement, interaction, and connection between our brands and our target audience.</p>
                    </div>
                </div>
                <div className="card w-96">
                    <div className="card-body" style={{ backgroundColor: '#12585a' }}>
                        <span className='flex justify-center'><FaUsers className="w-12 h-12 rounded-full" style={{ backgroundColor: 'white' }}></FaUsers></span>
                        <h1 className='text-black text-center text-xl font-medium text-white'>Retention</h1>
                        <p className='text-black text-center text-white'>Retention refers to our ability to retain existing clients, ensuring their continued loyalty and satisfaction with our services.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Goal;