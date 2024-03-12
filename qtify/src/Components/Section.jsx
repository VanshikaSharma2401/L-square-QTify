import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import AlbumCard from "./AlbumCard";
import styles from "../../src/styles.module.css";
import Carousel from "./Carousal";
import Tab from "./Tab";
const Section = ({ Albums, error, AlbumType, isSong, setSelectedGenere ,selectedGenere}) => {
  const [collapse, setCollapse] = useState(false);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className={styles.section}>
      <div className={styles.albumContainer}>
        <h2 className={styles.topAlbums}>{AlbumType}</h2>
        {!isSong ? (
          <p className={styles.collapse} onClick={() => setCollapse(!collapse)}>
            {collapse ? "Collapse" : "Show All"}
          </p>
        ) : (
          ""
        )}
      </div>
      {isSong ? (
        <div className={styles.tab}>
          <Tab setSelectedGenere={setSelectedGenere} selectedGenere={selectedGenere}/>
        </div>
      ) : (
        ""
      )}
      {collapse ? (
        <Grid container spacing={6}>
          {Albums?.map((album) => (
            <Grid item xs={6} sm={3} md={2} key={album.id}>
              <AlbumCard album={album} isSong={isSong}/>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Carousel data={Albums} />
      )}
    </div>
  );
};

export default Section;
