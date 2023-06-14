import React from 'react';
import { SlLink } from "react-icons/sl";
import { GoBroadcast, GoGoal } from "react-icons/go";

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
                        {/* <GoGoal></GoGoal> */}
                        <GoBroadcast></GoBroadcast>
                        {/* <GoGoal></GoGoal> */}
                        <h1>OUR GOAL</h1>
                        <p>We will inspire you to create new business opportunities with confidence. We are your reliable & accessible digital business partner.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;