import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 text-base-content rounded" style={{ backgroundColor: '#12585a' }}>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <button className='bg-white rounded-full'><Link to='https://www.facebook.com/Raincloudcommunications' target="_blank" rel="noopener noreferrer"><BsFacebook className='w-8 h-8'></BsFacebook></Link> </button>
                        <button className='bg-white rounded-full'><Link to='https://www.instagram.com/raincloud.communications/' target="_blank" rel="noopener noreferrer"><BsInstagram className='w-8 h-8'></BsInstagram></Link></button>
                        <button className='bg-white rounded-full'><Link to='https://www.linkedin.com/company/raincloud-communications/' target="_blank" rel="noopener noreferrer"><BsLinkedin className='w-8 h-8'></BsLinkedin></Link></button>
                    </div>
                </div>
                <div>
                    <p className='text-white'>Copyright © 2023 - All right reserved by RainCloud Communications Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;