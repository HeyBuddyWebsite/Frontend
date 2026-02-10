import React from "react";
import "../../../styles/slide.css";
import Image from "next/image";

const PhotoItem = ({ title, imgSrc }) => {
  return (
    <div className="work__photo-item" title={title}>
      <Image
        loading="lazy"
        width={450}
        height={450}
        src={imgSrc}
        alt={title}
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
      />
    </div>
  );
};

export default PhotoItem;
