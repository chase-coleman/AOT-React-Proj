import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import getTitans from "../utilities/getTitans";

const Titans = () => {
  const { titanData, setTitanData } = useOutletContext();

  useEffect(() => {
    const fetchTitans = async () => {
      const titans = await getTitans();
      setTitanData(titans);
    };
    fetchTitans();
  }, []);
  // console.log(titanData);
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
