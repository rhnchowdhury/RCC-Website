import React from 'react';
import img1 from '../../../Client work/Eden Apple Pie 12.09.22.jpg';
import img2 from '../../../Client work/Gazi Pipe 24.10.22 v2.jpg';
import img3 from '../../../Client work/Pipe_Post_25_26december2022.png';
import img4 from '../../../Client work/Post 1.png';
import img5 from '../../../Client work/Post-08_05-09-2022.png';
import img6 from '../../../Client work/Post-61_16-10-2022.png';
import img7 from '../../../Client work/Salmon Salad 14.09.22 v2.jpg';
import img8 from '../../../Client work/Shades-13-03-22-v2.png';

const Work = () => {
    return (
        <section>
            <p className='text-center'>PORTFOLIO</p>
            <div className='text-center'>
                <h1 className=" text-4xl font-medium">OUR WORK</h1>
                <p className='text-lg mt-4'>We are a dedicated team committed to providing you with exceptional <br /> solutions and top-notch services.</p>
            </div>
            <div className='m-16'>
                <div >
                    <div >
                        <img src={img1} alt="" />
                    </div>
                    <div >
                        <img src={img2} alt="" />
                    </div>
                    <div >
                        <img src={img3} alt="" />
                    </div>
                    <div >
                        <img src={img4} alt="" />
                    </div>
                    <div >
                        <img src={img5} alt="" />
                    </div>

                    <div >
                        <img src={img6} alt="" />
                    </div>
                    <div >
                        <img src={img7} alt="" />
                    </div>
                    <div >
                        <img src={img8} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;