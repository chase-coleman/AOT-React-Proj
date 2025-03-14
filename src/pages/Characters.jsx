import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import getCharacters from "../utilities/getCharacters";

//  use pagination to get calls for multiple pages

const Characters = () => {
  const { characters, setCharacters } = useOutletContext();
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  useEffect(() => {
    const fetchCharacters = async () => {
      const chars = await getCharacters(pages);
      // console.log(chars)

      // now we need to iterate through every "chars page", and add each character to the list
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
