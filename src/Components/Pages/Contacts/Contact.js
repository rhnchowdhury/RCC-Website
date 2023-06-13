import React from 'react';
import { FcCellPhone } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { RiUserLocationLine } from "react-icons/ri";
import Map from './Map';

const Contact = () => {
    return (
        <section className='my-10'>
            <div className='flex'>
                <div>
                    <div className='flex'>
                        <span className=''><FcCellPhone className='w-8 h-12'></FcCellPhone></span>
                        <div>
                            <p>PHONE</p>
                            <p>+8801777750875</p>
                        </div>
                    </div>
                    <div className='flex mt-8'>
                        <AiOutlineMail className='w-8 h-12'></AiOutlineMail>
                        <div>
                            <p>EMAIL:</p>
                            <p>raincloud.hr@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex mt-8'>
                        <RiUserLocationLine className='w-8 h-12'></RiUserLocationLine>
                        <div>
                            <p>OFFICE:</p>
                            <p>Rangs Shawpnil, Level 5, House 2, Road ⅔, Banani, Dhaka 1213</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='grid grid-cols-2 gap-5 ml-56'>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='ml-56 mt-4'>
                        <textarea placeholder="Write Message" className="textarea textarea-bordered textarea-lg h-40  w-full" ></textarea>
                        <button className="btn btn-warning mt-5">SEND A MESSAGE</button>
                    </div>

                </div>

            </div>
            <Map></Map>
        </section>
    );
};

export default Contact;