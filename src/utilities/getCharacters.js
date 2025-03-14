import axios from "axios";
import { data } from "react-router-dom";

const getCharacters = async (pages) => {
  console.log(pages)
  let responses = await Promise.all(
    pages.map((page) => axios.get(`https://api.attackontitanapi.com/characters?page=${page}`)))
  const data = responses.map((res) => res.data)
  // console.log(data)
  return data;
};

export default getCharacters;
