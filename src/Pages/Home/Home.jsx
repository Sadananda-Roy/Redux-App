import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ol>
                <li><Link to="stopwatch">Stopwatch</Link></li>
                <li><Link to="todo">Todo List</Link></li>
                <li><Link to="chat">Chat App</Link></li>
            </ol>
        </div>
    )
}

export default Home