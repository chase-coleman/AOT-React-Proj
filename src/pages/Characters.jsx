import axios from "axios";
import { useEffect, useState } from "react";

//  use pagination to get calls for multiple pages
const getCharacters = async () => {
  let { data } = await axios.get(
    "https://api.attackontitanapi.com/characters?page=1"
  );
  let characters = data.results;
  return characters;
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  
  useEffect(async () => {
    console.log("Rendering");
    const chars = await getCharacters();
    console.log(chars);
    setCharacters(chars)
  }, []);

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
