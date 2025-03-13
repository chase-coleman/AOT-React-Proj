import axios from "axios";
import { useEffect, useState } from "react";

//  use pagination to get calls for multiple pages
const getCharacters = async () => {
  let { data } = await axios.get(
    "https://api.attackontitanapi.com/characters?page=1"
  );
  let results = data.results;
  return results;
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const chars = await getCharacters();
      setCharacters(chars);
    };
    fetchCharacters();
  }, []);
  console.log(characters);

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
