import React from 'react';
import { FcCellPhone } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { RiUserLocationLine } from "react-icons/ri";

const Contact = () => {
    return (
        <section>
            <div className='flex'>
                <div>
                    <div className='flex'>
                        <span className=''><FcCellPhone className='w-8 h-12'></FcCellPhone></span>
                        <div>
                            <p>PHONE</p>
                            <p>+8801777750875</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <AiOutlineMail className='w-8 h-12'></AiOutlineMail>
                        <div>
                            <p>EMAIL:</p>
                            <p>raincloud.hr@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <RiUserLocationLine className='w-8 h-12'></RiUserLocationLine>
                        <div>
                            <p>OFFICE:</p>
                            <p>Rangs Shawpnil, Level 5, House 2, Road ⅔, Banani, Dhaka 1213</p>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </section>
    );
};

export default Contact;