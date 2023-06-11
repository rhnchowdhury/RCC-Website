import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-500 pt-8'>
            <p className='text-center text-white'>Get in touch</p>
            <div className='text-center'>
                <h1 className='text-4xl font-medium text-white'>CONTACT US</h1>
                <p className='text-lg text-white mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nihil facilis reiciendis officiis <br /> consectetur reprehenderit eveniet, blanditiis illo exercitationem possimus?</p>
            </div>
            <div className='grid grid-cols-3 m-8'>
                <div className="card w-96 bg-zinc-600 text-primary-content">
                    <div className="card-body">
                        <span><FaMobileAlt></FaMobileAlt></span>
                        <p className='text-white'>Phone</p>
                        <p className='text-white'>+8801777750875</p>
                        <p className='text-white'>+8801716688069</p>
                    </div>
                </div>
                <div className="card w-96 bg-zinc-600 text-primary-content">
                    <div className="card-body">
                        <span> <IoLocationSharp></IoLocationSharp> </span>
                        <p className='text-white'>Address</p>
                        <p className='text-white'>Rangs Shawpnil, Level 5, House 2, Road ⅔, Banani, Dhaka 1213</p>

                    </div>
                </div>
                <div className="card w-96 bg-zinc-600 text-primary-content">
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
            <div>
                <footer className="footer footer-center p-10 bg-black text-base-content rounded">
                    <div>
                        <div className="grid grid-flow-col gap-4">
                            <button className='bg-white rounded-full'><Link to='https://www.facebook.com/Raincloudcommunications' target="_blank" rel="noopener noreferrer"><BsFacebook className='w-8 h-8'></BsFacebook></Link> </button>
                            <button className='bg-white rounded-full'><Link to='https://www.instagram.com/raincloud.communications/' target="_blank" rel="noopener noreferrer"><BsInstagram className='w-8 h-8'></BsInstagram></Link></button>
                            <button className='bg-white rounded-full'><Link to='https://www.linkedin.com/company/raincloud-communications/' target="_blank" rel="noopener noreferrer"><BsLinkedin className='w-8 h-8'></BsLinkedin></Link></button>


                            {/* <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a> */}
                        </div>
                    </div>
                    <div>
                        <p className='text-white'>Copyright © 2023 - All right reserved by RainCloud Communications Ltd</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;