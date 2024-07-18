import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';


//functional Component
const App = () => {
    // TEAM A
    const [count, setCount] = useState(0);

    const incrementCountA = () => {
        setCount(count + 1);
        stopTimer();
    }
    const decrementCountA = () => {
        if (count == 0) {
            window.alert("TEAM A SCORE CAN'T BE NEGATIVE!")
        } else {
            setCount(count - 1);
        }
    }
    const twoPointsA = () => {
        setCount(count + 2);
        stopTimer();
    }
    const threePointsA = () => {
        setCount(count + 3);
        stopTimer();
    }
    const resetScoreA = () => {
        setCount(0);
        stopTimer();
    }


    // ROUND
    const [count2, setCount2] = useState(1);

    const incrementCountC = () => {
        if (count2 >= 4) {
            window.alert("MUST NOT BE GREATER THAN 4")
        } else {
            setCount2(count2 + 1);
            resetTimer();
        }
    }
    const decrementCountC = () => {
        if (count2 == 1) {
            window.alert("ROUND CANT BE LESS THAN 1!")
        } else {
            setCount2(count2 - 1);
        }
    }


    // TEAM B
    const [count1, setCount1] = useState(0);

    const incrementCountB = () => {
        setCount1(count1 + 1);
        stopTimer();
    }
    const decrementCountB = () => {
        if (count1 == 0) {
            window.alert("TEAM B SCORE CANT BE NEGATIVE!")
        } else {
            setCount1(count1 - 1);
        }
    }
    const twoPointsB = () => {
        setCount1(count1 + 2);
        stopTimer();
    }
    const threePointsB = () => {
        setCount1(count1 + 3);
        stopTimer();
    }
    const resetScoreB = () => {
        setCount1(0);
        stopTimer();
    }


    // TIMER 
    const [timer, setTimer] = useState(720); // 12 minutes in seconds
    const [timerInterval, setTimerInterval] = useState(null);

    const startTimer = () => {
        if (!timerInterval) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer > 0) {
                        return prevTimer - 1;
                    } else {
                        clearInterval(interval);
                        return 0;
                    }
                });
            }, 1000);
            setTimerInterval(interval);
        }
    };

    const stopTimer = () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            setTimerInterval(null);
        }
    };

    const resetTimer = () => {
        stopTimer();
        setTimer(720);
    };

    const formattedTimer = `${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, '0')}`;



    return ( 
        <>
            {/* TIMER */}
            <div className='cardContainer flex justify-around' style={{padding:"10px 2rem", width: "800px"}}>
                <Card>
                    <Card.Body style={{width: "14rem"}}>
                        <Card.Title>
                            <h3 className='text-center'>
                                TIME LEFT
                            </h3>
                            <h1 className='text-center p-4 border border-info rounded bg-secondary text-white'>
                                {formattedTimer}
                            </h1>

                            <div className='BtnCont flex justify-around'>
                                <Button variant='danger' onClick={stopTimer}><i class="fa-solid fa-pause"></i></Button>
                                <Button variant='primary' onClick={startTimer}><i class="fa-solid fa-play"></i></Button>
                            </div>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>


            <div className='cardContainer flex justify-around' style={{padding:"10px 2rem", width: "800px"}}>

                {/* TEAM A */}
                <Card>
                    <Card.Body style={{width: "14rem"}}>
                        <Card.Title>
                            <h3 className='text-center'>TEAM A</h3>
                            <h1 className='text-center p-4 border border-info rounded bg-dark text-white'>
                                {count}
                            </h1>
                            
                            <div className='BtnCont flex justify-around'>
                                <Button variant='danger' onClick={decrementCountA}>-</Button>
                                <Button variant='primary' onClick={incrementCountA}>+1</Button>
                                <Button variant='secondary' onClick={twoPointsA}>+2</Button>
                                <Button variant='secondary' onClick={threePointsA}>+3</Button>
                            </div>
                            <div className='d-flex justify-around mt-2'>
                                <Button variant='danger' onClick={resetScoreA}>RESET</Button>
                            </div>
                        </Card.Title>
                    </Card.Body>
                </Card>

                {/* Round */}
                <Card>
                    <Card.Body style={{width: "14rem"}}>
                        <Card.Title>
                            <h3 className='text-center'>QUARTER</h3>
                            <h1 className='text-center p-4 border border-info rounded bg-dark text-white'>
                                {count2}
                            </h1>
                            
                            <div className='BtnCont flex justify-around'>
                                <Button variant='danger' onClick={decrementCountC}><i class="fa-solid fa-minus"></i></Button>
                                <Button variant='primary' onClick={incrementCountC}><i class="fa-solid fa-plus"></i></Button>
                            </div>
                        </Card.Title>
                    </Card.Body>
                </Card>

                {/* TEAM B */}
                <Card>
                    <Card.Body style={{width: "14rem"}}>
                        <Card.Title>
                            <h3 className='text-center'>TEAM B</h3>
                            <h1 className='text-center p-4 border border-info rounded bg-dark text-white'>
                                {count1}
                            </h1>
                            
                            <div className='BtnCont d-flex justify-content-around'>
                                <Button variant='danger' onClick={decrementCountB}>-</Button>
                                <Button variant='primary' onClick={incrementCountB}>+1</Button>
                                <Button variant='secondary' onClick={twoPointsB}>+2</Button>
                                <Button variant='secondary' onClick={threePointsB}>+3</Button>
                            </div>
                            <div className='d-flex justify-content-around mt-2'>
                                <Button variant='danger' onClick={resetScoreB}>RESET</Button>
                            </div>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
 
 
export default App;