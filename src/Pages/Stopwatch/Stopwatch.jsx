import React, {useState, useEffect} from "react";
import "./Stopwatch.css";
import Button from '@mui/material/Button';

const Stopwatch = () => {
    const [currTime, setCurrTime] = useState(0);
    const [isStopDisabled, setIsStopDisabled] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [stopwatchInterval, setStopwatchInterval] = useState(null);

    useEffect(() => {
        if(isRunning) {
            const intervalId = setInterval(() => {
                setCurrTime(prev => prev + 1)
            }, 1000);
            setStopwatchInterval(intervalId)
        }
    }, [isRunning])

    const onStart = () => {
        setIsStopDisabled(true)
        setIsRunning(true);
    };
    const onStop = () => {
        setIsRunning(false);
        setIsStopDisabled(false)
        clearInterval(stopwatchInterval)
    };
    const onReset = () => {
        setIsRunning(false);
        setIsStopDisabled(false)
        clearInterval(stopwatchInterval)
        setCurrTime(0)
    };

    return (
        <div className="stopwatch_container">
            <h1>{currTime}</h1>

            <Button variant="contained" onClick={onStart} disabled={isStopDisabled} >Start</Button>
            <Button variant="contained" onClick={onStop} >Stop</Button>
            <Button variant="contained" onClick={onReset} >Reset</Button>
        </div>
    );
}
 
export default Stopwatch;