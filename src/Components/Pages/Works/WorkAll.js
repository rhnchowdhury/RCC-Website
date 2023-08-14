import React from 'react';
import img1 from '../../../Client work/24_feb_yeasin.png';
import img2 from '../../../Client work/Post-2.png';
import img3 from '../../../Client work/SLI - May 14.jpg';
import img4 from '../../../Client work/SH - May 10.png';
import img5 from '../../../Client work/Dekchi - June 22.jpg';
import img6 from '../../../Client work/Post-08_05-09-2022.png';
import img7 from '../../../Client work/Post-29_13-10-2022.png';
import img8 from '../../../Client work/Post-11.png';
import img9 from '../../../Client work/SLI - May 8.jpg';
import img10 from '../../../Client work/SH - July 31.png';
import img11 from '../../../Client work/Dekchi - July 30.png';
import img12 from '../../../Client work/Eden Apple Pie 12.09.22.jpg';

const WorkAll = () => {
    return (
        <div className='m-16'>
            <div className='grid grid-cols-6 gap-2'>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" className='h-64' />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <img src={img4} alt="" className='h-64' />
                </div>
                <div>
                    <img src={img5} alt="" />
                </div>
                <div>
                    <img src={img6} alt="" className='h-64' />
                </div>
                <div>
                    <img src={img7} alt="" className='-mt-14 h-64' />
                </div>
                <div>
                    <img src={img8} alt="" />
                </div>
                <div>
                    <img src={img9} alt="" className='-mt-14 h-64' />
                </div>
                <div>
                    <img src={img10} alt="" className='' />
                </div>
                <div>
                    <img src={img11} alt="" className='-mt-14 h-64' />
                </div>
                <div>
                    <img src={img12} alt="" className='' />
                </div>


            </div>
        </div>
    );
};

export default WorkAll;