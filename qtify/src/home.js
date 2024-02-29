
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Section from './Components/Section'
import React, { useEffect, useState } from "react";
import { fetchData } from "./Api/api";
import { fetchNewAlbumsData } from './Api/api';
const Home = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [error, setError] = useState(null);
  const fetchTopAlbums = async () => {
    try {
      const response = await fetchData();
      console.log("Response:", response);
      setTopAlbums(response); // Assuming response.data contains the array of albums
    } catch (error) {
      console.error("Error fetching top albums:", error);
      setError(error);
    }
  };
  const fetchNewAlbums = async () => {
    try {
      const response = await fetchNewAlbumsData();
      console.log("Response:", response);
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
  return (
    <div>
      <Navbar/>
      <Hero />
      <Section Albums={topAlbums} error={error} AlbumType={"Top Albums"} CollapseOrShow={"Collapse"}/>
      <Section Albums={newAlbums} error={error} AlbumType={"New Albums"} CollapseOrShow={"Show All"}/>
    </div>
  )
}

export default Home
