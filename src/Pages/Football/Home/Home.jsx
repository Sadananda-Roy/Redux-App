import React, { useEffect } from "react";
import "./Home.css";
import { Link, Outlet } from "react-router-dom";
// import { fetchMatches } from "../../../Services/FootballServices";

const Home = () => {
    useEffect(() => {
        // fetchMatches()
    }, [])
    return (
        <div className="football-home">
            <nav className="navbar">
                <ul>
                    <li><Link to="leagues">Leagues</Link></li>
                </ul>
            </nav>
            <div className="outlet-container"><Outlet /></div>
        </div>
    );
}

export default Home;