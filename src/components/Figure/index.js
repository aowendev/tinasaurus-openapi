import React from "react";

const Figure = ({ img, caption, size }) => {
  const src = ".." + img;

  return (
    <div class="zoom">
      <figure>
        <img src={src} alt={caption} width={size} />
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
};

export default Figure;
