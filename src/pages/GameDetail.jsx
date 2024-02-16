import axios from "axios";
import React, { useEffect, useState } from "react";

function GameDetail() {
  const [gameName, setGameName] = useState("");
  const [input, setInput] = useState("");
  const [gameData, setGameData] = useState({});

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    // e.preventDefault();
    setGameName(input);
    // console.log(gameName);
    setInput("");
  };

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(
          `https://lichess.org/game/export/${gameName}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setGameData(jsonData);
        console.log(jsonData);
      } catch (e) {
        console.log(e);
      }
    };

    fetchGame();
  }, [gameName]);
  return (
    <div>
      <h1>Game Detail</h1>
      <div className="userInput">
        <input
          className="username"
          type="text"
          placeholder="Enter Game ID"
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}> Submit </button>
      </div>
      <div>
        {gameName && <>
        <h1>Winner : {gameData.winner=="white"?"White":"Black"}</h1>
        <h2>Game Name: {gameName}</h2>
        <h4>Game ID: {gameData.id}</h4>
        <h4>Last Move at: {gameData.lastMoveAt}</h4>
        <h4>Created at: {gameData.createdAt}</h4>
        <h4>Source: {gameData.source}</h4>
        <h4>Speed: {gameData.speed}</h4>
        </>
}
      </div>
    </div>
  );
}

export default GameDetail;
