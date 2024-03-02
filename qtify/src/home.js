
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Section from './Components/Section'
import React, { useEffect, useState } from "react";
import { fetchData } from "./Api/api";
import { fetchNewAlbumsData } from './Api/api';
const Home = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [isCollapseOrShowAll,setisCollapseOrShowAll]=useState(false)
  const [isCollapseOrShowAllForNew,setisCollapseOrShowAllForNew]=useState(false)
  const [error, setError] = useState(null);
  const fetchTopAlbums = async () => {
    try {
      const response = await fetchData();
      setTopAlbums(response); // Assuming response.data contains the array of albums
    } catch (error) {
      console.error("Error fetching top albums:", error);
      setError(error);
    }
  };
  const fetchNewAlbums = async () => {
    try {
      const response = await fetchNewAlbumsData();
      setNewAlbums(response); // Assuming response.data contains the array of albums
    } catch (error) {
      console.error("Error fetching top albums:", error);
      setError(error);
    }
  };
  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
  }, []);
  const handleCollapseForTopAlbums = () => {
    setisCollapseOrShowAll(!isCollapseOrShowAll);
  };
  
  const handleCollapseForNewAlbums = () => {
    setisCollapseOrShowAllForNew(!isCollapseOrShowAllForNew);
  };
  
  return (
    <div>
      <Navbar/>
      <Hero />
      <Section Albums={topAlbums} error={error} AlbumType={"Top Albums"} handleCollapse={handleCollapseForTopAlbums} isCollapseOrShowAll={isCollapseOrShowAll}/>
      <Section Albums={newAlbums} error={error} AlbumType={"New Albums"} handleCollapse={handleCollapseForNewAlbums} isCollapseOrShowAll={isCollapseOrShowAllForNew}/>
    </div>
  )
}

export default Home
