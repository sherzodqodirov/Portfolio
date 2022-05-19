import React, {useEffect, useState} from "react";
import Fade from 'react-reveal/Fade';
import SquareComponent from "./components/SquareComponent";
import {IoClose} from "react-icons/io5";
import o from './icons/0icon.svg';

const initialState = ["", "", "", "", "", "", "", "", "",];

function App() {
    const [gameState, setgameState] = useState(initialState);
    const [isico, setisco] = useState(true)

    const handleClick = (inx) => {
        let str = Array.from(gameState);
        str[inx] = isico ? <IoClose size='50px'/> : <img src={o} alt="ico"/>;
        setgameState(str);
        setisco(!isico);

    }


    const winnerGame = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a].type && gameState[a].type === gameState[b].type && gameState[a].type === gameState[c].type) {
                return gameState[a];
            }
        }
        return null;
    }

    useEffect(() => {
        const al = () => {
            alert('GAME OVER')
        }
        const winner = winnerGame();
        if (winner) {
            const timwin = setTimeout(al, 300);
            const setcler = setTimeout(() => {
                setgameState(initialState)
            }, timwin + 1000);
        }

    }, [gameState])


    return (
        <>
            <div className="app-header">

                <div className='drow juscenter'>
                    <Fade left>
                        <SquareComponent state={gameState[0]} onClick={() => handleClick(0)}/>
                    </Fade>
                    <Fade top>
                        <SquareComponent state={gameState[1]} onClick={() => handleClick(1)}/>
                    </Fade>
                    <Fade right>
                        <SquareComponent state={gameState[2]} onClick={() => handleClick(2)}/>
                    </Fade>
                </div>
                <div className='drow juscenter'>
                    <Fade left>
                        <SquareComponent state={gameState[3]} onClick={() => handleClick(3)}/>
                    </Fade>
                    <SquareComponent state={gameState[4]} onClick={() => handleClick(4)}/>
                    <Fade right>
                        <SquareComponent state={gameState[5]} onClick={() => handleClick(5)}/>
                    </Fade>
                </div>
                <div className='drow juscenter'>
                    <Fade left>
                        <SquareComponent state={gameState[6]} onClick={() => handleClick(6)}/>
                    </Fade>
                    <Fade bottom>
                        <SquareComponent state={gameState[7]} onClick={() => handleClick(7)}/>
                    </Fade>
                    <Fade right>
                        <SquareComponent state={gameState[8]} onClick={() => handleClick(8)}/>
                    </Fade>
                </div>
                <button onClick={() => setgameState(initialState)} className='btnclear'>Clear Game</button>
            </div>
            <h4 className='avtorgame'>Sherzod Dev</h4>
        </>

    );
}

export default App;
