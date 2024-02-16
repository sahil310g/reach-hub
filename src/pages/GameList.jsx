import axios from 'axios';
import React, { useEffect, useState } from 'react'

function GameList() {

    const [user, setUser] = useState('');
    const [input, setInput] = useState('');
    const [gameData, setGameData] = useState({});

    const handleChange = (e) => {
        setInput(e.target.value); 
    }

    const handleSubmit = () => {
        // e.preventDefault();
        setUser(input);
        console.log(user);
        setInput('');
    }

    useEffect(() => {
        const fetchGame = async () =>{
            try {
                const response = await fetch(
                  `https://lichess.org/api/games/user/${user}`,
                  {
                    method: "GET",
                    headers:{
                        // 'Content-Type': 'application/json',
                        'Accept': 'application/x-ndjson'
                    }
                  }
                );
                console.log(response);
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                // const jsonData = await response.json();
                // setGameData(jsonData);
                // console.log(jsonData);
                const jsonData = await response.json();
                setGameData(jsonData);
                console.log(jsonData);

              } catch (e) {
                console.log(e);
              }
        }
        if(user!=='')
            fetchGame();
    },[user])
    
  return (
    <div>
        <div className="userInput">
            <input className='username' type="text" placeholder='Enter your username' value={input} onChange={handleChange} />
            <button onClick={handleSubmit}> Submit </button>
        </div>
        <div className="gameDisplay">

        </div>
    </div>
  )
}

export default GameList