// MasonryGallery.js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { gallery5, gallery2, gallery3, gallery1, gallery4 } from "@/assets";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery5,
  gallery1,
  gallery1,
  gallery2,
];

const calculateColumns = (aspectRatio) => {
  // console.log(aspectRatio)
  if (aspectRatio > 1.5) {
    return 2;
  } else if (aspectRatio > 1) {
    return 1;
  } else {
    return 3;
  }
};

const MasonryGallery = () => {
  const [imageDimensions, setImageDimensions] = useState({});

  const handleImageLoad = (event, index) => {
    const aspectRatio = event.target.naturalWidth / event.target.naturalHeight;
    const columns = calculateColumns(aspectRatio);
    setImageDimensions((prevDimensions) => ({
      ...prevDimensions,
      [index]: columns,
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative col-span-${
            imageDimensions[index] || 1
          }  hover:scale-105 transition duration-500 cursor-pointer object-cover`}
        >
          <Image
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="object-fill w-full h-full rounded-lg"
            onLoad={(event) => handleImageLoad(event, index)}
            // onClick={() => console.log("first")}
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryGallery;
