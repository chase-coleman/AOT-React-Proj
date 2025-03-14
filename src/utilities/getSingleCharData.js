import axios from "axios";

const getSingleCharData = async (id) => {
  const { data } = await axios.get(
    `https://api.attackontitanapi.com/characters/${id}`
  );
  return data;
};
export default getSingleCharData;
