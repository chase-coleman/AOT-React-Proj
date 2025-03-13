import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";

function App() {
  const [characters, setCharacters] = useState([]);
  const [titanData, setTitanData] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    console.log(characters);
    console.log(titanData);
    console.log(organizations);
  }, [characters, titanData, organizations]);

  return (
    <>
      <div
        className="pageContainer h-screen w-screen 
      bg-[url('images/aotbg.jpg')] bg-cover bg-center
      flex flex-col items-center"
      >
        <NavBar />
        <Outlet
          context={{
            characters,
            setCharacters,
            titanData,
            setTitanData,
            organizations,
            setOrganizations,
          }}
        />
      </div>
    </>
  );
}

export default App;
