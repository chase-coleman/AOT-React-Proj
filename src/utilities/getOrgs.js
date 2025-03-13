import axios from "axios";

const getOrganizations = async () => {
  let { data } = await axios.get(
    "https://api.attackontitanapi.com/organizations"
  );
  let results = data.results;
  return results;
};
export default getOrganizations;
