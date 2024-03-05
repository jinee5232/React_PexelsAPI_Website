import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Photo from "../components/Photo";

const Homepage = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [SHurl, setSHURL] = useState("");
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = import.meta.env.VITE_PEXELS_AUTH;
  // const auth = "TrtIZ4FMIqRrpUYGRsehx3UF6FoL7Sb4VfohRlQ41TUwEBBwf3WhuFyr";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=16";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=16&page=1`;
  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setSHURL(searchURL);
    // setCurrentSearch(input);
  };

  const morePicture = async () => {
    let newURL;
    //這邊的加1是要加到state
    setPage(page + 1);
    if (input === "") {
      //ˊ這邊的加一是要取得不同圖片的下一筆資料
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=16`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${input}&per_page=16&page=${
        page + 1
      }`;
    }
    let result = await axios.get(newURL, {
      headers: {
        Authorization: auth,
        "Access-Control-Allow-Origin": "*",
      },
    });
    // concat接續在前面的資料內
    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
  }, []);
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {/* data && data.map是指如果有data才執行右列動作 */}
        {data &&
          data.map((item) => {
            return <Photo data={item} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default Homepage;
