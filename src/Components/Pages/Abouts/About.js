import React from 'react';
import { SlLink } from "react-icons/sl";
import { GoBroadcast } from "react-icons/go";
import { AiOutlineFlag, AiOutlineHeart } from "react-icons/ai";

const About = () => {
    return (
        <section>
            <h1 className='font-bold text-4xl'>ABOUT US</h1>
            <div className='flex gap-5'>
                <div>
                    <h3>After being one of the most dynamic digital agencies in Bangladesh, RainCloud has expanded its wings and evolved into a fully-fledged 360 Marketing agency. Our mission is to deliver performance marketing objectives. Our expert teams are dedicated to advance your Brand’s performance, from strategy to execution. The dynamic team is a growing mashup of creative, technical, marketing & sales people. Over the years we have managed numerous brands both International and local, which gave the team priceless insights, knowledge and experience.</h3>
                </div>
                <div>
                    <div>
                        <SlLink></SlLink>
                        <h1>OUR PURPOSE</h1>
                        <p>RCC serves as the bridge that connects clients with customers to encourage positive actions & change lives through innovative ideas.</p>
                    </div>
                    <div>
                        <GoBroadcast></GoBroadcast>
                        <h1>OUR GOAL</h1>
                        <p>We will inspire you to create new business opportunities with confidence. We are your reliable & accessible digital business partner.</p>
                    </div>
                    <div>
                        <AiOutlineFlag></AiOutlineFlag>
                        <h1>OUR HERITAGE</h1>
                        <p>Canadian based with local presence in Dubai, United Arab Emirates since 2015, created with passion for digital and social media marketing services & strong determination to connecting brands with people.</p>
                    </div>
                    <div>
                        <AiOutlineHeart></AiOutlineHeart>
                        <h1>OUR PASSION</h1>
                        <p>Success is our driver. Our work expands to include the latest & greatest strategies that drive brand positive transformation in a world that evolves faster than ever.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;