import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import AlbumCard from "./AlbumCard";
import styles from "../../src/styles.module.css";
import Carousel from "./Carousal";

const Section = ({ Albums, error, AlbumType, handleCollapse, isCollapseOrShowAll }) => {
  const[collapse,setCollapse]=useState(false)
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className={styles.section}>
      <div className={styles.albumContainer}>
        <h2 className={styles.topAlbums}>{AlbumType}</h2>
        <p className={styles.collapse} onClick={()=>setCollapse(!collapse)}>
          {collapse ? "Collapse" : "Show All"}
        </p>
      </div>
      {collapse ? (
        <Grid container spacing={6}>
          {Albums?.map((album) => (
            <Grid item xs={12} sm={3} md={2} key={album.id}>
              <AlbumCard album={album}/>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Carousel data={Albums}/>
      )}
    </div>
  );
};

export default Section;
