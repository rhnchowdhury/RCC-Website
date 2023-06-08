import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-500'>
            <div className='text-center'>
                <h1 className='text-4xl font-medium text-white'>CONTACT US</h1>
                <p className='text-lg text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nihil facilis reiciendis officiis <br /> consectetur reprehenderit eveniet, blanditiis illo exercitationem possimus?</p>
            </div>
            <div className='ml-32 space-y-5 my-5 place-items-center'>
                <div className='space-x-5'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                </div>
            </div>
        </div>
    );
};

export default Footer;