import React from "react";
import { useOutletContext } from "react-router-dom";
import Search from "../components/Search";
import Photo from "../components/Photo";

const Homepage = () => {
  const { data, input, setInput, search, morePicture, isLoading } = useOutletContext();

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={search}
        setInput={setInput}
        input={input}
      />
      <div className="pictures">
        {data &&
          data.map((item, index) => {
            return <Photo data={item} key={index} />;
          })}
      </div>
      <div className="morePicture">
        <button className="Btn" onClick={morePicture} disabled={isLoading}>
          <span className="btnText">
            {isLoading ? "加載中..." : "更多圖片"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
