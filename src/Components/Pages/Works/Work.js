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
            <div class="container lg:mx-16  mx-auto items-center ">
                <div class="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
                    <div class="w-full h-96 row-span-2">
                        <img
                            src={img1} alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100" />
                    </div>
                    <div class="w-full h-96 col-span-2 row-span-2">
                        <img
                            src={img2} alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 " />
                    </div>
                    <div class="w-full h-96">
                        <img
                            src={img3} alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 " />
                    </div>
                    <div class="w-full h-96">
                        <img
                            src={img4} alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 " />
                    </div>
                    <div class="w-full h-96 col-span-2 row-span-2">
                        <img
                            src={img5} alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 " />
                    </div>

                    <div class="w-full h-96 col-span-2">
                        <img
                            src={img6} alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 " />
                    </div>
                    <div class="w-full h-96">
                        <img
                            src={img7} alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 " />
                    </div>
                    <div class="w-full h-96">
                        <img
                            src={img8} alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 " />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;