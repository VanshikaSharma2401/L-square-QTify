
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Section from './Components/Section'
import React, { useEffect, useState } from "react";
import { fetchData } from "./Api/api";
import { fetchNewAlbumsData , fetchSongsData} from './Api/api';

const Home = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [selectedGenere, setSelectedGenere] = useState("All");
  const [songs, setSongs] = useState([]);
  const [filteredSongs,setFilteredSongs]=useState([]);
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
  const fetchSongs = async () => {
    try {
      const response = await fetchSongsData();
      setSongs(response); 
      setFilteredSongs(response)// Assuming response.data contains the array of albums
    } catch (error) {
      console.error("Error fetching top albums:", error);
      setError(error);
    }
  }; 

  const filterSongs = () => {
    return songs.filter((song) => {
      return song?.genre?.label == selectedGenere;
    });
  };
  

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
  }, []);

  useEffect(() => {
    if(selectedGenere=="All")
    {
      setFilteredSongs(songs); 
    }
    const filteredSongs = filterSongs();
    setFilteredSongs(filteredSongs); 
  }, [selectedGenere]);

  return (
    <div>
      <Navbar/>
      <Hero />
      <Section Albums={topAlbums} error={error} AlbumType={"Top Albums"} isSong={false}/>
      <Section Albums={newAlbums} error={error} AlbumType={"New Albums"} isSong={false}/>
      <Section Albums={filteredSongs} error={error} AlbumType={"Songs"} isSong={true} selectedGenere={selectedGenere} setSelectedGenere={setSelectedGenere}/>
      
    </div>
  )
}

export default Home
