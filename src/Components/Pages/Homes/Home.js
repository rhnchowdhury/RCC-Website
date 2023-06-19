import React from 'react';
import Service from '../Services/Service';
import Message from '../Messages/Message';
import Team from '../Teams/Team';
import Work from '../Works/Work';
import Client from '../Clients/Client';
import Header from '../../Shared/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Work></Work>
            <Team></Team>
            <Service></Service>
            <Client></Client>
            <Message></Message>
        </div>
    );
};

export default Home;