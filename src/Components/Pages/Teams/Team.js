import React from 'react';
import img1 from '../../../teams/Azfar-Rahman.png';
import img2 from '../../../teams/Fahmeda-Gulzar.png';
import img3 from '../../../teams/Mir-Ibtid-Mahmud.png';
import img4 from '../../../teams/Sadman-al-sadaf.png';

const Team = () => {
    return (
        <section>
            <p className='text-center'>CREATIVE MINDS</p>
            <div className='text-center'>
                <h1 className=" text-4xl font-medium">Our Team</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio cumque <br /> tempora hic optio quasi assumenda.</p>
            </div>
            <div>
                <div className='grid grid-cols-4 gap-4'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Team;