import React from 'react';
import Service from '../Services/Service';
import Message from '../Messages/Message';
import Team from '../Teams/Team';
import Work from '../Works/Work';

const Home = () => {
    return (
        <div>
            <Work></Work>
            <Team></Team>
            <Service></Service>
            <Message></Message>
        </div>
    );
};

export default Home;