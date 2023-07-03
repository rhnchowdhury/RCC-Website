import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu5Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { MdForwardToInbox } from "react-icons/md";
import logo from '../../../Icon/RC-golden-logo.png';
import './NavBar.css';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="navbar" >

            {/* style={{ backgroundColor: 'rgb(212,175,55)' }} */}
            <div className="navbar-start test -mb-6">
                <label className='bg-white'>
                    <input type="checkbox" />
                </label>
                {/* <div className="dropdown">
                    <label tabIndex={0} >
                        <div className=''>
                            {
                                open ?
                                    <RxCross2 onClick={() => setOpen(!open)} className="h-8 w-10 cursor-pointer text-blue-500" />
                                    :
                                    <RiMenu5Fill onClick={() => setOpen(!open)} className="h-8 w-10 cursor-pointer text-blue-500" />
                            }

                        </div>
                        <input type="checkbox" />
                    </label>
                    <ul className="mt-3 p-2 shadow  menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/team'>Our Teams</Link></li>
                        <li><Link to='/service'>Services</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        
                    </ul>
                </div> */}
            </div>
            {/* ${open ? 'right-12' : 'right-[-0px]'} */}
            <div className="navbar-center">
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}

                <Link to='/contact' className='flex'>
                    <p className='text-base font-bold'>GET IN TOUCH</p>
                    <span className='ml-2'><MdForwardToInbox className='w-6 h-6'></MdForwardToInbox></span>
                </Link>
            </div>
            <div className="navbar-end">
                <Link to='/'><img src={logo} alt="RainCloud" className='h-12 w-40' /></Link>
            </div>
        </div>
    );
};

export default NavBar;