import React from "react";
import Image from "next/image";

const PhotoItem = ({ title, imgSrc }) => {
  return (
    <div className="work__photo-item">
      <Image
        src={imgSrc}
        alt={`Digital Marketing ${title}`}
        width={400}
        height={400}
        className="work__photo-img"
      />
    </div>
  );
};

export default PhotoItem;



