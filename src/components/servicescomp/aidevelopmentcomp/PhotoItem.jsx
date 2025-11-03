import React from "react";
import "../../../styles/slide.css";
import Image from "next/image";

const PhotoItem = ({ title, imgSrc }) => {
  return (
    <div className="work__photo-item" title={title}>
      <Image loading="lazy" width={450} height={450} src={imgSrc} alt={title} />
    </div>
  );
};

export default PhotoItem;
