import React from "react";
import styles from "../../src/styles.module.css";
import cardImg from "../assets/dummyCardImg.svg";
import Chip from "@mui/material/Chip";
const AlbumCard = ({album}) => {
    console.log(album,"album")
  return (
    <div className={styles.card}>
      <img src={album?.image} className={styles.Img} alt="dummy-card img" />
      <div className={styles.followCard}>
        <Chip
          label={`${album?.follows} Follows`}
          sx={{ color: "white", backgroundColor: "black" }}
          style={{ alignSelf: "flex-start" }}
        />
      </div>
    </div>
  );
};

export default AlbumCard;
