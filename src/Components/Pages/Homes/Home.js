import React from 'react';
import Service from '../Services/Service';
import Message from '../Messages/Message';
import Team from '../Teams/Team';
import Client from '../Clients/Client';
import Header from '../../Shared/NavBar/Header/Header';
import Creative from '../Creatives/Creative';
import Goal from '../OurGoal/Goal';
import Work from '../Works/Work';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Creative></Creative>
            <Goal></Goal>
            <Service></Service>
            <Client></Client>
            <Work></Work>
            <Team></Team>
            <Message></Message>
        </div>
    );
};

export default Home;