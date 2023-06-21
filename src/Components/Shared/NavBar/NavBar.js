import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdjustmentsVerticalIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { MdForwardToInbox } from "react-icons/md";
import logo from '../../../Icon/RC-golden-logo.png';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (

        <div className="navbar bg-black">
            <div className="flex-1">
                {/* <a className="btn btn-ghost normal-case text-xl">RainCloud</a> */}
                <Link to='/'><img src={logo} alt="RainCloud" className='w-28 h-24' /></Link>
            </div>
            <div className="flex-none gap-20">
                <div className='flex'>
                    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                    <p>Get in Touch</p>
                    <span className='ml-2'><MdForwardToInbox className='w-6 h-6'></MdForwardToInbox></span>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} >
                        <div >
                            {
                                open ?
                                    <XMarkIcon onClick={() => setOpen(!open)} className="h-8 w-10 cursor-pointer text-blue-500" />
                                    :
                                    <AdjustmentsVerticalIcon onClick={() => setOpen(!open)} className="h-8 w-10 cursor-pointer text-blue-500" />
                            }


                        </div>
                    </label>
                    <ul className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/team'>Our Teams</Link></li>
                        <li><Link to='/service'>Services</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        {/* ${open ? 'right-12' : 'right-[-0px]'} */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;