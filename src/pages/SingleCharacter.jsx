import React, { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import getSingleCharData from "../utilities/getSingleCharData";
import axios from "axios";

const SingleCharacter = () => {
  const { id } = useParams();
  const [singleChar, setSingleChar] = useState("");

  useEffect(() => {
    if (id) {
      const grabCharData = async () => {
        const data = await getSingleCharData(id);
        // console.log(data);
        setSingleChar(data);
      };
      grabCharData();
    }
  }, [id]);
  console.log(singleChar)
  console.log(singleChar.img)
  return (
    <>
    <img src={singleChar.img} alt="" />
      <div>Character ID: {id}</div>
      <span>Name: {singleChar.name}</span>
      <span>Alias: {singleChar.alias}</span>
    </>
  );
};
export default SingleCharacter;
