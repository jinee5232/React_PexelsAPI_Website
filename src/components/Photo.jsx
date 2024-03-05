import React from "react";

const Photo = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
        <div className="Img_btn">
          <a target="_blank" href={data.src.large}>
            下載
          </a>
        </div>
        <div className="Img_grapher">
          {/* <img className="grapher_img" src={data.photographer_url} alt="" /> */}
          <p>{data.photographer}</p>
        </div>
      </div>
    </div>
  );
};

export default Photo;
