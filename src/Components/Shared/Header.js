import React from 'react';
import './NavBar/Header.css';
import reel from '../../../src/Reel/All Scene_4.mp4';

const Header = () => {
    return (
        <div className='sect'>
            <div className='para-1'>
                <h1 className='text-6xl font-bold digital'>Digital Marketing Agency</h1>
                <p className='partner'>Partner with the GCC region's top digital agency for luxury, retail, and public sectors and experience the full power of ASTUDIO 360-degree digital marketing services. We'll build and manage your online brand presence, captivate your audience, and help you reach new markets.</p>
            </div>
            
            <div className='para-2'>
                <video autoPlay loop muted>
                    <source src={reel} type="video/mp4" />
                </video>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sit? Adipisci nemo, voluptas exercitationem doloribus ipsum sit, omnis labore unde officiis sapiente laborum ipsa praesentium architecto sed eveniet rerum tenetur asperiores doloremque modi. Rem sed natus eos culpa hic ut consequatur possimus, fugit architecto recusandae, laboriosam assumenda molestiae autem quaerat.
                </p> */}
            </div>
        </div>
    );
};

export default Header;