import axios from "axios";
import { useEffect, useState } from "react";
const getTitans = async () => {
  let { data } = await axios.get("https://api.attackontitanapi.com/titans");
  let titans = data.results;
  return titans;
};

const Titans = () => {
  const [titanData, setTitanData] = useState([]);

  useEffect(() => {
    const fetchTitans = async () => {
      const titans = await getTitans();
      setTitanData(titans);
    };
    fetchTitans();
  }, []);
  console.log(titanData);
  return (
    <>
      <h1>Titans</h1>
      <ul>
        {titanData.map((titan) => (
          <li>{titan.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Titans;
