import React from 'react';
import { Link } from 'react-router-dom';
import Stopwatch from '../../Stopwatch/Stopwatch';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="stopwatch"><Stopwatch /></Link>
        </div>
    )
}

export default Home