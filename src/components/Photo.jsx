import React from "react";

const Photo = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt={data.photographer} />
        <div className="hoverOverlay">
          <div className="authorPill">
            <span>{data.photographer}</span>
          </div>
          <a
            className="downloadPill"
            target="_blank"
            href={data.src.original}
            download
            rel="noreferrer"
          >
            下載
          </a>
        </div>
      </div>
    </div>
  );
};

export default Photo;
