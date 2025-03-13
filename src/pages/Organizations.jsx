import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import getOrganizations from "../utilities/getOrgs";

// get the organizations

const Organizations = () => {
  const { organizations, setOrganizations } = useOutletContext();

  useEffect(() => {
    const fetchOrganizations = async () => {
      let orgs = await getOrganizations();
      setOrganizations(orgs);
    };
    fetchOrganizations();
  }, []);

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
