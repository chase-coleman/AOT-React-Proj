import axios from "axios";
import { useEffect, useState } from "react";

// get the organizations
const getOrganizations = async () => {
  let { data } = await axios.get(
    "https://api.attackontitanapi.com/organizations"
  );
  let results = data.results;
  return results;
};

const Organizations = () => {
  const [organizations, setOrganizations] = useState([]);
  useEffect(() => {
    const fetchOrganizations = async () => {
      let orgs = await getOrganizations();
      setOrganizations(orgs);
    };
    fetchOrganizations();
  }, []);
  console.log(organizations);
  return (
    <>
      <h1>Organizations</h1>
      <ul>
        {organizations.map((organization) => (
          <li>{organization.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Organizations;
