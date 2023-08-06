import React from 'react';
import { SlLink } from "react-icons/sl";
import { GoBroadcast } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className='m-8'>
            <h1 className='font-bold text-4xl'>ABOUT US</h1>
            <div className='flex gap-24 mt-5'>
                <div>
                    <h3>After being one of the most dynamic digital agencies in Bangladesh, RainCloud has expanded its wings and evolved into a fully-fledged 360 Marketing agency. Our mission is to deliver performance marketing objectives. Our expert teams are dedicated to advance your Brand’s performance, from strategy to execution. The dynamic team is a growing mashup of creative, technical, marketing & sales people. Over the years we have managed numerous brands both International and local, which gave the team priceless insights, knowledge and experience.</h3>
                    <Link to='/service'><button className="btn btn-outline px-8 mt-5" style={{ border: '4px solid #000' }}>Our Services</button></Link>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div>
                        <GoBroadcast className='w-8 h-12'></GoBroadcast>
                        <h1>OUR GOAL</h1>
                        <p>Deliver measurable and impactful results for our clients. Assist our clients in achieving their business objectives, expanding market reach, or building a strong brand presence.</p>
                    </div>

                    <div>
                        <AiOutlineHeart className='w-8 h-12'></AiOutlineHeart>
                        <h1>OUR PASSION</h1>
                        <p>Our passion lies in the transformative power of marketing to elevate brands, connect businesses with their target audiences, and drive sustainable growth.</p>
                    </div>
                    <div>
                        <SlLink className='w-8 h-12'></SlLink>
                        <h1>OUR PURPOSE</h1>
                        <p>Help businesses promote their products or services effectively and reach their target audience.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;