import React, { useState } from "react";

const Search = ({ search, setInput }) => {
  const Handleinput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input className="input" type="text" onChange={Handleinput} />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
