import React, { useState, useEffect } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import "./InfiniteScroll.css"

export default function InfiniteScroll() {
    const [usersList, setUsersList] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)

    const getUsers = async () => {
        setLoading(true)
        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
        const data = await resp.json();
        setUsersList(prevData => [...prevData, ...data]);
        setLoading(false)
    };
    useEffect(() => {
        getUsers();
    }, [page]);
    const handleScroll = (e) => {
        const {scrollHeight, clientHeight, scrollTop} = e.currentTarget;
        if(scrollHeight - scrollTop === clientHeight) {
            setPage(prevPage => prevPage + 1);
        } 
    }

    return (
        <div className="infinite_scroll_outer_container">
            <div className="infinite_scroll_container" onScroll={handleScroll}>
                {usersList.map((item, index) => {
                    return (
                        <div className="single_item">{index+1}. {item.title}</div>
                    )
                })}
                {loading && <LinearProgress color="secondary" />}
            </div>
        </div>
    );
}

