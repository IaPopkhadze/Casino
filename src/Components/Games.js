import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
function Games() {
  const [game, setGame] = useState([]);
  const URL = "https://rolletto.com/api/game/getgametemplates/1/1/1";

  const getData = async () => {
    const result = await Axios.get(URL);
    setGame(result.GameTemplates);
    console.log(game)
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>hey there! </div>;
}

export default Games;
