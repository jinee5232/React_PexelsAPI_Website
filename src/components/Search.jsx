import React, { useState } from "react";

const Search = ({ search, setInput }) => {
  const Handleinput = (e) => {
    setInput(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  return (
    <div className="search">
      <input
        className="input"
        type="text"
        onChange={Handleinput}
        onKeyDown={handleKeyPress}
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
