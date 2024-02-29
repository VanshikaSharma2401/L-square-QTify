import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import AlbumCard from "./AlbumCard";
import styles from "../../src/styles.module.css";
import { fetchData } from "../Api/api";

const Section = ({Albums,error,AlbumType,CollapseOrShow}) => {
  // const [topAlbums, setTopAlbums] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchTopAlbums = async () => {
  //     try {
  //       const response = await fetchData();
  //       console.log("Response:", response);
  //       setTopAlbums(response); // Assuming response.data contains the array of albums
  //     } catch (error) {
  //       console.error("Error fetching top albums:", error);
  //       setError(error);
  //     }
  //   };

  //   fetchTopAlbums();
  // }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className={styles.section}>
      <div className={styles.albumContainer}>
        <h2 className={styles.topAlbums}>{AlbumType}</h2>
        <p className={styles.collapse}>{CollapseOrShow}</p>
      </div>
      <Grid container spacing={6}>
        {Albums?.map((album) => (
          <Grid item xs={12} sm={3} md={2} key={album.id}>
            <AlbumCard album={album}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Section;
