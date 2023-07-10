import React from 'react';
import { FaMobileAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

const Message = () => {
    return (
        <div className=''>
            <p className='text-center'>Get in touch</p>
            <div className='text-center'>
                <h1 className='text-4xl font-medium '>CONTACT US</h1>
                <p className='text-lg  mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nihil facilis reiciendis officiis <br /> consectetur reprehenderit eveniet, blanditiis illo exercitationem possimus?</p>
            </div>
            <div className='grid grid-cols-3 m-8'>
                <div className="card w-96 bg-black text-primary-content">
                    <div className="card-body">
                        <span><FaMobileAlt></FaMobileAlt></span>
                        <p className='' style={{ color: 'rgb(212, 175, 55) ' }}>Phone</p>
                        <p className='' style={{ color: 'rgb(212, 175, 55) ' }}>+8801777750875</p>
                        <p className='' style={{ color: 'rgb(212, 175, 55) ' }}>+8801716688069</p>
                    </div>
                </div>
                <div className="card w-96 bg-black text-primary-content">
                    <div className="card-body">
                        <span> <IoLocationSharp></IoLocationSharp> </span>
                        <p className='text-white'>Address</p>
                        <p className='text-white'>Rangs Shawpnil, Level 5, House 2, Road ⅔, Banani, Dhaka 1213</p>

                    </div>
                </div>
                <div className="card w-96 bg-black text-primary-content">
                    <div className="card-body">
                        <span><MdAlternateEmail></MdAlternateEmail></span>
                        <p className='text-white'>Email</p>
                        <p className='text-white'>raincloud.hr@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='ml-32 space-y-5 my-5'>
                <div className='space-x-5'>
                    <input type="text" placeholder="Name" className="input border-0 w-full max-w-lg" />
                    <input type="text" placeholder="Name" className="input input-bordered w-full max-w-lg" />
                </div>
                <div>
                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-5xl" />
                </div>
                <div>
                    <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full h-56 max-w-5xl" ></textarea>
                </div>
                <div className='ml-96'>
                    <button className="btn btn-outline">Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Message;