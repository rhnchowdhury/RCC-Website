import React from 'react';
import Service from '../Services/Service';
import Message from '../Messages/Message';
import Team from '../Teams/Team';

const Home = () => {
    return (
        <div>
            <Team></Team>
            <Service></Service>
            <Message></Message>
        </div>
    );
};

export default Home;