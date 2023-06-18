import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdjustmentsVerticalIcon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '../../../Icon/Rcc logo.png';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (

        <div className="navbar bg-base-100">
            <div className="flex-1">
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <Link to='/'><img src={logo} alt="RainCloud" className='w-16 h-20' /></Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div onClick={() => setOpen(!open)} className="h-6 w-6 text-blue-500">
                            {
                                open ?
                                    <XMarkIcon />
                                    :
                                    <AdjustmentsVerticalIcon />
                            }


                        </div>
                    </label>
                    <ul className={`mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 ${open ? 'right-32' : 'right-[-32]'}`}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/team'>Our Teams</Link></li>
                        <li><Link to='/service'>Services</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;