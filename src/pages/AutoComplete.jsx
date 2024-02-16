import React, { useEffect, useState } from "react";

function AutoComplete() {
  const [input, setInput] = useState("");
  const [playerData, setPlayerData] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(
          `https://lichess.org/api/player/autocomplete?term=${input}&object=false`,
          {
            method: "GET",
          }
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setPlayerData(jsonData);
      } catch (e) {
        console.log(e);
      }
    };

    fetchGame();
  }, [input]);
  return (
    <div>
      <h1>Autocomplete</h1>
      <div className="userInput">
        <input
          className="username"
          type="text"
          placeholder="Player ID"
          value={input}
          onChange={handleChange}
        />
      </div>
      <div>
        {playerData.map((item, index) => (
          <div key={index}>{index+1}: {item}</div>
        ))}
      </div>
    </div>
  );
}

export default AutoComplete;
