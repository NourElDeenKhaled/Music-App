import React from "react";
import { AiFillHeart, AiFillStar } from "react-icons/all";

const Song = ({ img, title, subtitle }) => {
  return (
    <div className="song">
      <img src={img} alt="Song" className="song-img" />
      <div className="icon">
        <AiFillHeart size={20} color={"#F11717"} />
        <AiFillStar size={20} color={"#FFCF00"} />
      </div>
      <p className="song-title">{title}</p>
      <p className="song-subtitle">{subtitle}</p>
    </div>
  );
};

export default Song;
