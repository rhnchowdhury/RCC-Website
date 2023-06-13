import React from 'react';
import img1 from '../../../teams/Azfar-Rahman.png';
import img2 from '../../../teams/Fahmeda-Gulzar.png';
import img3 from '../../../teams/Golam-Isnad-Ahmed.png';
import img4 from '../../../teams/MD-Yeasin-Ahmed.png';
import img5 from '../../../teams/MD-Zakarul.png';
import img6 from '../../../teams/Mahmudul-Hasan-Bokul.png';
import img7 from '../../../teams/Mir-Ibtid-Mahmud.png';
import img8 from '../../../teams/Moumita-Saha.png';
import img9 from '../../../teams/Raad-Rahman.png';
import img10 from '../../../teams/Redwanur-Rahman-Rafi.png';
import img11 from '../../../teams/Sadia-Hossain-Lubna.png';
import img12 from '../../../teams/Sadman-al-sadaf.png';
import img13 from '../../../teams/Sharif-Hossen.png';

const TeamAll = () => {
    return (
        <section>
            <p className='text-center'>CREATIVE MINDS</p>
            <div className='text-center'>
                <h1 className=" text-4xl font-medium">Our Team</h1>
                <p classsName='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio cumque <br /> tempora hic optio quasi assumenda.</p>
            </div>
            <div className='my-5'>
                <div className='grid grid-cols-4 gap-4'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                    <img src={img11} alt="" />
                    <img src={img12} alt="" />
                    <img src={img13} alt="" />
                </div>
            </div>
        </section>
    );
};

export default TeamAll;