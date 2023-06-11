import React from 'react';

const Service = () => {
    return (
        <div>
            <p className='text-center'>WHAT CAN WE DO</p>
            <div className='text-center'>
                <h1 className=" text-4xl font-medium">OUR SERVICES</h1>
                <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nihil facilis reiciendis officiis <br /> consectetur reprehenderit eveniet, blanditiis illo exercitationem possimus?</p>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div className="card w-96 bg-zinc-600 text-primary-content">
                    <div className="card-body">
                        <span><img src="" alt="content" /></span>
                        <p className='text-white'>Phone</p>
                        <p className='text-white'>+8801777750875</p>
                        <p className='text-white'>+8801716688069</p>
                    </div>
                </div>
                <div className="card w-96 bg-zinc-600 text-primary-content">
                    <div className="card-body">
                        <span></span>
                        <p className='text-white'>Phone</p>
                        <p className='text-white'>+8801777750875</p>
                        <p className='text-white'>+8801716688069</p>
                    </div>
                </div>
                <div className="card w-96 bg-zinc-600 text-primary-content">
                    <div className="card-body">
                        <span></span>
                        <p className='text-white'>Phone</p>
                        <p className='text-white'>+8801777750875</p>
                        <p className='text-white'>+8801716688069</p>
                    </div>
                </div>
                <div className="card w-96 bg-zinc-600 text-primary-content">
                    <div className="card-body">
                        <span></span>
                        <p className='text-white'>Phone</p>
                        <p className='text-white'>+8801777750875</p>
                        <p className='text-white'>+8801716688069</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;