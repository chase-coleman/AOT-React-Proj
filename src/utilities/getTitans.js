import axios from "axios";

const getTitans = async () => {
  let { data } = await axios.get("https://api.attackontitanapi.com/titans");
  let titans = data.results;
  return titans;
};

export default getTitans;
