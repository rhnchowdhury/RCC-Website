import React from 'react';
import img1 from '../../../teams/Azfar-Rahman.png'

const ServicesAll = () => {
    return (
        <section>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img1} alt='' className="max-w-lg rounded-lg shadow-2xl" />
                    <div className='ml-12'>
                        <h1 className="text-5xl font-bold">Media Buying:</h1>
                        <p className="mt-12">Digital Media buying involves researching, selecting, negotiating, and executing media buys to reach a specific target audience and achieve the desired marketing goals.
                            <br /> 1. Page Promotion: Increasing the visibility, reach, and engagement of a specific webpage or website on various online platforms. It aims to attract more visitors, generate higher traffic, and achieve specific marketing or business goals.
                            <br /> 2. Product advertising: Promoting and marketing a specific product or service to potential customers.
                            <br /> 3. Post promotion: Promoting or boosting a post on social media platforms. It involves allocating a certain budget to advertise the post, targeting specific demographics or user segments, and utilising various promotional tools and features offered by the social media platform.
                            Lead Generation: Identifying and attracting potential customers or leads for a business with the goal of converting them into paying customers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesAll;