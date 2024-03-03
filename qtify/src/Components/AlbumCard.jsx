import React from "react";
import styles from "../../src/styles.module.css"
import Chip from "@mui/material/Chip";
const AlbumCard = ({album,}) => {
  return (
    <div className={styles.card}>
      <img src={album?.image} className={styles.Img} alt="dummy-card img" />
      <div className={styles.followCard}>
        <Chip
          label={`${album?.likes ? album?.likes+" "+"Likes"  : album?.follows+" "+"Follows"}`}
          sx={{ color: "white", backgroundColor: "black" }}
          style={{ alignSelf: "flex-start" }}
        />
      </div>
      <p className={styles.title}>{album.title}</p>
    </div>
  );
};

export default AlbumCard;
