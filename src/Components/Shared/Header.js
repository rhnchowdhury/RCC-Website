import React from 'react';
import './NavBar/Header.css';
import reel from '../../../src/Reel/All Scene_4.mp4';

const Header = () => {
    return (
        <div className='sect'>
            <div className='para-1'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque assumenda exercitationem doloremque deserunt accusamus cum eveniet sit fugiat officia iure!</p>
            </div>
            <div className='para-2'>
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At fugiat veniam consectetur a enim reprehenderit alias temporibus ab porro totam.</p> */}
            </div>
            <video src={reel}></video>
        </div>
    );
};

export default Header;