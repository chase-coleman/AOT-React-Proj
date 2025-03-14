import axios from "axios";
import { data } from "react-router-dom";

const getCharacters = async (pages) => {
  const allCharacters = [];
  let responses = await Promise.all(
    pages.map((page) =>
      axios.get(`https://api.attackontitanapi.com/characters?page=${page}`)
    )
  );
  const data = responses.map((res) => res.data);
  console.log(data.results);
  const characters = data;
  // console.log(characters)
  for (let obj of characters) {
    for (let char of obj.results) {
      allCharacters.push(char);
      // console.log(char)
    }
  }
  // console.log(allCharacters)

  return allCharacters;
};

export default getCharacters;
