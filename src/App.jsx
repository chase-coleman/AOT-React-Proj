import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";

function App() {
  const [background, setBackground] = useState()
  
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1)
  const [titanData, setTitanData] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    console.log(characters);
    console.log(titanData);
    console.log(organizations);
    console.log(page)
  }, [characters, titanData, organizations, page]);

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
