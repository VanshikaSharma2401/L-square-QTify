
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
      setSongs(response); // Assuming response.data contains the array of albums
    } catch (error) {
      console.error("Error fetching top albums:", error);
      setError(error);
    }
  }; 
  const filterSongs = () => {
    return songs.filter((song) => {
      console.log(song?.genre?.label,"song?.genere?.label")
      console.log(selectedGenere,"selectedGenere")
      console.log(song?.genre?.label == selectedGenere,"isEqual")
      return song?.genere?.label.toLowerCase() === selectedGenere.toLowerCase();
    });
  };
  

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
  }, []);

  useEffect(() => {
    const filteredSongs = filterSongs();
    console.log(filteredSongs,"filteredSongs")
    setSongs(filteredSongs); // Update state with filtered songs
  }, [selectedGenere]);

  console.log(songs,"songs")
  return (
    <div>
      <Navbar/>
      <Hero />
      <Section Albums={topAlbums} error={error} AlbumType={"Top Albums"} isSong={false}/>
      <Section Albums={newAlbums} error={error} AlbumType={"New Albums"} isSong={false}/>
      <Section Albums={songs} error={error} AlbumType={"Songs"} isSong={true} selectedGenere={selectedGenere} setSelectedGenere={setSelectedGenere}/>
      
    </div>
  )
}

export default Home
