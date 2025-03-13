import axios from "axios";

const getCharacters = async () => {
  let { data } = await axios.get(
    "https://api.attackontitanapi.com/characters?page=1"
  );
  let results = data.results;
  return results;
};

export default getCharacters;
