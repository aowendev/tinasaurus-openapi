import React from "react";
import styles from "./index.module.css";

export const YouTubeEmbed = ({ data, index }) => {
  const regex =
    /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
  const videoId = regex.exec(data.url)[3];
  return (
    <section key={index}>
      <div className="container">
        <div className={styles.video}>
          <div>
            <h2>{data.title}</h2>
          </div>
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </section>
  );
};
