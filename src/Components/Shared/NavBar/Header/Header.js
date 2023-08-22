import React from 'react';
import './Header.css';
import reel from '../../../../Reel/All Scene_4.mp4';

const Header = () => {
    return (
        <div className='full-section'>
            <div className='first-part'>
                <h1 className='text-6xl font-bold text-white title'>Digital Marketing Agency</h1>
                <p className=' text-white paragraph'>Imaginative, inspired team with contagious energy. We create impactful communication experiences that captivate and inspire. Let us bring your vision to life and take your message to new heights. We'll build and manage your online brand presence, captivate your audience.</p>
            </div>

            <div className='second-part'>
                <video autoPlay loop>
                    {/* <video autoPlay loop style={{ maxWidth: '700px' }}> */}
                    <source src={reel} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Header;