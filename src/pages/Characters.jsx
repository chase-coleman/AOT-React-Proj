import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import getCharacters from "../utilities/getCharacters";

//  use pagination to get calls for multiple pages

const Characters = () => {
  const { characters, setCharacters } = useOutletContext();

  useEffect(() => {
    const fetchCharacters = async () => {
      const chars = await getCharacters();
      setCharacters(chars);
    };
    fetchCharacters();
  }, []);
  // console.log(characters);

  return (
    <>
      <h1>Characters</h1>
      <ul>
        {characters.map((char) => (
          <li>{char.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Characters;
